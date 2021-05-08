
// console.log(data[1]);
// const dataObj ={0:7, 1:"dog"  };
// console.log(dataObj[1]);



// console.log(dataObj['pet']);
// console.log(dataObj.pet);
// console.log(Object.keys(dataObj) );


let keys = Object.keys(dataObj);// objekto raktu masyvas

for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    // console.log("i yra "+i+" key yra "+key+" value yra " + dataObj[key]);
    // console.log(dataObj[key]);
}



 



Object.keys(whoman);

// console.log(whoman.age);
// console.log(whoman.runDates);
// console.log(whoman['runDates']);

for (let i = 0; i < whoman.runDates.length; i++) {
    let dates = whoman.runDates;
//    console.log(dates[i]);
//    console.log(whoman.runDates[i]);
}
// console.log(whoman.name);
// console.log(whoman.surname);

let pet = whoman.pet;
// console.log(whoman.pet.species);
// console.log(pet.species);

// console.log("console.log(pet[key]);");



// console.log(whoman);
// console.log(whoman.pet);
pet = whoman.pet;
keys = Object.keys(pet);
// console.log(keys);

for (let i = 0; i < keys.length; i++) {
    key = keys[i];
    // console.log("i-"+i+" key-"+keys[i]+" value-"+pet[keys[i]]);
    // console.log("i-"+i+" key-"+key+" value-"+pet[key]);
    
}