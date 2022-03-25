import { useState } from "react";
import "./stye.scss";

const Editable = () => {
  const [state, setState] = useState({ name: "", place: "" });
  const onChange = (e, name) => {
    console.log(e.currentTarget.textContent);
    setState({
      ...state,
      [name]: e.currentTarget.textContent,
    });
  };
  console.log("state", state);
  return (
    <>
      <div className="StyledDiv" onInput={(e) => onChange(e, "name")} contentEditable="true" data-ph="Name?" />
      <div
        className="StyledDiv"
        onInput={(e) => onChange(e, "place")}
        contentEditable="true"
        data-ph="My Placeholder"
      />
    </>
  );
};
export default Editable;
