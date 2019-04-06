var sessionUtils = require('../utils/sessionUtils');
var util=require('util');
var databaseUtils = require('../utils/databaseUtils');
module.exports = {
	showdashtpo: function* (next){
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
        var rol=0;
        var queryString="select count(*) as nostud from tb_user where role=%s ";
        var query=util.format(queryString,rol);
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
	},
	insertcompdetail:function*(next){
        console.log("insert");
		var prsn_connect=this.currentUser.useid;
		console.log(prsn_connect);
        var  comp_name=this.request.body.comp_name;
        var job_loc=this.request.body.job_loc;
        var  pkg=this.request.body.pkg;
       var  visit_date=this.request.body.visit_date;
        var  remarks =this.request.body.remarks;
        var  batch=this.request.body.batch;
        var indst_type=this.request.body.indst_type; 
		var branch=this.request.body.branch;
		var course=this.request.body.course;
        var job_rol=this.request.body.job_rol;
        var gap=this.request.body.gap;
        var  visit_day=this.request.body.visit_day;
        var rep_time=this.request.body.rep_time;
        var  key_skls=this.request.body.key_skls;
        var  venue=this.request.body.venue;
        var  comp_web=this.request.body.comp_web;
        var prcdr=this.request.body.prcdr;
        
    

        var queryString='insert into tb_comp(prsn_connect,comp_name,job_loc,pkg,visit_date,remarks,batch,indst_type,course,branch,job_rol,gap,visit_day,rep_time,key_skls,venue,comp_web,prcdr) values(%s,"%s","%s","%s","%s","%s","%s","%s","%s","%s","%s",%s,"%s","%s","%s","%s","%s","%s")';
    var query=util.format(queryString,prsn_connect,comp_name,job_loc,pkg,visit_date,remarks,batch,indst_type,course,branch,job_rol,gap,visit_day,rep_time,key_skls,venue,comp_web,prcdr);
    var res=yield databaseUtils.executeQuery(query);
    this.redirect('/app/dashboardtpo');
	},
	addnotify: function*(next){
        var sndr=this.currentUser.useid; //add sender value
        var rcvrs=this.request.body.end;
        var body=this.request.body.msgbody;
        console.log(body);
        console.log(sndr);
        console.log("list ",rcvrs);
        var arr=rcvrs.split(",");
        console.log(arr);
        for(var i=0;i<arr.length;i++){
            console.log(arr[i]);
        var queryString="insert into tb_notify(sndr_id,rcvr_id,body) values(%s,%s,'%s') ";
        var query=util.format(queryString,sndr,parseInt(arr[i]),body);
        var res=yield databaseUtils.executeQuery(query);
        console.log("done");
    
    }    
        this.redirect('/app/dashboardtpo');
        
    },
    usertpo:function*(next){
        
            var id;
            console.log("hello");
            try{ id=this.currentUser.useid;}
    catch(e){id=0;}
           var queryString='select * from tb_user where role=2 and useid=%s';
           var query=util.format(queryString,id);
           var res=yield databaseUtils.executeQuery(query);
           console.log(res);
           yield this.render('usertpo',{
               res:res
           });
    
        
    },

    updateusertpo:function*(next){
        console.log("hehe");
    var userid=this.currentUser.useid;
   var name=this.request.body.name;
   //var id=this.request.body.id;
   var add=this.request.body.add;
   var number=this.request.body. number;
   var queryString='update tb_user set name="%s",cur_add="%s",cont_num="%s" where useid=%s';
   var query=util.format(queryString,name,add,number,userid);
   var r=yield databaseUtils.executeQuery(query);
   this.redirect("/app/usertpo")
    },
   
  

}