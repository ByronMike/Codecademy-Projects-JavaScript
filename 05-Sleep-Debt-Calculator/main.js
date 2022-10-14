function getSleepHours(day) {
    if (day === "monday") {
      return 8;
    } else if (day === "tuesday") {
      return 6.5;
    } else if (day === "wednesday") {
      return 7;
    } else if (day === "thursday") {
      return 8;
    } else if (day === "friday") {
      return 4;
    } else if (day === "saturday") {
      return 8;
    } else if (day === "sunday") {
      return 8;
    }
  }
  
  function getActualSleepHours() {
    const sumSleepHours =
      getSleepHours("monday") +
      getSleepHours("tuesday") +
      getSleepHours("wednesday") +
      getSleepHours("thursday") +
      getSleepHours("friday") +
      getSleepHours("saturday") +
      getSleepHours("sunday");
    return sumSleepHours;
  }
  
  function getIdealSleepHours() {
    const idealHours = 7 * 8;
    return idealHours;
  }
  
  function calculateSleepDebt() {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log("C'est parfait");
      } else if (actualSleepHours > idealSleepHours) {
      console.log("Tu dors plus que nécessaire, tu dors " + (actualSleepHours - idealSleepHours) + "heures de trop" );
     } else if (actualSleepHours < idealSleepHours) {
      console.log("Tu ne dors pas assez, tu dors " + (idealSleepHours - actualSleepHours)  + " heures en moins que ce que tu devrais");
    }
  }
  
  calculateSleepDebt();
  