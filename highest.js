class students{
    constructor(name,marks,field){
        this.name=name
        this.marks=marks
        this.field=field
    }
}

var student=new students('vikki',47,'js')
var student2=new students('aish',30,'js')
var student3=new students('vibhav',32,'js')

var studentArray = [student, student2, student3]


var ele=studentArray.sort((a,b)=>b.marks-a.marks)
console.log(ele[0])