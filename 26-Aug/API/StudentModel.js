class studentInfo{
    constructor(studentInformation){
        this.StudentId = studentInformation.StudentId;
        this.StudentName = studentInformation.StudentName;
        this.GPA = studentInformation.GPA;
        this.Branch = studentInformation.Branch;
        this.Section = studentInformation.Section
    }
}

module.exports = studentInfo

// s={
//     "StudentId": "159103021",
//     "StudentName": "Mrinal Malhotra ",
//     "GPA": 9,
//     "Branch": "CSE",
//     "Section": "A"
// }

const n =new studentInfo({
    "StudentId": "159103021",
    "StudentName": "Mrinal Malhotra ",
    "GPA": 9,
    "Branch": "CSE",
    "Section": "A"
})
