 employees = [ 
{ name: 'Alice', salary: 50000 }, 
{ name: 'Bob', salary: 60000 }, 
{ name: 'Charlie', salary: 40000 }, 
]; 

sal=40000;
var emp=employees.filter((empl)=>empl.salary>sal).map(empl=>empl.name)
console.log(emp)