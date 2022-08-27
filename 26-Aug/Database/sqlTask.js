const sqlConfig = require("./config")
const sql = require("mssql");





var getCities = function() {
    var conn = new sql.ConnectionPool(sqlConfig);
    conn.connect().then(function(conn) {
      var request = new sql.Request(conn);
      request.input('RollerId', sql.VarChar(30), '48656');
      request.execute('sp_ImageInfoFromRollerId').then(function(data,err, returnValue, affected) {
        console.log(data.recordsets)
      }).catch(function(err) {
        console.log(err);
      });
    });
  }


  getCities();










// async function storedProcedure(my_storedProcedure,Rollerid){

//     await sql.connect(sqlConfig)
//     const queryId = Rollerid


// }