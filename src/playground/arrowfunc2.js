//with arrow function we cannot access arguments object.
const add = function(a,b){
    console.log(arguments);
    console.log(a+b);
}

add(1,2);

//note arrow function does not bind its own this value
// const user = {
//     name:'milek',
//     cities:['Bhopal','Indore','Ganghinagar'],
//     printPlacesLived: function() {
//         var that = this;
//         this.cities.forEach(function(city){
//             console.log(that.name + ' has lived in ' + city);
//         })
//     }

// }

// const user = {
//     name:'milek',
//     cities:['Bhopal','Indore','Ganghinagar'],
//     printPlacesLived: function() {
//         this.cities.forEach((city) => {
//             console.log(this.name + ' has lived in ' + city);
//         })
//     }
// }  

// const user = {
//     name:'milek',
//     cities:['Bhopal','Indore','Ganghinagar'],
//     printPlacesLived() {
//         this.cities.forEach((city) => {
//             console.log(this.name + ' has lived in ' + city);
//         })
//     }
// } 

//using map method. 
//map : creates a new array and allows us to tweek the elements of array

// const user = {
//     name:'milek',
//     cities:['Bhopal','Indore','Ganghinagar'],
//     printPlacesLived() {
//        return this.cities.map((city) => this.name + ' has lived in ' + city);
//     }
// }

// console.log(user.printPlacesLived());

//challenge-5

const multiplier = {
    numbers: [1,2,3,4,5],
    multiplyBy: 4,
    multiply(){
        return this.numbers.map((number) => number + ' * ' + this.multiplyBy + ' = ' + this.multiplyBy*number);
    }
}
console.log(multiplier.multiply());