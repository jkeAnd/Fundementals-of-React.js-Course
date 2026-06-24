// Assignment 4 Timer
import { useState, useEffect } from "react";

function useTimer() {
   // create a current 'date' object with current time
  //let time = now.toLocaleTimeString(); // change Date to only time string 
  const [time, setTime] = useState(new Date()); // starting from now 

  useEffect(() => {
    const interval = setInterval(() => { setTime(new Date())},1000);

    return () => clearInterval(interval);

  },  []);
  
  return time
}

export default useTimer;