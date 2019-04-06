var sessionUtils = require('../utils/sessionUtils');
var util=require('util');
var databaseUtils = require('../utils/databaseUtils');
module.exports = {
showStuPersDetail: function* (next){
    console.log("1");
    var uid=this.currentUser.useid;
    var queryString ='select * from tb_stud where uid=%s';
    var query=util.format(queryString,uid);
    var res=yield databaseUtils.executeQuery(query);
     
    
   yield this.render('personal',{
       res:res, 
   });
  },
  UpDetails:function*(next){
    console.log("update");

    var email=this.request.body.email;
    console.log(email);
    var fname=this.request.body.fname;
    console.log(fname);
    var mname=this.request.body.mname;
  
    var summary=this.request.body.summary;
    var fnumber=this.request.body.fnumber;
    var foccu=this.request.body.foccu;
    var moccu=this.request.body.moccu;
    
    var uid=this.currentUser.useid;
    console.log(uid,"het");
    var queryString='update tb_stud set email="%s",fname="%s",mname="%s",summary="%s",fnumber="%s",foccu="%s",moccu="%s"where uid=%s';
     var query=util.format(queryString,email,fname,mname,summary,fnumber,foccu,moccu,uid);
    var res1=yield databaseUtils.executeQuery(query);
    console.log(res1);
    this.redirect('/app/personal');
  }
}