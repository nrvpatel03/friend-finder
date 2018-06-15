
var htmlRoutes = {
    goHome: function(app,path){
        app.get("/",function(req,res){
            res.sendFile(path.join(__dirname, "../public/home.html"));
        });
    },
    goSurvey: function(app,path){
        app.get("/survey",function(req,res){
            res.sendFile(path.join(__dirname,"../public/survey.html"));
        });
    }
}
module.exports = {
    htmlRoutes: htmlRoutes
};
