const config = require('../config/dbConfig')
const mssql = require('mssql');
const tableforOperations = 'StudentDetails'
const storedProcForUpdation = 'insertIntoStudentDetails'
const logger  = require('../logging/logger')


async function getStudentInfo(){
    console.log("Success")
    try{
        const pool = await mssql.connect(config);
        let info = await pool.request().query(`select * from ${tableforOperations}`)
        return (info.recordsets);
    }catch(error){
        logger.log('error',error)
    }
}

async function getStudentInfoById(studentId){
    try{
        const pool = await mssql.connect(config);
        let info = await pool.request()
        .input('std',mssql.NVarChar,studentId)
        .query(`select * from ${tableforOperations} where StudentId = @std`)
        return info.recordsets;
    }catch(error){
        logger.log('error',error)
    }
}

async function insertStudent(order){
    try{
        const pool = await mssql.connect(config);
        await pool.request()
        .input('Id',mssql.NVarChar,order.StudentId)
        .input('name',mssql.NVarChar,order.StudentName)
        .input('GPA',mssql.Float,order.GPA)
        .input('Branch', mssql.NVarChar,order.Branch)
        .input('section',mssql.NVarChar,order.Section)
        .execute(storedProcForUpdation);
    }catch(error){
        logger.log('error',error)
    }
}

async function deleteStudent(studentId){
    try{
        const pool = await mssql.connect(config);
        await pool.request()
        .input('StudentId',mssql.NVarChar,studentId)
        .query(`delete from ${tableforOperations} where StudentId = @StudentId`)
    }
    catch(err){
        logger.log('error',error)
    }
}

async function updateStudentInfo(studentIdwithInfo){
    try{
        const pool = await mssql.connect(config);
        await pool.request()
        .input('Id',mssql.NVarChar,studentIdwithInfo.StudentId)
        .input('name',mssql.NVarChar,studentIdwithInfo.StudentName)
        .input('GPA',mssql.Float,studentIdwithInfo.GPA)
        .input('Branch', mssql.NVarChar,studentIdwithInfo.Branch)
        .input('section',mssql.NVarChar,studentIdwithInfo.Section)
        .query(`update ${tableforOperations} set StudentName = @name ,GPA = @GPA ,Branch = @Branch , Section = @section where StudentId = @Id` )
    }
    catch(err){
        logger.log('error',error)
    }
}

module.exports= {getStudentInfo,getStudentInfoById,insertStudent,deleteStudent,updateStudentInfo}


