const fs = require('fs');
const text = fs.readFileSync("test.txt","utf-8");
console.log(text);
text2 = text.replace("H. Rackham","Antar B");

fs.writeFileSync("newFile.txt",text2);