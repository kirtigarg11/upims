var sessionUtils = require('../utils/sessionUtils');
var util=require('util');
var databaseUtils=require('../utils/databaseUtils');

module.exports = {
    studnotifypage: function* (next){
        yield this.render('notifyStud',{
            errormsg:false
        });
    },

    studviewnotify: function* (next){
        var myid=this.currentUser.useid; //he himself is a rcvr to his id will gone here;
        var msgtype=this.request.body.msgtype;
        // if i am a sndr thn msg type will be 2 else it will be 1
        if(msgtype==1)//inbox
        {
         var queryString="select u.name, n.body from tb_user u, tb_notify n where n.rcvr_id=%s and n.sndr_id=u.useid order by n.ts desc";
         var query=util.format(queryString,myid);
         var res=yield databaseUtils.executeQuery(query);
         this.body=res;
        } 
        
     }




}