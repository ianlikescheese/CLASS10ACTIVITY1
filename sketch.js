var marks = [10,20,30,40,49];
function average(){
var sum = marks[0]+marks[1]+marks[2]+marks[3]+marks[4];
var result = sum/marks.length;
console.log (result)
}

function setup() 
{
  createCanvas(400,400);
}

function draw() 
{
background(51);
average()
}

