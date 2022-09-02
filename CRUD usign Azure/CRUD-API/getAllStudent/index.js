const database = require('../database/databaseOps')

module.exports = async function (context, req) {
    await database.getStudentInfo().then(result =>{
        context.res = {body:result}
    }).catch((err)=>{
        logger.log('error',err)
    })
}