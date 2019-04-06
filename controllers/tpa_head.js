var sessionUtils = require('../utils/sessionUtils');
var util=require('util');
var databaseUtils = require('../utils/databaseUtils');
module.exports = {
    showtpodetails: function* (next) {
   
        var queryString ='select * from tb_user,tb_tpo where tb_tpo.uid=tb_user.useid and role=2';
        var query=util.format(queryString);
        var res=yield databaseUtils.executeQuery(query);
       
        yield this.render('tpAdd',{
        res:res,
        });
    },
    // name,cont_num,user_id,active,gender,cur_add,course,email
    uptpodetails:function*(next){
        var name=this.request.body.name1;
        var user_id=this.request.body.user_id1;
        var course=this.request.body.course1;
        var email=this.request.body.email1;
          
        var active=this.request.body.active1;
       
        var cont_num=this.request.body.cont_num1;
     var gender=this.request.body.gender1;
        var cur_add=this.request.body.cur_add1;
       var tpoid=this.request.body.updatetpo1;

        var queryString='select uid from tb_tpo where tpoid=%s';
        
        var query=util.format(queryString,tpoid);
        var res=yield databaseUtils.executeQuery(query);
        var uid=res[0].uid;
        console.log(name,user_id,course,email,active,cont_num,gender,cur_add,tpoid);
        var queryString='update tb_tpo set course="%s",email="%s" where tpoid=%s';
        var query=util.format(queryString,course,email,tpoid);
        var res1=yield databaseUtils.executeQuery(query);
        var queryString='update tb_user set name="%s",user_id="%s",active=%s,cont_num="%s",gender="%s",cur_add="%s" where useid=%s ';
        var query=util.format(queryString,name,user_id, active,cont_num,gender,cur_add,uid);
        var res1=yield databaseUtils.executeQuery(query);

        this.redirect('/app/tpAdd');
    },
    inserttpo:function*(next){
        var name=this.request.body.fields.name;
         
        var cont_num=this.request.body.fields.cont_num;
        var user_id=this.request.body.fields.user_id;
        var pass=this.request.body.fields.pass;
        var gender=this.request.body.fields.gender;
        var cur_add=this.request.body.fields.cur_add;
        var per_add=this.request.body.fields.per_add;
       
        var course=this.request.body.fields.course;
        var email=this.request.body.fields.email;
        var role=2;
        var queryString='insert into tb_user(name,cont_num,user_id,pass,role,gender,cur_add,per_add) values("%s","%s","%s","%s",%s,"%s","%s","%s")';
        var query=util.format(queryString,name,cont_num,user_id,pass,role,gender,cur_add,per_add);
        var re2=yield databaseUtils.executeQuery(query);

       var uid=re2.insertId;
       
        var queryString='insert into tb_tpo(uid,course,email) values(%s,"%s","%s")';
        var query=util.format(queryString,uid,course,email);
        var res1=yield databaseUtils.executeQuery(query);
        this.redirect('/app/tpAdd');

    },
    showtpadetails:function*(next){
        var queryString='select u.name as tpaname,v.name as tponame,u.user_id,a.course,a.email,a.branch,a.tpaid,u.gender,u.active,u.cur_add,u.cont_num from tb_user u,tb_user v,tb_tpo o,tb_tpa a where u.useid=a.uid and \
        v.useid=o.uid and o.tpoid=a.tpoconnect ';
        var query=util.format(queryString);
        var res1=yield databaseUtils.executeQuery(query);
        console.log(res1);
        yield this.render('tpaAdd',{
            res:res1,
            });
    },
    assigntpodetails:function*(next){
       
        var course=this.request.body.cour;
        console.log(course);
        var queryString='select tpoid,name from tb_user,tb_tpo where tb_user.useid=tb_tpo.uid and course="%s"';
        var query=util.format(queryString,course);
        var res1=yield databaseUtils.executeQuery(query);
       // console.log(res1);
       this.body=res1;
    },
    assigntpo:function*(next){
        console.log("insert karo jaldi ");

        var tpaid=this.request.body.assign;
        var tpoid=this.request.body.option;
        console.log(tpaid);
        console.log("heheeheh");
        console.log(tpoid);
        var queryString='update tb_tpa set tpoconnect=%s where tpaid=%s';
        var query=util.format(queryString,tpoid,tpaid);
        var res=yield databaseUtils.executeQuery(query);
       
        this.redirect('/app/tpaAdd')
        
    },
    inserttpa:function*(next){
        var name=this.request.body.fields.name;
         
        var cont_num=this.request.body.fields.cont_num;
        var user_id=this.request.body.fields.user_id;
        var pass=this.request.body.fields.pass;
        var gender=this.request.body.fields.gender;
        var cur_add=this.request.body.fields.cur_add;
        var per_add=this.request.body.fields.per_add;
       
        var course=this.request.body.fields.course;
        var email=this.request.body.fields.email;
        var branch=this.request.body.fields.branch;
        var tpoid=this.request.body.fields.option1;
        console.log(tpoid);
        var role=1;

        var queryString='insert into tb_user(name,cont_num,user_id,pass,role,gender,cur_add,per_add) values("%s","%s","%s","%s",%s,"%s","%s","%s")';
        var query=util.format(queryString,name,cont_num,user_id,pass,role,gender,cur_add,per_add);
        var re2=yield databaseUtils.executeQuery(query);
        var uid=re2.insertId;
   
//console.log(tpoid);
        var queryString='insert into tb_tpa(uid,course,email,branch,tpoconnect) values(%s,"%s","%s","%s",%s)';
        var query=util.format(queryString,uid,course,email,branch,tpoid);
        console.log(uid,course,email,branch,tpoid);
        var res1=yield databaseUtils.executeQuery(query);
        this.redirect('/app/tpaAdd');
  
    },
    updatetpa:function*(next){
        console.log("tera bina");
var name1=this.request.body.name1;
var user_id1=this.request.body.user_id1;
var course1=this.request.body.course1;
var branch1=this.request.body.branch1;
var email1=this.request.body.email1;
var gender1=this.request.body.gender1;
var active1=this.request.body.active1;
var cur_add1=this.request.body.cur_add1;
var cont_num1=this.request.body.cont_num1;
var updatetpo1=this.request.body.updatetpo1;
console.log("kirti");
var queryString='select uid from tb_tpa where tpaid=%s'
var query=util.format(queryString,updatetpo1);
var re=yield databaseUtils.executeQuery(query);
var useid=re[0].uid;
var queryString='update  tb_tpa set course="%s",branch="%s",email="%s" where tpaid=%s';
var query=util.format(queryString,course1,branch1,email1,updatetpo1);
var re=yield databaseUtils.executeQuery(query);
var queryString='update  tb_user set name="%s",user_id="%s",gender="%s",active=%s,cur_add="%s",cont_num="%s" where useid=%s';
var query=util.format(queryString,name1,user_id1,gender1,active1,cur_add1,cont_num1,useid);
var res=yield databaseUtils.executeQuery(query);
this.redirect('/app/tpaAdd');



    }
}
