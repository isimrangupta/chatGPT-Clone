import { useEffect, useState } from "react";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";
import "./Darkmode.css";

const Darkmode = () => {
  const [mode, setMode] = useState("darkmode");

  function toggle() {
    if (mode === "darkmode") {
      setMode("lightmode");
    } else {
      setMode("darkmode");
    }
  }

  useEffect(() =>{
    document.body.className = mode
  },[mode])

  return (
    <button
    className="darkmodebtn"
      onClick={() => {
        toggle();
      }}
    >
    {mode === 'darkmode' ? <GoSun /> : <FaMoon />} 
    </button>
  );
};

export default Darkmode;
