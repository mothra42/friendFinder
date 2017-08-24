var friendArray = require("../data/friends");

module.exports = function(app)
{
  app.get("/api/friends", function(req, res)
  {
    res.json(friendArray);
  });

  app.post("/api/friends", function(req, res)
  {
    friendArray.push(req.body);
    res.json(true);
    for (var i = 0; i < friendArray.length -1; i++)
    {
      var surNum = friendArray[i].survey.reduce(function(total, currentValue)
      {
        return total + currentValue;
      });
    }
  });
}
