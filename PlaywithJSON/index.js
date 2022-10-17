 let obj = {
     name: "Antar",
     home: "India",
     work: "SE",
     comapany: "Zeeve"
 }
// obj to string
 let str = JSON.stringify(obj);
const fs = require('fs');
// fs.writeFile('jsonFile.json', str, (err)=>{
//     console.log("Successfully Transefered");
// })

//  console.log(str);

fs.readFile('jsonFile.json', 'utf-8', (err,data)=>{
    //this is string
    console.log(data);
    let newObj = JSON.parse(data);
    //this is object
    console.log(newObj)
})


