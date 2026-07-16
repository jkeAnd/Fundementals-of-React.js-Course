import React from "react";
import { useState } from "react";
import Parent from './parent'

function App() {


const [isLoggedin, setIsLoggedIn] = useState(false);
return (
  <div>
    <Parent
    isLoggedIn={isLoggedin}
    setIsLoggedIn={setIsLoggedIn} />
    

  </div>
);
}
export default App;
