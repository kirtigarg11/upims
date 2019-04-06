var sessionUtils = require('../utils/sessionUtils');
var util=require('util');
var databaseUtils = require('../utils/databaseUtils');
module.exports = {

    showDashboardHead:function*(next){
        var queryString='select count(*) as comp from tb_comp where YEAR(visit_date) = YEAR(CURDATE())';
        var query=util.format(queryString);
        var comp=yield databaseUtils.executeQuery(query);
        var queryString='select count(*) as place from tb_edud where placed=1';
        var query=util.format(queryString);
        var placedcount=yield databaseUtils.executeQuery(query);
        var queryString='select count(*) as unplace from tb_edud where placed=0';
        var query=util.format(queryString);
        var unplacedcount=yield databaseUtils.executeQuery(query);
        var queryString='select max(pkg) as mpkg from tb_comp';
        var query=util.format(queryString);
        var maxpkg=yield databaseUtils.executeQuery(query);
        var queryString='select min(pkg) as mpkg from tb_comp';
        var query=util.format(queryString);
        var minpkg=yield databaseUtils.executeQuery(query);
        var queryString='select avg(pkg) as apkg from tb_comp';
        var query=util.format(queryString);
        var minpkg=yield databaseUtils.executeQuery(query);
        var queryString='select count(*) as tpo from tb_tpo';
        var query=util.format(queryString);
        var tpo=yield databaseUtils.executeQuery(query);
        var queryString='select count(*) as tpa from tb_tpa';
        var query=util.format(queryString);
        var tpa=yield databaseUtils.executeQuery(query);
   
           yield this.render('dashboard',{
               comp:comp,
               placedcount:placedcount,
               unplacedcount:unplacedcount,
               maxpkg:maxpkg,
               minpkg:minpkg,
               avgpkg:avgpkg,
               tpo:tpo,
               tpa:tpa,
               nostud:nostud
           });
       },

    showLoginPage: function* (next) {
        var msg;
        yield this.render('login',{
            msg:msg,
    });
    },
    
    showdash: function* (next) {
        var msg;
        yield this.render('dashboard',{
            msg:msg,
    });
    },

	showreg: function* (next){
		yield this.render('register',{
			errormsg:false
		});
	},
	
    login:function*(next){
 var user_id=this.request.body.userid;
 var pass=this.request.body.pass;
// && (user[0].type=='admin' || user[0].type=='supervisor')
 var queryString='select useid,name,cont_num,role,active,gender,cur_add,per_add from tb_user where user_id="%s" and pass="%s"';
 var query=util.format(queryString,user_id,pass);
 var user=yield databaseUtils.executeQuery(query);
 console.log(user);
 if(user.length!=0 && (user[0].role==2)){
     sessionUtils.saveUserInSession(user[0],this.cookies);
     var queryString='select count(*) as comp from tb_comp where YEAR(visit_date) = YEAR(CURDATE())';
     var query=util.format(queryString);
     var comp=yield databaseUtils.executeQuery(query);
     var queryString='select count(*) as place from tb_edud where placed=1';
     var query=util.format(queryString);
     var placedcount=yield databaseUtils.executeQuery(query);
     var queryString='select count(*) as unplace from tb_edud where placed=0';
     var query=util.format(queryString);
     var unplacedcount=yield databaseUtils.executeQuery(query);
     var queryString='select max(pkg) as mpkg from tb_comp';
     var query=util.format(queryString);
     var maxpkg=yield databaseUtils.executeQuery(query);
     var queryString='select min(pkg) as mpkg from tb_comp';
     var query=util.format(queryString);
     var minpkg=yield databaseUtils.executeQuery(query);
     var queryString='select avg(pkg) as apkg from tb_comp';
     var query=util.format(queryString);
     var avgpkg=yield databaseUtils.executeQuery(query);
     var queryString='select count(*) as tpo from tb_tpo';
     var query=util.format(queryString);
     var tpo=yield databaseUtils.executeQuery(query);
     var queryString='select count(*) as tpa from tb_tpa';
     var query=util.format(queryString);
     var tpa=yield databaseUtils.executeQuery(query);
     var queryString="select count(*) as nostud from tb_user where role=0 ";
     var query=util.format(queryString);
     var nostud=yield databaseUtils.executeQuery(query);
    
     yield this.render('dashboardtpo',{
        comp:comp,
        placedcount:placedcount,
        unplacedcount:unplacedcount,
        maxpkg:maxpkg,
        minpkg:minpkg,
        tpo:tpo,
        tpa:tpa,
        avgpkg:avgpkg,
        nostud:nostud
     });
 }
 else if(user.length!=0 && (user[0].role==1)){
    sessionUtils.saveUserInSession(user[0],this.cookies);
    var queryString='select count(*) as comp from tb_comp where YEAR(visit_date) = YEAR(CURDATE())';
     var query=util.format(queryString);
     var comp=yield databaseUtils.executeQuery(query);
     var queryString='select count(*) as place from tb_edud where placed=1';
     var query=util.format(queryString);
     var placedcount=yield databaseUtils.executeQuery(query);
     var queryString='select count(*) as unplace from tb_edud where placed=0';
     var query=util.format(queryString);
     var unplacedcount=yield databaseUtils.executeQuery(query);
     var queryString='select max(pkg) as mpkg from tb_comp';
     var query=util.format(queryString);
     var maxpkg=yield databaseUtils.executeQuery(query);
     var queryString='select min(pkg) as mpkg from tb_comp';
     var query=util.format(queryString);
     var minpkg=yield databaseUtils.executeQuery(query);
     var queryString='select avg(pkg) as apkg from tb_comp';
     var query=util.format(queryString);
     var avgpkg=yield databaseUtils.executeQuery(query);
     var queryString='select count(*) as tpo from tb_tpo';
     var query=util.format(queryString);
     var tpo=yield databaseUtils.executeQuery(query);
     var queryString='select count(*) as tpa from tb_tpa';
     var query=util.format(queryString);
     var tpa=yield databaseUtils.executeQuery(query);
     var queryString="select count(*) as nostud from tb_user where role=0 ";
     var query=util.format(queryString);
     var nostud=yield databaseUtils.executeQuery(query);
    yield this.render('dashboardtpa',{
        comp:comp,
        placedcount:placedcount,
        unplacedcount:unplacedcount,
        maxpkg:maxpkg,
        minpkg:minpkg,
        tpo:tpo,
        tpa:tpa,
        avgpkg:avgpkg,
        nostud:nostud
    });

 }
 else if(user.length!=0 && (user[0].role==3)){
    sessionUtils.saveUserInSession(user[0],this.cookies);
     var queryString='select count(*) as comp from tb_comp where YEAR(visit_date) = YEAR(CURDATE())';
     var query=util.format(queryString);
     var comp=yield databaseUtils.executeQuery(query);
     var queryString='select count(*) as place from tb_edud where placed=1';
     var query=util.format(queryString);
     var placedcount=yield databaseUtils.executeQuery(query);
     var queryString='select count(*) as unplace from tb_edud where placed=0';
     var query=util.format(queryString);
     var unplacedcount=yield databaseUtils.executeQuery(query);
     var queryString='select max(pkg) as mpkg from tb_comp';
     var query=util.format(queryString);
     var maxpkg=yield databaseUtils.executeQuery(query);
     var queryString='select min(pkg) as mpkg from tb_comp';
     var query=util.format(queryString);
     var minpkg=yield databaseUtils.executeQuery(query);
     var queryString='select avg(pkg) as apkg from tb_comp';
     var query=util.format(queryString);
     var avgpkg=yield databaseUtils.executeQuery(query);
     var queryString='select count(*) as tpo from tb_tpo';
     var query=util.format(queryString);
     var tpo=yield databaseUtils.executeQuery(query);
     var queryString='select count(*) as tpa from tb_tpa';
     var query=util.format(queryString);
     var tpa=yield databaseUtils.executeQuery(query);
     yield this.render('dashboard',{
        comp:comp,
        placedcount:placedcount,
        unplacedcount:unplacedcount,
        maxpkg:maxpkg,
        minpkg:minpkg,
        tpo:tpo,
        tpa:tpa,
        avgpkg:avgpkg
    });

 }
 else if(user.length!=0 && user[0].role==0){
    sessionUtils.saveUserInSession(user[0],this.cookies);
    var queryString='select count(*) as comp from tb_comp';
    var query=util.format(queryString);
    var comp=yield databaseUtils.executeQuery(query);
    var queryString='select count(*) as place from tb_edud where placed=1';
    var query=util.format(queryString);
    var place=yield databaseUtils.executeQuery(query);
    var queryString='select max(pkg) as mpkg from tb_comp';
    var query=util.format(queryString);
    var mpkg=yield databaseUtils.executeQuery(query);
    var queryString='select count(*) as stud from tb_stud';
    var query=util.format(queryString);
    var stud=yield databaseUtils.executeQuery(query);

yield this.render('dashboardstud',{
    comp:comp,
    place:place,
    mpkg:mpkg,
    stud:stud

});	
}

 else{
   var msg="user_id or password if wrong";
     console.log("wrong password");
     yield this.render('login',{
     msg:msg

});	
 }

    },    
    userhead:function*(next){
        var id;
        console.log("hello");
        try{ id=this.currentUser.useid;}
catch(e){id=0;}
       var queryString='select * from tb_user where role=3 and useid=%s';
       var query=util.format(queryString,id);
       var res=yield databaseUtils.executeQuery(query);
       console.log(res);
       yield this.render('userhead',{
           res:res
       });

    },
    updateuserhead:function*(next){
        console.log("hehe");
    var userid=this.currentUser.useid;
   var name=this.request.body.name;
   //var id=this.request.body.id;
   var add=this.request.body.add;
   var number=this.request.body. number;
   var queryString='update tb_user set name="%s",cur_add="%s",cont_num="%s" where useid=%s';
   var query=util.format(queryString,name,add,number,userid);
   var r=yield databaseUtils.executeQuery(query);
   this.redirect("/app/userhead")
    },
    showpage2:function*(next){
   
        yield this.render('page2',{
            errormsg:false,
    });
},   
showregisterpage:function*(next){
   
    yield this.render('register1',{
        errormsg:false,
});

},

insertpersdetail:function*(next){
    console.log("hello");
    var name=this.request.body.fields.name;
    var cont_num=this.request.body.fields.cont_num;
    var user_id=this.request.body.fields.user_id;
    var pass=this.request.body.fields.pass;
    var gender=this.request.body.fields.gender;
    var cur_add=this.request.body.fields.cur_add;
    var per_add=this.request.body.fields.per_add;
    var email=this.request.body.fields.email;
    var fname=this.request.body.fields.fname;
    var mname=this.request.body.fields.mname;
    var summary=this.request.body.fields.summary;
    var fnumber=this.request.body.fields.fnumber;
    var foccu=this.request.body.fields.foccu;
    var moccu=this.request.body.fields.moccu;
    var dob=this.request.body.fields.dob;
    var role=0;
    var queryString='insert into tb_user(name,cont_num,user_id,pass,gender,cur_add,role,per_add) values("%s","%s","%s","%s","%s","%s",%s,"%s")';
    var query=util.format(queryString,name,cont_num,user_id,pass,gender,cur_add,role,per_add);
    var re2=yield databaseUtils.executeQuery(query);

    var uid=re2.insertId;
    console.log(email,fname,mname,summary,fnumber,foccu,moccu,dob);
    var queryString='insert into tb_stud(uid,email,fname,mname,summary,fnumber,foccu,moccu,dob) values(%s,"%s","%s","%s","%s","%s","%s","%s","%s")';
    var query=util.format(queryString,uid,email,fname,mname,summary,fnumber,foccu,moccu,dob);
    var re2=yield databaseUtils.executeQuery(query);
    var sid=re2.insertId;
    console.log("shabash");
    console.log(sid);
    var msg="You have successfully enter personal details now pls enter educaional detail"
    yield this.render('eduD',{
 msg:msg,
 sid:sid,

    });
},


insertedudetail:function*(next){
    console.log("yaha");
    var clas=this.request.body.cla;
    if(clas=="10th" || clas=="12th"){
    var marks=this.request.body.marks;
    var year=this.request.body.yr;
    var stu_id=this.request.body.stuid;

var queryString='insert into tb_edu_cors(stu_id,marks,year,class) values(%s,"%s","%s","%s")';
var query=util.format(queryString,stu_id,marks,year,clas);
var data=yield databaseUtils.executeQuery(query);
var ms="your data is succesfully entered ";
this.body=ms;
    }
    else{
        var marks=this.request.body.marks;
        var year=this.request.body.yr;
        var stu_id=this.request.body.stuid;
        var branch=this.request.body.branch;
var course=this.request.body.course;
    
    var queryString='insert into tb_edu_cors(stu_id,marks,year,class,branch) values(%s,"%s","%s","%s","%s")';
    var query=util.format(queryString,stu_id,marks,year,course,branch);
    var data=yield databaseUtils.executeQuery(query);
    var ms="your data is succesfully entered ";
    this.body=ms;  
    }
},
insertedu1:function*(next){
    var gap=this.request.body.gap;
    var sid=this.request.body.sid;
    console.log("insert in edu 1");
    console.log(gap,sid);
    var queryString='insert into tb_edud(gap,sid) values(%s,%s)';
    var query=util.format(queryString,gap,sid);
    var re=yield databaseUtils.executeQuery(query);
    var msg="You have successfully enter all details now pls loginl"
    yield this.render('login',{
 msg:msg,
 

    });
},
forgot:function*(next){
    console.log("ma enter kar gaya ");
    var userid=this.request.body.userid;
    var pass=this.request.body.pass;
    var queryString='select useid from tb_user where user_id="%s"';
    var query=util.format(queryString,userid);
    var res=yield databaseUtils.executeQuery(query);
    var useid=res[0].useid;
    var queryString='update tb_user set pass="%s" where useid=%s';
    var query=util.format(queryString,pass,useid);
    var res=yield databaseUtils.executeQuery(query);
    yield this.render('login',{
        res:res
    });
}
}