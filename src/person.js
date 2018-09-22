console.log("person.js is running");

const isAdult = (age) => age>=18;

const canDrink = (age) => age>=21;

const isSenior = (age) => age>=60;
//isSenior() as export default 
export {isAdult , canDrink,isSenior as default};