var sessionUtils = require('../utils/sessionUtils');
var util=require('util');
var databaseUtils=require('../utils/databaseUtils');

module.exports = {
    compV: function* (next) {
        console.log(23);
        var queryString='select comp_name,course,branch,pkg from tb_comp where visit_date<=curdate()';
        var query=util.format(queryString);
        var res=yield databaseUtils.executeQuery(query);
        yield this.render('comp_visit',{
           res:res,
        });
    }
}