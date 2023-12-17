const  app  = require("./app.js");
var dbModule = require("./db/connection.js");


var connectToDatabase = dbModule.connectToDatabase;

var PORT = process.env.PORT || 5000;
connectToDatabase()
    .then(function () {
        app.listen(PORT, function () {
            console.log("Server Open in " + PORT + " & Connected To Database 🤟");
        });
    })
    .catch(function (err) {
        console.log(err);
    });
