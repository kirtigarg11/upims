var sessionUtils = require('../utils/sessionUtils');
var util=require('util');
var databaseUtils=require('../utils/databaseUtils');

module.exports = {
    showedudetails: function* (next){
        console.log("edu ke andar");
        var uid=this.currentUser.useid;

        console.log(uid,"user");
        var queryString1="select stuid,class, marks, year, branch from tb_edu_cors ec, tb_user u, tb_stud s where u.useid=%s and u.useid=s.uid and s.stuid=ec.stu_id";
        var query1=util.format(queryString1,uid);
        var res1=yield databaseUtils.executeQuery(query1);
        console.log(res1[0].stuid,"user ki stuid");
		var queryString2="select gap,placed from tb_user u,tb_stud s,tb_edud e where u.useid=%s and u.useid=s.uid and s.stuid=e.sid";
		var query2=util.format(queryString2,uid);
        var res2=yield databaseUtils.executeQuery(query2);
        console.log(res1);
        yield this.render('educational',{
            res1:res1,
			res2:res2
			
        });
    },
    updateedudetails: function* (next){
        console.log("update");
        var stuid=this.request.body.update;
        var course=this.request.body.course;
        var passyr=this.request.body.cyr;
        var branch=this.request.body.branch;
        var marks=this.request.body.cmarks;
        var teny=this.request.body.ten_yr;
        var tenm=this.request.body.ten_mrk;
        var twey=this.request.body.twe_yr;
        var twem=this.request.body.twe_mrk;
        var gap=this.request.body.gap;
        console.log(stuid,gap);
        var queryString="update tb_edud set gap=%s where sid=%s";
        var query=util.format(queryString,gap,stuid);
        var res=yield databaseUtils.executeQuery(query);
		 console.log(1);
		 console.log(tenm,teny);
		var queryString1="update tb_edu_cors set marks='%s',year='%s' where class='10' and stu_id=%s";
		var query1=util.format(queryString1,tenm,teny,stuid);
		var res1=yield databaseUtils.executeQuery(query1);
			 console.log(res1);
			 console.log(1);
		var queryString2="update tb_edu_cors set marks='%s' and year='%s' where stu_id=%s and class='12'";
		var query2=util.format(queryString2,twem,twey,stuid);
		var res2=yield databaseUtils.executeQuery(query2);
			 console.log(res2);
			 console.log(1);
		var queryString3="update tb_edu_cors set branch='%s', marks='%s', year='%s' where stu_id=%s and class='%s'";
		var query3=util.format(queryString3,branch,marks,passyr,stuid,course);
		var res3=yield databaseUtils.executeQuery(query3);
			 console.log(res3);
		
		
        this.redirect('/app/educational');
    }

}