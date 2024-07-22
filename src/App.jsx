import React, {useState} from "react";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  let [profileClicked, setProfileClicked] = useState(false);

    function profileClick() {
        setProfileClicked(!profileClicked);
    }
  return (
    <div className="container">
      <Navbar onProfileClick={profileClick}/>
      <Home register={profileClicked}/>

    </div>
  )
}

export default App;