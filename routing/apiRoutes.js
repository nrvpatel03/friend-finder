
var apiRoutes = {
    goApiFriends: function(app, data){
        app.get("/api/friends",function(req,res){
            return res.json(data);
        });
    },
    postApiFriends: function(app, data){
        app.post("/api/friends", function(req,res){
            var newFriend = req.body;
            console.log(newFriend);
            data.push(newFriend);
            res.json(newFriend);
        })
    }
}
module.exports = {
    apiRoutes: apiRoutes
}