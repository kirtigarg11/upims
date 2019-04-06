var sessionUtils = require('../utils/sessionUtils');
var util=require('util');
var databaseUtils = require('../utils/databaseUtils');

module.exports = {
	showdashstud: function* (next){
		var queryString='select count(*) as comp from tb_comp';
		var query=util.format(queryString);
		var comp=yield databaseUtils.executeQuery(query);
		var queryString='select count(*) as place from tb_edud where placed=1';
		var query=util.format(queryString);
		var place=yield databaseUtils.executeQuery(query);
		var queryString='select max(pkg) as mpkg from tb_comp';
		var query=util.format(queryString);
		var mpkg=yield databaseUtils.executeQuery(query);
		var queryString='select count(*) as stud from tb_stud';
		var query=util.format(queryString);
		var stud=yield databaseUtils.executeQuery(query);

	yield this.render('dashboardstud',{
		comp:comp,
		place:place,
		mpkg:mpkg,
		stud:stud,

	});	
	}
}