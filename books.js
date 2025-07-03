var books = [ 
{ title: 'Book A', author: 'Author 1' }, 
{ title: 'Book B', author: 'Author 2' }, 
{ title: 'Book C', author: 'Author 3' }, 
];

var str="Book B"
var br=books.findIndex((b)=>b.title==str);
console.log(br+" "+books[br].title)