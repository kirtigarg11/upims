var sessionUtils = require('../utils/sessionUtils');
var util=require('util');
var databaseUtils=require('../utils/databaseUtils');

module.exports = {
    showappeardrivedetail: function* (next){
        console.log(1);
        var uid=this.currentUser.useid;
        var queryString1='select name,comp_name from tb_user,tb_intrst_stud where tb_intrst_stud.uid=tb_user.useid and tb_intrst_stud.uid=%s';
       
        var query1=util.format(queryString1,uid);
        
        var res1=yield databaseUtils.executeQuery(query1);
        
        console.log(2);
        yield this.render('appeardrive',{
            res1:res1,
           
        });
        console.log(3);
    },
};
