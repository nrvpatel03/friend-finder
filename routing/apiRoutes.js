
module.exports = function(app, data){
    
    app.get("/api/friends", function(req, res){
        return res.json(data);
    });

    app.post("/api/friends", function(req, res){
        var newFriend = req.body;
        //turn scores array scores string to ints
        for(var i = 0; i<newFriend.scores.length; i++){
            var string = newFriend.scores[i];
            var int = parseInt(string);
            newFriend.scores.splice(i,1,int);
        }

        console.log(newFriend);
        data.push(newFriend);
        res.json(newFriend);
    });
}
