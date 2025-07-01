var arr = [1, 2, 3, 2, 4, 1, 5, 3,5,4];

var duplicates = arr.filter((acc,i) => arr.indexOf(acc) === i);
    console.log(duplicates)
    var a=arr.length-duplicates.length
    console.log(a)