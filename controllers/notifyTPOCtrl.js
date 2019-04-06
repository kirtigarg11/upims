var sessionUtils = require('../utils/sessionUtils');
var util=require('util');
var databaseUtils=require('../utils/databaseUtils');

module.exports = {
    shownotifypage: function* (next){
        yield this.render('notifyTPO',{
            errormsg:false
        });
    },

    selecttpa: function* (next){
        var c=this.request.body.cour;
        var b=this.request.body.branch;
        var tpoid=this.currentUser.useid;
        var course,branch;
        if(c==1){
            course="Diploma";
        }else if(c==2){
            course="B.Tech";
        }
        else if(c==3){
            course="M.Tech";
        }
        else if(c==4){
            course="BCA";
        }
        if(b==1){
            branch="cse";
        }else if(b==2){
            branch="me";
        }
        else if(b==3){
            branch="civil";
        }
        else if(b==4){
            branch="ee";
        }
        console.log(c,b,tpoid);
        var queryString=" select ua.useid, ua.name from tb_user ua, tb_tpa t where ua.useid=t.uid and t.tpoconnect=%s and t.course='%s' and t.branch='%s'";
        var query=util.format(queryString,tpoid,course,branch);
        var res=yield databaseUtils.executeQuery(query);
        console.log(res);
        this.body=res;
    }


}