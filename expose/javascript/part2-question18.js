function printCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    console.log(timeString);
  }
  
  printCurrentTime();
  setInterval(printCurrentTime, 1000);