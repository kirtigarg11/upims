var Router= require('koa-router');
var bodyParser = require('koa-body')();

module.exports = function(app){

    var router = new Router();

    //Welcome Routes
    var welcomeCtrl = require('./../controllers/WelcomeCtrl');
    var skillRoute=require('./../controllers/SkillCtrl');
	 var notistud=require('../controllers/notifySCtrl');
	 var notitpa=require('./../controllers/notifyTPACtrl');
	 var notitpo=require('./../controllers/notifyTPOCtrl');
	 var placeRoute=require('./../controllers/PlacedTPACtrl');
	 var tpaheadCtrl=require('./../controllers/tpa_head');
	  var register=require('./../controllers/register');
      var trainingRoute = require('./../controllers/training');
      var projectRoute = require('./../controllers/project');
      var placeddriveRoute = require('./../controllers/placeddrive');
      var detailRoute = require('./../controllers/detailctrl');
      var appeardriveRoute = require('./../controllers/appeardrive');
      var addcompRoute = require('./../controllers/addcompctrl');
      var accomCtrl=require('./../controllers/AccomCtrl');
	  var index=require('./../controllers/index');
      var dtpo=require('./../controllers/dashboardtpo');
      var dstud=require('./../controllers/dashboardstud');
     var cvtpo=require('./../controllers/compvisittpo');
    var dtpa=require('./../controllers/dashboardtpa');
    var eduRoute=require('./../controllers/EduCtrl');

    router.post('/compresult',cvtpo.compresult);
    
	router.get('/index',index.showindex);
    router.get('/home', welcomeCtrl.showHomePage);
    router.get('/logout', welcomeCtrl.logout);
	
    router.get('/dashboardtpo',dtpo.showdashtpo);
       router.get('/usertpa',dtpa.usertpa);
    router.post('/updateusertpa',dtpa.updateusertpa);
    router.get('/usertpo',dtpo.usertpo);

    router.post('/updateusertpo',dtpo.updateusertpo);
    router.post('/dashboardtpo',dtpo.insertcompdetail);
    router.post('/dashboardtpo1',notitpo.selecttpa);
    router.post('/dashboardtpo2',dtpo.addnotify);
    
    router.get('/dashboardtpa',dtpa.showdashtpa);
    router.post('/dashboardtpa',dtpa.insertcompdetail);
    router.post('/dashboardtpa1',notitpa.viewnotify);
    router.post('/dashboardtpa2',notitpa.selectstud);
    router.post('/dashboardtpa3',notitpa.addnotify);


    router.get('/dashboard', register.showDashboardHead);
    router.get('/register1', register.showregisterpage);
    router.get('/userhead', register.userhead);
    router.post('/updateuserhead', register.updateuserhead);
    router.post('/forgot', register.forgot);
    
    router.get('/dashboardstud',dstud.showdashstud);
    
    router.get('/educational',eduRoute.showedudetails);
    router.post('/educational',eduRoute.updateedudetails);


    router.get('/companyvisited',cvtpo.showcompvisit);
    router.get('/compvisittpa',cvtpo.showcompvisited);

    router.get('/placedstudent',placeRoute.showstatus);
    router.post('/placedstudent',placeRoute.updatedstatus);
    router.post('/placedstudent1',placeRoute.showdetails);

	router.get('/register',register.showreg);
	
    router.post('/register', register.insertpersdetail);
    router.post('/register2', register.insertedudetail);
    router.post('/register3', register.insertedu1);
    
    router.get('/login', register.showLoginPage);
    router.post('/login', register.login);
	

    router.get('/skillpage',skillRoute.showskills);
    router.post('/skillpage',skillRoute.insertskills);
    router.post('/skillpage2',skillRoute.inserttools);
    
	 router.get('/notifyStud',notistud.studnotifypage);
    router.post('/notifyStud1',notistud.studviewnotify);
	
	router.get('/notifyTPA', notitpa.shownotifypage);
    router.post('/notifyTPA1',notitpa.viewnotify);
    router.post('/notifyTPA2',notitpa.selectstud);
    router.post('/notifyTPA',notitpa.addnotify);
	
	router.get('/placedTPA',placeRoute.showstatus);
    router.post('/placedTPA',placeRoute.updatedstatus);
    router.post('/placedTPA1',placeRoute.showdetails);
	
	router.get('/notifyTPO', notitpo.shownotifypage);
   
	
	router.get('/tpAdd', tpaheadCtrl.showtpodetails);
	router.get('/tpaAdd', tpaheadCtrl.showtpadetails);
	 router.post('/tpAdd1', tpaheadCtrl.uptpodetails);
    router.post('/tpAdd2', tpaheadCtrl.inserttpo);
    router.post('/tpoassign', tpaheadCtrl.assigntpodetails);
    router.post('/tpoassign1', tpaheadCtrl.assigntpo);
    router.post('/addtpa', tpaheadCtrl.inserttpa);
    router.post('/updatetpa', tpaheadCtrl.updatetpa);

    router.get('/training',trainingRoute.showtrainingdetail);
    router.post('/training',trainingRoute.uptrainingdetail);
    router.post('/training2',trainingRoute.insertTrainingDetail);

    router.get('/project',projectRoute.showprojectdetail);
    router.post('/project',projectRoute.upprojectdetail);
    router.post('/project2',projectRoute.insertprojectdetail);

    router.get('/placeddrive',placeddriveRoute.showplaceddrivedetail);

    router.get('/personal',detailRoute.showStuPersDetail);
    router.post('/personal',detailRoute.UpDetails);

    router.get('/appeardrive',appeardriveRoute.showappeardrivedetail);

    router.get('/addcomp',addcompRoute.showcompdetail);
    router.post('/addcomp',addcompRoute.insertcompdetail);


    router.get('/accomplishment', accomCtrl.showinfo);
    router.post('/accomplishment', accomCtrl.UpDetails);
    router.post('/accomplishment2', accomCtrl.AddDetails);

    

    return router.middleware();
}
