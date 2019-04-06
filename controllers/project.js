var sessionUtils = require('../utils/sessionUtils');
var util=require('util');
var databaseUtils = require('../utils/databaseUtils');
module.exports = {
    
    showprojectdetail:function*(next){
    var uid=this.currentUser.useid;
        var queryString="select * from tb_proj,tb_stud where tb_stud.uid=%s and tb_stud.stuid=tb_proj.sid";
            var query =util.format(queryString,uid);
var res=yield databaseUtils.executeQuery(query);

yield this.render('project',{
    res:res,
    });
    },
    upprojectdetail:function*(next){
     console.log("update");
    
        var pro_name=this.request.body.fields.pro_name;
        var dur=this.request.body.fields.dur;
        var mntr=this.request.body.fields.mntr;
        var tech=this.request.body.fields.tech;
        var tools =this.request.body.fields.tools;
        var langs=this.request.body.fields.langs;
        var live=this.request.body.fields.live;
        var des_of_pro=this.request.body.fields.des_of_pro;
        var link=this.request.body.fields.link;
        var team=this.request.body.fields.team;
        var proid=this.request.body.fields.update;
        var queryString='update tb_proj set pro_name="%s",dur=%s,mntr="%s",tech="%s",tools="%s",langs="%s",live=%s,des_of_pro="%s",link="%s",team=%s  where proid=%s';
      var query=util.format(queryString,pro_name,dur,mntr,tech,tools,langs,live,des_of_pro,link,team,proid);
      var res1=yield databaseUtils.executeQuery(query);
      this.redirect('/app/project');
    },
insertprojectdetail:function*(next){
    console.log("insert");
   
    var pro_name1=this.request.body.fields.pro_name;
    var dur1=this.request.body.fields.dur;
    var mntr1=this.request.body.fields.mntr;
    var tech1=this.request.body.fields.tech;
    var tools1 =this.request.body.fields.tools;
    var langs1=this.request.body.fields.langs;
    var live1=this.request.body.fields.live;
    var des_of_pro1=this.request.body.fields.des_of_pro;
    var link1=this.request.body.fields.link;
    var team1=this.request.body.fields.team;
    var useid=this.currentUser.useid;
    var queryString='select stuid from tb_stud where uid=%s';
    var query=util.format(queryString,useid);
    var res=yield databaseUtils.executeQuery(query);
    var sid=res[0].stuid;


    //console.log(pro_name1,dur1,sdate1,edate1,mntr1,tech1,tools1,langs1,live1,des_of_pro1,link1,team1,sid);
  
    var queryString='insert into tb_proj(sid,pro_name,dur,mntr,tech,tools,langs,live,des_of_pro,link,team) values(%s,"%s",%s,"%s","%s","%s","%s",%s,"%s","%s",%s)';
var query=util.format(queryString,sid,pro_name1,dur1,mntr1,tech1,tools1,langs1,live1,des_of_pro1,link1,team1);
var res=yield databaseUtils.executeQuery(query);
this.redirect('/app/project');
}
}   