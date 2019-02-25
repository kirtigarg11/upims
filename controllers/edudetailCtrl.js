var sessionUtils = require('../utils/sessionUtils');
var util=require('util');
var databaseUtils = require('../utils/databaseUtils');
module.exports = {
    showeduDetails: function* (next) {
   console.log(1);
        var queryString ='select * from edu_detail where sid=1';
        var query=util.format(queryString);
        var res1=yield databaseUtils.executeQuery(query);
        console.log(res1);
        yield this.render('educational',{
        res1:res1,
        });
    },

    upedudetail:function*(next){
        var gap=this.request.body.fields.gap;
        var pur_quali=this.request.body.fields.pur_quali;
        var ten_board=this.request.body.fields.ten_board    ;
        var ten_mrk=this.request.body.fields.ten_mrk;
        var ten_year=this.request.body.fields.ten_year;
        var twelve_board=this.request.body.fields.twelve_board;
        var twelve_yr=this.request.body.fields.twelve_yr  ;
        var course=this.request.body.fields.course;
        var branch=this.request.body.fields.branch;
        var sem=this.request.body.fields.sem;
        var yr=this.request.body.fields.yr;
        var btech_agg=this.request.body.fields.btech_agg;
        var gen=this.request.body.fields.gen;
        var queryString='update edu_detail set gap="%d",pur_quali="%d" ,ten_board="%s",ten_mrk="%s",ten_year="%s",twelve_board="%s",twelve_yr="%s",course="%s",branch="%s",sem="%d",yr="%d", btech_agg="%f",gen="%s"  where id=1';
        var query=util.format(queryString,gap,pur_quali,ten_board,ten_mrk,ten_year,twelve_board,twelve_yr,course,branch,sem,yr,btech_agg,gen);
        var res1=yield databaseUtils.executeQuery(query)
        this.redirect('/app/educational');
    },
    showtrainingdetail:function*(next){
var queryString="select * from training_details where sid=1";
var query =util.format(queryString);
var res=yield databaseUtils.executeQuery(query);

yield this.render('training',{
    res:res,
    });
    },
    uptrainingdetail:function*(next){
                
        var comp_domain=this.request.body.fields.comp_domain;
        var comp_name =this.request.body.fields.comp_name;
        var trng_area  =this.request.body.fields.trng_area;
        var trng_dur  =this.request.body.fields.trng_dur;
        var trng_des  =this.request.body.fields.trng_des;
        var mntr  =this.request.body.fields.mntr;
        var trng_pro_des  =this.request.body.fields.trng_pro_des;
        var pro_name  =this.request.body.fields.pro_name;
        var team  =this.request.body.fields.team;
        var id=this.request.body.fields.update;
      
        var queryString='update training_details set comp_domain="%s",comp_name="%s" ,trng_area="%s",trng_dur="%s",trng_des="%s",mntr="%s",trng_pro_des="%s",pro_name="%s",team="%s"  where id="%s"';
      var query=util.format(queryString,comp_domain,comp_name,trng_area,trng_dur,trng_des,mntr,trng_pro_des,pro_name,team,id);
      var res1=yield databaseUtils.executeQuery(query);
      this.redirect('/app/training');
    },
insertTrainingDetail:function*(next){
    console.log("insert");

    var comp_domain1=this.request.body.fields.comp_domain;
    var comp_name1 =this.request.body.fields.comp_name;
    var trng_area1  =this.request.body.fields.trng_area;
    var trng_dur1  =this.request.body.fields.trng_dur;
    var trng_des1  =this.request.body.fields.trng_des;
    var mntr1  =this.request.body.fields.mntr;
    var trng_pro_des1  =this.request.body.fields.trng_pro_des;
    var pro_name1  =this.request.body.fields.pro_name;
    var team1  =this.request.body.fields.team;
    var sid=1;
    var queryString='insert into training_details(sid,comp_domain,comp_name,trng_area,trng_dur,trng_des,mntr,trng_pro_des,pro_name,team) values(%s,"%s","%s","%s",%s,"%s","%s","%s","%s",%s)';
var query=util.format(queryString,sid,comp_domain1,comp_name1,trng_area1,trng_dur1,trng_des1,mntr1,trng_pro_des1,pro_name1,team1);
var res=yield databaseUtils.executeQuery(query);
this.redirect('/app/training');
}
}