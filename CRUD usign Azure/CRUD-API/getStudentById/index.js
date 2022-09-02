const database = require('../database/databaseOps')

module.exports = async function (context, req) {
    console.log(req.params.id)
    await database.getStudentInfoById(req.params.id).then(result =>{
        context.res = {body:result}
    }).catch((err)=>{
        logger.log('error',err)
    })
}