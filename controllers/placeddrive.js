var sessionUtils = require('../utils/sessionUtils');
var util=require('util');
var databaseUtils=require('../utils/databaseUtils');

module.exports = {
    showplaceddrivedetail: function* (next){
        console.log(1);
        var uid=this.currentUser.useid;
        var queryString1='select comp_name,pkg,job_loc,name from tb_placed,tb_comp,tb_user,tb_stud where tb_placed.comp_id=tb_comp.comid and tb_placed.uid=tb_stud.uid and tb_stud.uid=tb_user.useid and tb_placed.uid=%s';
       
        var query1=util.format(queryString1,uid);
        
        var res1=yield databaseUtils.executeQuery(query1);
        
        console.log(2);
        yield this.render('placeddrive',{
            res1:res1,
           
        });
        console.log(3);
    },
};
