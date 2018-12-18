import * as React from 'react';
import {Stage, Layer, Rect} from 'react-konva';
import * as Konva from "konva";

class MyRect extends React.Component {
  private ref_ = React.createRef<Konva.Rect>();

  changeSize = () => {
    // to() is a method of `Konva.Node` instances
    if (this.ref_.current !== null) {
      this.ref_.current.to({
        scaleX: Math.random() + 0.8,
        scaleY: Math.random() + 0.8,
        duration: 0.2
      });
    }
  };

  render() {
    return (
      <Rect
        ref={this.ref_}
        width={50}
        height={50}
        fill="green"
        draggable
        onDragEnd={this.changeSize}
        onDragStart={this.changeSize}
      />
    );
  }
}

class CanvasAnimation extends React.Component {
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <MyRect />
        </Layer>
      </Stage>
    );
  }
}

export default CanvasAnimation;

