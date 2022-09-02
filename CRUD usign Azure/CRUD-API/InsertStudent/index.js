const database = require('../database/databaseOps')
module.exports = async function (context, req) {
    let info = req.body
    await database.insertStudent(info).then(result =>{
        // context.res = {body:req.body}
    }).catch((err)=>{
        logger.log('error',err)
    })
}