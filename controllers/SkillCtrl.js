var sessionUtils = require('../utils/sessionUtils');
var util=require('util');
var databaseUtils=require('../utils/databaseUtils');

module.exports = {
    showskills: function* (next){
        console.log(1);
        var useid=this.currentUser.useid;
        var queryString='select stuid from tb_stud where uid=%s';
        var query=util.format(queryString,useid);
        var res=yield databaseUtils.executeQuery(query);
        var sid=res[0].stuid;
        var queryString1='select * from tb_skil where sid=%s';
        var queryString2='select * from tb_tol where sid=%s';
        var query1=util.format(queryString1,sid);
        var query2=util.format(queryString2,sid);
        var res1=yield databaseUtils.executeQuery(query1);
        var res2=yield databaseUtils.executeQuery(query2);
        console.log(2);
        yield this.render('skillpage',{
            res1:res1,
            res2:res2,
        });
        console.log(3);
    },
    insertskills: function* (next){
     console.log("grt");
     var useid=this.currentUser.useid;
     var queryString='select stuid from tb_stud where uid=%s';
     var query=util.format(queryString,useid);
     var res=yield databaseUtils.executeQuery(query);
     var sid=res[0].stuid;
        var skill=this.request.body.addskill;
        //var sid=1;
        var queryString="insert into tb_skil(sid,skill) values(%s,'%s')";
        console.log(2222);
		console.log(skill);
        var query=util.format(queryString,sid,skill);
        console.log("nacho");
        var res=yield databaseUtils.executeQuery(query);
        this.redirect('/app/skillpage');
    },
	 inserttools: function* (next){
        console.log(12,"tool");
        var useid=this.currentUser.useid;
        var queryString='select stuid from tb_stud where uid=%s';
        var query=util.format(queryString,useid);
        var res=yield databaseUtils.executeQuery(query);
        var sid=res[0].stuid;
        var tool=this.request.body.addtool;
      //  var sid=1;
        var queryString="insert into tb_tol(sid,tools) values(%s,'%s')";
        console.log(2222);
		console.log(tool);
        var query=util.format(queryString,sid,tool);
        console.log("nacho");
        var res=yield databaseUtils.executeQuery(query);
        this.redirect('/app/skillpage');
    }
};