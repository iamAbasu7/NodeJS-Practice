const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Random Number Game</title>
  </head>
  <body>
      <h1>Guess the Number!</h1>
    
      
        <label for="guess">My Guess</label>
        <input type="text" id="guess">
        <input type="submit" id="submitGuess" value="Check My Guess">
      
    
      <p id="feedback"></p>
      
      <script>
          // //document.getElementById("demo").innerHTML = 5 + 6;
          // let Number = document.getElementById('Number').innerHTML;
          // console.log(Number);
          // let r = 
          // 
  
          // document.getElementById('Number').innerHTML();
          
  
      function checkGuess() {
          const r = 1 + (5-1)*Math.random();
          let randomNumber = Math.round(r);
          console.log('Random Number', randomNumber)
          let myGuess = guess.value
          if (myGuess == randomNumber) {
          document.getElementById("feedback").innerHTML = "Right Choise" ;
        } else {
          document.getElementById("feedback").innerHTML = "Try Again!" ;
        }
          
      
     }
     submitGuess.addEventListener('click', checkGuess)
  
  
      </script>
      
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});