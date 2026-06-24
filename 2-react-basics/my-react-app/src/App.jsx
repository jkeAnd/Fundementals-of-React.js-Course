import Message from "./exercises/greeting.jsx";
import ToggleButton from "./exercises/toggle.jsx";
import NameForm from "./exercises/showInput.jsx";
import TitleUpdater from "./exercises/titleUpdater.jsx";
import SecondCounter from "../../../3-react-hooks/1-assignment/secondCounter.jsx";
import FocusInput from "../../../3-react-hooks/2-assignment/focus.jsx";
import { ThemeProvider } from "../../../3-react-hooks/3-assignment/ThemeContext.jsx";
import ThemeButton from  "../../../3-react-hooks/3-assignment/ThemeDisplay.jsx";
import{ useContext} from "react";
import ThemeContext from "../../../3-react-hooks/3-assignment/ThemeContext.jsx";
import useTimer from "../../../3-react-hooks/4-assignment/use-Timer.jsx";
import Clock from "../../../3-react-hooks/4-assignment/clock.jsx";
function Welcome() {
  return <h1>Welcome to React Basics Course!</h1>;

}
const greeting = <Welcome/>;
function ThemeToggleButton(){
  const {toggleTheme} = useContext(ThemeContext);
  return( 
    <button onClick={toggleTheme}>
      Change Theme
    </button>
  );
}
function App() {
  return(
    <ThemeProvider>
    <div> 
      
      {greeting}
      <Message name = "Jake"/>
      <ToggleButton/>
      <NameForm/>
      <TitleUpdater/>
      <SecondCounter/>
      <ThemeButton />
      <Clock/>
      
  
  
  </div>
  </ThemeProvider>
  
  );
}

export default App
