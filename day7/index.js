//Q1
console.log("\n\n-----Q1-----\n")
let objects =  { name : "David Rayy", sclass : "VI", rollno : 12 };
for(let i in objects){
    console.log(i)
}

//Q2
console.log("\n\n-----Q2-----\n")
var studentQ2 = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
console.log(studentQ2);
delete studentQ2.rollno;
console.log(studentQ2)

//Q3
var studentQ3 = { name : "David Rayy", sclass : "VI", rollno : 12 }

function giveLength(obj){
    size =0;
    for(let i in studentQ3){
        size++
    }
    return size;
}
console.log("\n\n-----Q3-----\n")
console.log(giveLength(studentQ3));

//Q4
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]; 

console.log("\n\n-----Q4-----\n")
for(let i of library){
    console.log(i)
}


//Q5

console.log("\n\n-----Q5-----\n")
function cylinder(height,radius){
    this.height = height
    this.radius =radius
}
cylinder.prototype.volume=function(){
    return (Math.PI*(this.radius**2)*this.height).toFixed(4);
}
let cylinder1 = new cylinder(15,14);
console.log(cylinder1.volume())

//Q6
console.log("\n\n-----Q6-----\n")
//Sorted Based on Library Ids
var libraryQ6 = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];
function compareCauseIAmBadAtArrowFunctions(a,b){
    if ( a.libraryID < b.libraryID ){
        return -1;
      }
      if ( a.libraryID > b.libraryID ){
        return 1;
      }
      return 0;
    }
libraryQ6.sort(compareCauseIAmBadAtArrowFunctions)
console.log(libraryQ6)