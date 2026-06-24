// Assignment - 4 - a small component to use custom hook
import useTimer from "./use-Timer";
function Clock() {
  const time = useTimer();// call time from custom hook 


  return <p>Time: {time.toLocaleTimeString()}</p>; // render it as a time string format 
}

export default Clock;