var sessionUtils = require('../utils/sessionUtils');
var util=require('util');
var databaseUtils=require('../utils/databaseUtils');

module.exports = {
    showskills: function* (next){
        console.log(1);
        var queryString1='select * from tb_skil';
        var queryString2='select * from tb_tol';
        var query1=util.format(queryString1);
        var query2=util.format(queryString2);
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
        console.log(12);
        var skill=this.request.body.addskill;
        var sid=1;
        var tool=this.request.body.addtool;
        var queryString1="insert into tb_skil(sid,skill) values(%s,'%s')";
        var queryString2="insert into tb_tol(sid,tools) values(%s,'%s')";
        console.log(2222);
        var query;
        if(tool.length>=1){
            query=util.format(queryString2,sid,tool);
        }
        else if(skill.length>=1){
            query=util.format(queryString1,sid,skill);
        }
        console.log("nacho");
        var res=yield databaseUtils.executeQuery(query);
        this.redirect('/app/skillpage');
    }
};