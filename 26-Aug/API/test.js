// let x= 'CSE'

// // console.log((/^[0-9]+$/.test(x)))

// // console.log((/^[a-zA-Z ]+$/.test(x)))


// console.log(x.length)
// console.log(!/^[a-zA-Z]+$/.test(x))



// if(0){
//     throw "11"
// }
// else if (1){
//     throw '12'
// }

function validate(StudentInfo){
    if(!/^[0-9]+$/.test(StudentInfo.StudentId)){
        throw ("StudentId must be numeric") 
    }
    if(!/^[a-zA-Z ]+$/.test(StudentInfo.StudentName)){
        throw ("Student Name is Invalid")
    }
    if(!Number.isInteger(StudentInfo.GPA)){
        throw("GPA should be numeric")
    }
    if(StudentInfo.Branch.length>3 || !(/^[a-zA-Z]+$/.test(StudentInfo.Branch))){
        throw ("Invalid Branch")
    }
    if(StudentInfo.Section.length != 1){
        throw ("Invalid Section Name")
    }
}


function validate(StudentInfo){
    if(!/^[0-9]+$/.test(StudentInfo.StudentId)){
        throw ("StudentId must be numeric") 
    }
    else if(!/^[a-zA-Z ]+$/.test(StudentInfo.StudentName)){
        throw ("Student Name is Invalid")
    }
    else if(!Number.isInteger(StudentInfo.GPA)){
        throw("GPA should be numeric")
    }
    else if(StudentInfo.Branch.length>3 || !(/^[a-zA-Z]+$/.test(StudentInfo.Branch))){
        throw ("Invalid Branch")
    }
    else if(StudentInfo.Section.length != 1){
        throw ("Invalid Section Name")
    }
}

StudentInfo={
        "StudentId": "159103021",
        "StudentName": "Mrinal Malhotra ",
        "GPA": 9,
        "Branch": "ABCD",
        "Section": "A"
}
validate(StudentInfo)
