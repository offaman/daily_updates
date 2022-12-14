var _expressPackage = require("express");  
var _bodyParserPackage = require("body-parser");  
var _sqlPackage = require("mssql");  
const sqlConfig = require("./config");
//Initilize app with express web framework  
var app = _expressPackage();  
//To parse result in json format  
app.use(_bodyParserPackage.json());  
  
//Here we will enable CORS, so that we can access api on cross domain.  
app.use(function (req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");  
    next();  
});  
  
//Lets set up our local server now.  
var server = app.listen(process.env.PORT || 4000, function () {  
    var port = server.address().port;  
    console.log("App now running on port", port);  
});  
  
//Set up your sql connection string, i am using here my own, you have to replace it with your own.  
// var dbConfig = {  
//     user: "sa",  
//     password: "@password1",  
//     server: "LAPTOP-7G1PNTT6",  
//     database: "SchoolManagment"  
// };  
  
//Function to connect to database and execute query  
var QueryToExecuteInDatabase = function (response, strQuery) {  
    //close sql connection before creating an connection otherwise you will get an error if connection already exists.  
    _sqlPackage.close();  
    //Now connect your sql connection  
    _sqlPackage.connect(sqlConfig, function (error) {  
        if (error) {  
            console.log("Error while connecting to database :- " + error);  
            response.send(error);  
        }  
        else {  
            //let's create a request for sql object  
            var request = new _sqlPackage.Request();  
            //Query to run in our database  
            request.query(strQuery, function (error, responseResult) {  
                if (error) {  
                    console.log("Error while connecting to database:- " + error);  
                    response.send(error);  
                }  
                else {  
                    response.send(responseResult);  
                }  
            });  
        }  
    });             
 }  



 var conn = new _sqlPackage.Connection(sqlConfig);
 var request = new _sqlPackage.Request(conn);  
                request.execute('sp_ImageInfoFromRollerId', function (err, recordsets, returnValue) {  
                    console.log(recordsets)
                });
  
//GET API  
app.get("/StudentList", function(_req ,_res){  
    var Sqlquery = "select * from RollerInfo";  
    QueryToExecuteInDatabase(_res, Sqlquery);  
});