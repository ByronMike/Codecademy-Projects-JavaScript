let raceNumber = Math.floor(Math.random() * 1000);
const registerEarly = false ;
const age = 18;

if (age > 30 && registerEarly === true) {
  raceNumber = raceNumber + 1000;
} else if  (age > 18 && registerEarly === true) {
  console.log(`Dear ${raceNumber}, you will race at 9:30 am`);
} else if (age > 18 && registerEarly === false)  { console.log(`Dear ${raceNumber}, you will race at 11:00 am`);
} else if (age < 18)  { console.log(`Dear ${raceNumber}, you will race at 12:30 am`);
} else 
  { console.log(`Dear ${raceNumber}, you will have to see the registration desk`);
}