import { useState } from "react";
import Draggable from "react-draggable";

const DraggableComp = () => {
  const [state, setState] = useState({
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0,
    },
    controlledPosition: {
      x: -400,
      y: 200,
    },
  });
  // const onStart = () => {
  //   this.setState({ activeDrags: ++this.state.activeDrags });
  // };
  // const onStop = () => {
  //   this.setState({ activeDrags: --this.state.activeDrags });
  // };
  // const dragHandlers = { onStart, onStop };

  const handleDrag = (e, ui) => {
    const { x, y } = state.deltaPosition;
    setState({
      ...state,
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      },
    });
  };
  const { deltaPosition, controlledPosition } = state;
  return (
    <div>
      <Draggable handle="strong" onDrag={handleDrag}>
        <div className="box no-cursor">
          <strong className="cursor">
            <div>Drag here</div>
          </strong>
          <div>You must click my handle to drag me 11</div>
        </div>
      </Draggable>
      <Draggable handle="strong" onDrag={handleDrag}>
        <div className="box no-cursor">
          <strong className="cursor">
            <div>Drag here</div>
          </strong>
          <div>You must click my handle to drag me 22</div>
          <div>
            x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}
          </div>
        </div>
      </Draggable>
      <Draggable handle="strong">
        <div className="box no-cursor">
          <strong className="cursor">
            <div>Drag here</div>
          </strong>
          <div>You must click my handle to drag me 33</div>
        </div>
      </Draggable>
      <Draggable handle="strong">
        <div className="box no-cursor">
          <strong className="cursor">
            <div>Drag here</div>
          </strong>
          <div>You must click my handle to drag me 44</div>
        </div>
      </Draggable>
    </div>
  );
};
export default DraggableComp;
