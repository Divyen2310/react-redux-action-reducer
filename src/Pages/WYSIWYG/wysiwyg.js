import { useState } from "react";
import WYSIWYGEditor from "../../Components/WYSIWYGEditor";

const Editor = () => {
  const [state, setState] = useState(`
    <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    </ul>
    <p><ins>Divyen</ins></p>
    `);
  console.log("state", state);
  const onChange = (v) => {
    setState(v);
  };
  return (
    <div>
      <div>Editor</div>
      <WYSIWYGEditor onChange={onChange} state={state} />
    </div>
  );
};
export default Editor;
