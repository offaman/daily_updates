const database = require('../database/databaseOps')
module.exports = async function (context, req) {
    await database.deleteStudent(req.params.id).then(result=>{    
    }).catch((err)=>{
        logger.log('error',err)
    })
}