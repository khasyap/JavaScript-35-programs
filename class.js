class person{
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
  introduce(){
    console.log(`i am ${this.name}.age is ${this.age}`)
  }
}
class student extends person{
  constructor(name,age,grade){
    super(name,age);
    this.grade=grade;
  }
  aboutstd(){
    console.log(`std ${this.name} ${this.age} ${this.grade}`)
  }
}
class teacher extends person{
  constructor(name,age,subject){
    super(name,age);
    this.subject=subject;
  }
  aboutteach(){
    console.log(`teacher ${this.name} ${this.age} ${this.subject}`)
  }
}
var std1=new student('vikki',34,'12th')
var teach=new teacher('sfd',64,'maths')

std1.aboutstd();
std1.introduce();