import * as React from 'react'
import {Stage, Layer, Circle} from 'react-konva'
import * as Konva from "konva"
import styled from "styled-components"
import {Vector2d} from "konva"

interface StarDotProps {
  radius: number;
  opacity: number;
}

const alphaOptions = [0.4, 0.5, 0.6, 0.7, 0., 8, 0.9]

class StarDot extends React.Component<StarDotProps> {
  private ref_ = React.createRef<Konva.Circle>()

  render() {
    return (
      <Circle
        ref={this.ref_}
        fill={`rgba(175,175,175,${this.props.radius})`}
        radius={this.props.radius}
        x={Math.random() * (window.innerWidth)}
        y={Math.random() * (window.innerHeight)}
      />
    )
  }
}

const CanvasContainer = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 100vh;
  overflow: scroll;
  width: 100vw;
  z-index:-5;
`

class CanvasAnimation extends React.Component {
  private ref_ = React.createRef<Konva.Layer>()

  animate = () => {
    if (this.ref_.current != null) {
      const anim = new Konva.Animation((frame: any) => {
        // @ts-ignore
        const children = this.ref_.current.getChildren()
        children.each((shape) => {
          let yDist = (Math.random() * 10) * (frame.timeDiff / 1000)
          let xDist = (Math.random() * 3) * (frame.timeDiff / 1000)
          let vect  = {
            x: xDist,
            y: -yDist
          } as Vector2d
          shape.move(vect)
        })
      }, this.ref_.current)

      anim.start()
    }
  }

  componentDidMount() {
    this.animate()
  }

  render() {
    return (
      <CanvasContainer className={"canvas-container"}>
        <Stage
          width={window.innerWidth}
          height={window.innerHeight}
        >
          <Layer ref={this.ref_}>
            {Array.from({length: 50}, (_) => {
              return Math.random() * 3
            }).map((value: number, idx: number) => {
              let alpha = alphaOptions[Math.floor(Math.random() * alphaOptions.length) + 1]
              return <StarDot
                radius={value}
                key={value + idx}
                opacity={alpha}
              />
            })}
          </Layer>
        </Stage>
      </CanvasContainer>

    )
  }
}

export default CanvasAnimation

