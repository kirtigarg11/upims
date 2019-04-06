var sessionUtils = require('../utils/sessionUtils');
var util=require('util');
var databaseUtils=require('../utils/databaseUtils');

module.exports = {
    showinfo: function* (next) {
        console.log(11);
        var useid=this.currentUser.useid;
        var queryString='select acoid,comp_name,cod_pltfrm_name,cod_mrk,coding_link,certi_title from tb_acom,tb_stud where tb_acom.sid=tb_stud.stuid and tb_stud.uid=%s';
        var query=util.format(queryString,useid);
        var res=yield databaseUtils.executeQuery(query);
        console.log(res);
        yield this.render('accomplishment',{
           res:res,
        });
    },
    UpDetails:function*(next){
        console.log(2);
        var comName1=this.request.body.fields.comp_name;
        var codPltfr1=this.request.body.fields.cod_pltfrm_name;
        var codmrk1=this.request.body.fields.cod_mrk;
        var codlink1=this.request.body.fields.coding_link;
        var certiTitle1=this.request.body.fields.certi_title;
        var acoid=this.request.body.fields.update;
        console.log(comName1,codPltfr1,codmrk1,codlink1,acoid,certiTitle1);
        var queryString='update tb_acom set comp_name="%s",cod_pltfrm_name="%s",cod_mrk=%s,coding_link="%s",certi_title="%s" where acoid=%s';
        var query=util.format(queryString,comName1,codPltfr1,codmrk1,codlink1,certiTitle1,acoid);
        var res1=yield databaseUtils.executeQuery(query);
        console.log(3);
        this.redirect('/app/accomplishment');
      },
    
      AddDetails:function*(next){
        console.log(4);
        var comName=this.request.body.fields.comp_name;
        var codPltfr=this.request.body.fields.cod_pltfrm_name;
        var codmrk=this.request.body.fields.cod_mrk;
        var codlink =this.request.body.fields.coding_link;
        var certiTitle=this.request.body.fields.certi_title;
        var userid=this.currentUser.useid;
        var uidq='select stuid from tb_stud where uid=%s';
        var q=util.format(uidq,userid);
        var ans=yield databaseUtils.executeQuery(q);
        var sid=ans[0].stuid;
        var queryString='insert into tb_acom(sid,comp_name,cod_pltfrm_name,cod_mrk,coding_link,certi_title) values(%s,"%s","%s",%s,"%s","%s")';
var query=util.format(queryString,sid,comName,codPltfr,codmrk,codlink,certiTitle);
var res=yield databaseUtils.executeQuery(query);
console.log(5);
this.redirect('/app/accomplishment');
}
}
