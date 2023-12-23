console.log("info using loops ")

let info= {
  "firstName": "sakthi ",
  "lastName": "velan ",
  "age": 20,
  "eduQualification": "B.E",
  "city":"Chennai",
  "state": "TamilNadu",
  "country": "India"
}


var keyNames = Object.keys(info);
// for 
console.log("........................using for")
for (let k=0; k<keyNames.length;k++){
  console.log(info[keyNames[k]]);
}

//for in
console.log("........................using for/in")
for(let i in info){
  console.log(info[i]);
}
//forof
console.log("........................using for/of")
for (const h of keyNames) {
    console.log(info[h]);
} 

//forEach
console.log("........................using forEach")
Object.keys(info).forEach(key => console.log(info[key]));