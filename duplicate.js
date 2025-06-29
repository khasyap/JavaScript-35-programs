let arr = [1, 2, 3, 2, 4, 1, 5, 3];

let duplicates = arr.filter((item, index) => arr.indexOf(item) === index);
    console.log(duplicates)