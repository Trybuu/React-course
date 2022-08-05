import React from "react";
// skrót na komponent funkcyjny - sfc
const SwitchButton = (props) => {
  return (
    <button onClick={props.click}>{props.active ? "Stop" : "Start"}</button>
  );
};

export default SwitchButton;
