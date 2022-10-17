const fs = require('fs');
//create folder
//fs.mkdirSync('Folder');

//create file
//fs.writeFileSync('Folder/bio.txt', 'This is a bio text');

//append text at end
//fs.appendFileSync('Folder/bio.txt', 'This is appended text');

//with buffer value <Buffer 54 68 69 73 20 69 73 20 61 20 62 69 6f 20 74 65 78 74 54 68 69 73 20 69 73 20 61 70 70 65 6e 64 65 64 20 74 65 78 74>
// const text = fs.readFileSync('Folder/bio.txt');
// console.log(text);

//the original text
// const data = fs.readFileSync('Folder/bio.txt', 'utf-8');
// console.log(data);

//rename file
// fs.renameSync("Folder/bio.txt", "Folder/mybio.txt");

//delete file
// fs.unlinkSync("Folder/mybio.txt");

//delete folder
// fs.rmdirSync("Folder");