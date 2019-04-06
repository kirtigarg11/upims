var sessionUtils = require('../utils/sessionUtils');
var util=require('util');
var databaseUtils = require('../utils/databaseUtils');
module.exports = {
showcompvisit: function*(next){
    console.log(23);
    var queryString='select comid,comp_name,job_rol,visit_date,course,branch,pkg from tb_comp where visit_date<=curdate()';
    var query=util.format(queryString);
    var res=yield databaseUtils.executeQuery(query);
    console.log(res);

    yield this.render('companyvisited',{
      res:res
    });

},
showcompvisited: function*(next){
  console.log(23);
  var queryString='select comid,comp_name,job_rol,visit_date,course,branch,pkg from tb_comp where visit_date<=curdate()';
  var query=util.format(queryString);
  var res=yield databaseUtils.executeQuery(query);
  console.log(res);

  yield this.render('compvisittpa',{
    res:res
  });

},
compresult:function*(next){
  console.log("ma agai");
  var comp_id=this.request.body.comp_id;
  var queryString=' select name,user_id from tb_user,tb_placed where comp_id=%s and tb_placed.uid=tb_user.useid';
  var query=util.format(queryString,comp_id);
  var res=yield databaseUtils.executeQuery(query);
  this.body=res;
}
}