var sessionUtils = require('../utils/sessionUtils');
var util=require('util');
var databaseUtils = require('../utils/databaseUtils');
module.exports = {
    placementDetails: function* (next) {
        var placement=1;
        
        if(placement==1){
            var queryString ='select edu_detail.id,name,course,branch,placed from edu_detail,student_detail where edu_detail.sid=student_detail.sid ';
            var query=util.format(queryString);
            var res=yield databaseUtils.executeQuery(query);
            console.log(res);
            
           
        }
        else{
            var queryString ='select edu_detail.id,name,course,branch,placed from edu_detail,student_detail where edu_detail.sid=student_detail.sid ';
            var query=util.format(queryString);
            var res=yield databaseUtils.executeQuery(query);
            console.log(res);
        }
        yield this.render('placement',{
            res:res,
            });
    },
    upPlacement:function*(next){
        var a=this.request.body.optradio;
        var id=this.request.body.update;
        console.log(id);
        var queryString='update edu_detail set placed=%s where id=%s';
        var query=util.format(queryString,a,id);
        var res1=yield databaseUtils.executeQuery(query);
        this.redirect('/app/placement');
    }
};
