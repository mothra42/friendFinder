var friendArray = require("../data/friends");

module.exports = function(app)
{
  app.get("/api/friends", function(req, res)
  {
    res.json(friendArray);
  });

  app.post("/api/friends", function(req, res)
  {
    //pushing new friend
    friendArray.push(req.body);
    //survey from new friend
    var mySurvey = friendArray[friendArray.length -1].survey;
    //placeholder bestFriend
    var bestFriend = [friendArray[0].survey,0];
    var currentCount = 0;
    //goes through friends

      for (var i = 0; i < friendArray.length -1; i++)
      {
        var counter = 0;
        var currentSurvey = friendArray[i].survey;
        //goes through survey
        for (var j = 0; j < currentSurvey.length; j++)
        {
          if(Math.abs(parseInt(mySurvey[j])-parseInt(currentSurvey[j])) <          Math.abs(parseInt(mySurvey[j])-parseInt(bestFriend[0][j])))
          {
            counter++;
          }
        }
        console.log(counter);
        //checks if there are more similar attributes
        if(counter > currentCount)
        {
          currentCount = counter;
          bestFriend = [friendArray[i].survey, i];
        }
      }
      res.json(friendArray[bestFriend[1]]);
  });
}
