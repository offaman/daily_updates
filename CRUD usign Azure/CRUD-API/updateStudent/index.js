const database = require('../database/databaseOps')

module.exports = async function (context, req) {
    let info = req.body
    await database.updateStudentInfo(info).then(result =>{
    }).catch((error)=>{
        logger.log('error',error)
    }) 
}