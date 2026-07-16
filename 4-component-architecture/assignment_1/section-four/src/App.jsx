
import React from "react";
import Parent from './assignment_1/parent'


function App() { // app is the main component -> it renders the component
  const userName ="Student"
    return (
    <div>
    <Parent name={userName}/>
    </div>
    );
}

export default App;