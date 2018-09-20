//in var we can redefine as well as reassign a variable
var nameVar = "milek";
var nameVar = "linkin";
console.log('nameVar: ',nameVar);

//in let we can reassign but we cannot redefine a variable
let nameLet = "milek";
nameLet = "linkin";
console.log('nameLet: ',nameLet);

//in const we cannot re-assign as well as we cannot 
//redefine a variable
const nameConst = "milek";
console.log('nameConst: ' ,nameConst);

//blocking scope:
//  if{
//      if we define let and const here,
//      then we cannot access them outside this if
//  }
// so what we do is as shown:

const name = "milek agrawal";
let firstname;
if(name){
    firstname = name.split(' ')[0]; 
}
console.log('firstname: ',firstname);