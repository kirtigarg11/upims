var sessionUtils = require('../utils/sessionUtils');
var util=require('util');
var databaseUtils = require('../utils/databaseUtils');
module.exports = {

    showcompdetail:function*(next){
        console.log("enter");
        
        
        yield this.render('addcomp',{
         errormsg:false
            
            });
            },

    insertcompdetail:function*(next){
        console.log("insert");
        var prsn_connect=this.currentUser.useid;
        var  comp_name=this.request.body.comp_name;
        var job_loc=this.request.body.job_loc;
        var  pkg=this.request.body.pkg;
       var  visit_date=this.request.body.visit_date;
        var  remarks =this.request.body.remarks;
        var  batch=this.request.body.batch;
        var indst_type=this.request.body.indst_type; 
        var branch=this.request.body.branch;
        var job_rol=this.request.body.job_rol;
        var gap=this.request.body.gap;
        var  visit_day=this.request.body.visit_day;
        var rep_time=this.request.body.rep_time;
        var  key_skls=this.request.body.key_skls;
        var  venue=this.request.body.venue;
        var  comp_web=this.request.body.comp_web;
        var prcdr=this.request.body.prcdr;
        
    
    
      console.log(comp_name);
      console.log(job_loc);
      console.log(pkg);
      console.log(visit_date);
      console.log(remarks);
      console.log (batch);
      console.log(indst_type);
      console.log(prsn_connect);
      console.log(branch);
      console.log(job_rol);
      console.log(gap);
      console.log(visit_day);
      console.log(rep_time);
      console.log(key_skls);
      console.log(venue);
      console.log(comp_web);
      console.log(prcdr);
        var queryString='insert into tb_comp(prsn_connect,comp_name,job_loc,pkg,visit_date,remarks,batch,indst_type,branch,job_rol,gap,visit_day,rep_time,key_skls,venue,comp_web,prcdr) values(%s,"%s","%s","%s","%s","%s","%s","%s","%s","%s",%s,"%s","%s","%s","%s","%s","%s")';
    var query=util.format(queryString,prsn_connect,comp_name,job_loc,pkg,visit_date,remarks,batch,indst_type,branch,job_rol,gap,visit_day,rep_time,key_skls,venue,comp_web,prcdr);
    var res=yield databaseUtils.executeQuery(query);
    this.redirect('/app/addcomp');
    }
}
