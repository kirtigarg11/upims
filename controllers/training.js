var sessionUtils = require('../utils/sessionUtils');
var util=require('util');
var databaseUtils = require('../utils/databaseUtils');
module.exports = {

    
    showtrainingdetail:function*(next){
        console.log(1);
    var useid=this.currentUser.useid;
    var queryString='select stuid from tb_stud where uid=%s';
    var query=util.format(queryString,useid);
    var res=yield databaseUtils.executeQuery(query);
    var sid=res[0].stuid;
var queryString="select * from tb_trngd where sid=%s";
var query =util.format(queryString,sid);
var res=yield databaseUtils.executeQuery(query);
console.log(res);
yield this.render('training',{
    res:res,
    });
    },
    uptrainingdetail:function*(next){
        console.log("hey");
                
        var comp_domain=this.request.body.fields.comp_domain;
        var comp_name =this.request.body.fields.comp_name;
        var trng_area  =this.request.body.fields.trng_area;
        var trng_dur  =this.request.body.fields.trng_dur;
        var trng_des  =this.request.body.fields.trng_des;
        var mntr  =this.request.body.fields.mntr;
        var trng_pro_des  =this.request.body.fields.trng_pro_des;
        var pro_name  =this.request.body.fields.pro_name;
        var team  =this.request.body.fields.team;
        var trnid=this.request.body.fields.update;
      
        var queryString='update tb_trngd set comp_domain="%s" ,comp_name="%s",trng_area="%s",trng_dur=%s,trng_des="%s",mntr="%s",trng_pro_des="%s",pro_name="%s",team=%s where trnid=%s';
      var query=util.format(queryString,comp_domain,comp_name,trng_area,trng_dur,trng_des,mntr,trng_pro_des,pro_name,team,trnid);
      var res1=yield databaseUtils.executeQuery(query);
      this.redirect('/app/training');
    },
insertTrainingDetail:function*(next){
    console.log("insert");

    var comp_domain1=this.request.body.fields.comp_domain;
    var comp_name1 =this.request.body.fields.comp_name;
    var trng_area1  =this.request.body.fields.trng_area;
    var trng_dur1  =this.request.body.fields.trng_dur;
    var trng_des1  =this.request.body.fields.trng_des;
    var mntr1  =this.request.body.fields.mntr;
    var trng_pro_des1  =this.request.body.fields.trng_pro_des;
    var pro_name1  =this.request.body.fields.pro_name;
    var team1  =this.request.body.fields.team;
    var useid=this.currentUser.useid;
    var queryString='select stuid from tb_stud where uid=%s';
    var query=util.format(queryString,useid);
    var res=yield databaseUtils.executeQuery(query);
    var sid=res[0].stuid;
    var queryString='insert into tb_trngd(sid,comp_domain,comp_name,trng_area,trng_dur,trng_des,mntr,trng_pro_des,pro_name,team) values(%s,"%s","%s","%s",%s,"%s","%s","%s","%s",%s)';
var query=util.format(queryString,sid,comp_domain1,comp_name1,trng_area1,trng_dur1,trng_des1,mntr1,trng_pro_des1,pro_name1,team1);
var res=yield databaseUtils.executeQuery(query);
this.redirect('/app/training');
}
}