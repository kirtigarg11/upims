var Router= require('koa-router');

var bodyParser = require('koa-body')();

module.exports = function(app){

    var router = new Router();

    //Welcome Routes
    var welcomeCtrl = require('./../controllers/WelcomeCtrl');
   // var student_Detail = require('./../controllers/Student_Detail');
   var detailRoute = require('./../controllers/detailCtrl');
   var edudetailRoute = require('./../controllers/edudetailCtrl');
    router.get('/home', welcomeCtrl.showHomePage);
    router.get('/personal',detailRoute.showStuPersDetail);
    router.get('/educational',edudetailRoute.showeduDetails);
    router.post('/personal',detailRoute.UpDetails);
    router.post('/educational',edudetailRoute.upedudetail);
    router.get('/training',edudetailRoute.showtrainingdetail);
    router.post('/training',edudetailRoute.uptrainingdetail);
   
    router.get('/training',edudetailRoute.insertTrainingDetail);
    return router.middleware();
}
