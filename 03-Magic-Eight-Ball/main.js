let userName ="Mika";
userName ? console.log(`Hello ${userName}!`) : console.log('Hello!');
const userQuestion = "";
console.log(`Nous venons de vous poser une question concernant votre nom, ${userName}`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";
switch (randomNumber) {
  case 0:
    console.log('It is certain');
    break;
  case 1:
    console.log('It is decidedly so');
    break;
  case 2:
    console.log('Reply hazy try again');
    break;  
  case 3:
    console.log('Cannot predict now');
    break;  
  case 4:
    console.log('Do not count on it');
    break;  
  case 5:
    console.log('Do not count on it');
    break;  
  case 6:
    console.log('My sources say no');
    break;  
  case 7:
    console.log('Outlook not so good');
    break;  
  default:
    console.log('Signs point to yes');
}

console.log(eightBall);
