var sessionUtils = require('../utils/sessionUtils');
var util=require('util');
var databaseUtils = require('../utils/databaseUtils');
module.exports = {
showStuPersDetail: function* (next){
    var queryString ='select * from student_detail';
    var query=util.format(queryString);
    var res=yield databaseUtils.executeQuery(query);
     
    
   yield this.render('personal',{
       res:res, 
   });
  },
  UpDetails:function*(next){
    var name=this.request.body.fields.name;
    var fname=this.request.body.fields.fname;
    var mname=this.request.body.fields.mname;
    var cont_num=this.request.body.fields.cont_num;
    var fnumber=this.request.body.fields.fnumber;
    var foccu=this.request.body.fields.foccu;
    var moccu=this.request.body.fields.moccu;
    var cur_add=this.request.body.fields.cur_add;
    var per_add=this.request.body.fields.per_add;
    var queryString='update student_detail set name="%s",fname="%s",mname="%s",cont_num="%s",fnumber="%s",foccu="%s",moccu="%s",cur_add="%s",per_add="%s" where id=1';
    var query=util.format(queryString,name,fname,mname,cont_num,fnumber,foccu,moccu,cur_add,per_add);
    var res1=yield databaseUtils.executeQuery(query);
    console.log(name);
    this.redirect('/app/personal');
  }
}