var sessionUtils = require('../utils/sessionUtils');
var util=require('util');
var databaseUtils=require('../utils/databaseUtils');

module.exports = {
    showstatus: function* (next){
        console.log(1);
        var tpaid=this.currentUser.useid;//set tpa tpo id here
        var queryString=" select u.useid, s.stuid, u.user_id, u.name, ec.class, ec.branch, e.placed,ec.year from tb_user u, tb_edud e, tb_stud s,tb_edu_cors ec, tb_tpa t, tb_tpastudasign a where t.uid=%s and t.tpaid=a.tpa_id and a.uid=u.useid and s.uid=a.uid and e.sid=s.stuid and ec.stu_id=s.stuid and year=(select max(year) from tb_user u, tb_edud e, tb_stud s,tb_edu_cors ec, tb_tpa t, tb_tpastudasign a where t.uid=%s and t.tpaid=a.tpa_id and a.uid=u.useid and s.uid=a.uid and e.sid=s.stuid and ec.stu_id=s.stuid)";
        var query=util.format(queryString,tpaid,tpaid);
       console.log(2);
        var res=yield databaseUtils.executeQuery(query);
        console.log(res);
        yield this.render('placedstudent',{
            res:res
        });
    },
    updatedstatus: function* (next){
      console.log(3);

        var sid= this.request.body.update;
       console.log(sid);
        var a=this.request.body.optradio;
        console.log("placed");
        console.log(a);
        var queryString='update tb_edud set placed=%s where sid=%s ';
        var query=util.format(queryString,a,sid);
        var res=yield databaseUtils.executeQuery(query);
        //console.log(res);
        this.redirect('/app/placedstudent');
    },

    showdetails: function* (next){
      console.log(1);
      var stuid=this.request.body.sid;
      console.log(stuid);
      var queryString="select u.user_id,u.name, u.cont_num,s.email, s.fname, s.fnumber, e.gap,ec.class,ec.branch,ec.year,ec.marks from tb_stud s, tb_edud e, tb_user u, tb_edu_cors ec where u.useid=%s and s.uid=u.useid and s.stuid=e.sid and ec.stu_id=s.stuid";
      var query=util.format(queryString,stuid);
      var res=yield databaseUtils.executeQuery(query);
      this.body=res;
    }

}