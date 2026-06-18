import Message from "./exercises/greeting.jsx";
import ToggleButton from "./exercises/toggle.jsx";
import NameForm from "./exercises/showInput.jsx";
import TitleUpdater from "./exercises/titleUpdater.jsx";
function Welcome() {
  return <h1>Welcome to React Basics Course!</h1>;

}
const greeting = <Welcome/>;
function App() {
  return(
    <div> 
      {greeting}
      <Message name = "Jake"/>
      <ToggleButton/>
      <NameForm/>
      <TitleUpdater/>
  
  
  </div>
  );
}

export default App
