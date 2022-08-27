const sqlConfig = require("./config")
const sql = require("mssql");

async function getDB(tablename) {
 try {
  await sql.connect(sqlConfig)
  const result = await sql.query('select * from '+tablename);
  console.log(result)
 } catch (err) {
 }
}



// async function createTabel(){
//     try{
//         await sql.connect(sqlConfig);
//         await sql.query('create table JsServer (name nvarchar(20),city nvarchar(30))')
//         console.log("Success")
//     }catch{

//     }
// }

// createTabel();

async function insertIntoTable(name,city){
    try{
        await sql.connect(sqlConfig);
        // await sql.query('insert into JsServer values(\'Ajay\',\'Jaipur\')')
        await sql.query(`insert into JsServer values('${name}','${city}')`)

    }
    catch(err){
        console.log(err);
    }
}
insertIntoTable('John','London');


getDB('JsServer')
