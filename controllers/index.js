var sessionUtils = require('../utils/sessionUtils');

module.exports = {
 showindex: function*(next){
	yield this.render('index',{
		errormsg:false
		
	}); 
	 
 }	
}
