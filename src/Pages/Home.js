import styled from "styled-components";
import { useCallback, useRef, useState } from "react";

// const Div = styled.div`
//   width: ${props => props.width};
//   height: ${props => props.height};
//   background-color: lightblue;
// `;

function Resizeable({ children }) {
  const [size, setSize] = useState({ x: 400, y: 300 });
  const ref = useRef();

  const handler = useCallback(() => {
    function onMouseMove(e) {
      setSize((currentSize) => ({
        x: currentSize.x + e.movementX,
        y: currentSize.y + e.movementY,
      }));
    }
    function onMouseUp() {
      ref.current.removeEventListener("mousemove", onMouseMove);
      ref.current.removeEventListener("mouseup", onMouseUp);
    }
    ref.current.addEventListener("mousemove", onMouseMove);
    ref.current.addEventListener("mouseup", onMouseUp);
  }, []);

  return (
    <div style={{width:`${size.x}px`, height:`${size.y}px` , backgroundColor:"lightblue"}}>
      <button ref={ref} onMouseDown={handler}>
        Size
      </button>
      {children}
    </div>
  );
}

export default Resizeable;
