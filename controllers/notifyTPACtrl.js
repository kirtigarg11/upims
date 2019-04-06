var sessionUtils = require('../utils/sessionUtils');
var util=require('util');
var databaseUtils=require('../utils/databaseUtils');

module.exports = {
    shownotifypage: function* (next){
        yield this.render('dashboardtpa',{
            errormsg:false
        });
    },
    viewnotify: function* (next){
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
       else if(msgtype==2) //sent
       {
           //prblm will be if sndr snd same mail to many studnet thn he will only be able to see the same sent mail
           var queryString="select u.name,n.body from tb_user u,tb_notify n where u.useid=n.rcvr_id and sndr_id=%s order by n.ts desc ";
           var query=util.format(queryString,myid);
           var res=yield databaseUtils.executeQuery(query);
           this.body=res;

       }
    },

    selectstud:function* (next){
        var tpaid=this.currentUser.useid;
        var b=this.request.body.branch;
        var c=this.request.body.course;
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
            branch="ce";
        }
        else if(b==4){
            branch="ee";
        }
        console.log(c,b,tpaid);
        var queryString="select distinct(u.useid), u.name from tb_user u, tb_stud s, tb_tpastudAsign a, tb_edu_cors e where u.useid=s.uid and s.stuid=e.stu_id and e.branch='%s' and e.class='%s'";
        var query=util.format(queryString,branch,course);
        var result=yield databaseUtils.executeQuery(query);
        console.log(result);
        this.body=result;
    },
    addnotify: function* (next){
        console.log("kirti great");
        var sndr=this.currentUser.useid; //add sender value
        var rcvrs=this.request.body.send;
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
        this.redirect('/app/dashboardtpa');
    }


}