import { IoIosSwitch } from "react-icons/io";
import { PiUserSwitchFill } from "react-icons/pi";
import "./ToggleSwitch.css";
import { useState } from "react";



export const ToggleSwitch = ()=> {
     
    const [isOn, setIsOn] = useState(false);

    const handleToggleSwitch = () => {
        setIsOn(!isOn);
      };

      const checkIsOn = isOn ? "on" : "off";
  const toggleBGColor = { backgroundColor: isOn ? "#4caf50" : "" };  

    return(
      <>
       <h1 style={{color:"#ff69b4",textAlign:"center"}}>
        Toggle Switch<IoIosSwitch  style={{color:"#d81b60",textAlign:"center"}} />
        <PiUserSwitchFill style={{color:"#ff2190",textAlign:"center"}} />
        </h1>

        <div className="toggle-switch"  
        style={toggleBGColor}
        onClick={handleToggleSwitch} >
          <div className= {`switch ${checkIsOn}`} >
            <span className="switch-state">{checkIsOn} </span>
          </div>
        </div>
        </>
     
    );
};

