console.log("I'm ready!");

let hacker1 = "Valentin";
  console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Lucas";
  console.log(`The navigator's name is ${hacker2}`);

if (hacker1.length > hacker2.length){
  console.log (`The driver has the longest name, it has ${hacker1} characters.`);
}
else if (hacker1.length > hacker2.length){
  console.log (`It seems that the navigator has the longest name, it has ${hacker2} characters.`);
}
else {
  console.log(`Wow, you both have equally long names, ${hacker1} characters!`);
}

let driversName = "";
for(i=0; i < hacker1.length; i++){
  driversName += hacker1[i].toUpperCase() + " ";
}
console.log(driversName);

let navigatorsName = "";
for(let j = hacker2.length - 1; j >= 0; j--){
  navigatorsName += hacker2[j]
}
console.log(navigatorsName);

if(hacker1 > hacker2){
  console.log("The driver's name goes first.")
}
else if(hacker1 < hacker2){
console.log("Yo, the navigator goes first definitely.")  
}
else{
  console.log("What?! You both have the same name?")
}
