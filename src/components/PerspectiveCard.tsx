import * as React from 'react';
import styled from 'styled-components';
import {elevation} from "../styles/variables";

interface PerspectiveCardProps {
  children: React.ReactChild;
}

const maxDegree = {
  max: 20,
  min: -20,
}

const PerspectiveCardContainer = styled.div`
    width: fit-content;
    height: fit-content;
    animation: ease-in-and-up 1s cubic-bezier(0.250, 0.460, 0.450, 0.940);

    .tilt {
      display: block;
      position: relative;
      overflow: hidden;
      text-transform: uppercase;
      transform-style: preserve-3d;
      box-shadow: ${elevation.three};
      background-image: linear-gradient(0deg,#ee0979 0,#ff6a00);
      will-change: transform;
      transform: perspective(1500px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);
    }
    
    .tilt-inner {
      position: relative;
      transform: translateZ(0);
      transition: all .8s cubic-bezier(.42,0,0,1);
      clip-path: inset(0);
      -webkit-clip-path: inset(0);
      width: calc(100% + .1rem);
      z-index: 0;
    }
    
    .tilt-inner:hover {
      clip-path: inset(10px);
    }
    
    .tilt-overlay {
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      bottom:0;
      right: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,.6);
      opacity: 0;
      transition: all .8s cubic-bezier(.42,0,0,1);
    }
    
    .card-content {
      width: 100.1%;
      height: 100.1%;
      position: relative;
      z-index: 0;
      transform: scale(1) translateZ(0);
      transition: all .8s cubic-bezier(.42,0,0,1);
    }
    
    @keyframes ease-in-and-up {
      0% {
        opacity: 0;
        transform: translate3D(0,.5rem,0);
      }
      50% {
          opacity: 0;
          transform: translate3D(0,.5rem,0);
      }
      
      51% {
          opacity: 25%;
          transform: translate3D(0,.5rem,0);
      }
      70% {
          opacity: 1;
          transform: translate3D(0,.5rem,0);
      }
      99% {
          opacity: 1;
          transform: translate3D(0,0,0);
      }
      100% {
          opacity: 1;
          transform: translate3D(0,0,0);
      }
    }
`;

class PerspectiveCard extends React.Component<PerspectiveCardProps> {
  private nodeRef = React.createRef<HTMLDivElement>();

  private _mapDistanceToDegrees = (inNum: number, inMin: number, inMax: number) => {
    return (inNum - inMin) * (maxDegree.max - maxDegree.min) / (inMax - inMin) + maxDegree.min;
  }

  private handleMouseOver = (event: any) => {
    const node = this.nodeRef.current;
    if (node != null) {
      const rect = event.target.getBoundingClientRect();
      const safeTop = rect.top + 10;
      const safeLeft = rect.left + 10;
      const mouseXInRect = event.clientX - safeLeft;
      const mouseYInRect = event.clientY - safeTop;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const distanceFromCenterX = -(centerX - mouseXInRect);
      const distanceFromCenterY = -(centerY - mouseYInRect);
      let xDegree = this._mapDistanceToDegrees(distanceFromCenterY, -rect.width, rect.width);
      let yDegree = this._mapDistanceToDegrees(distanceFromCenterX, -rect.height, rect.height);

      node.setAttribute("style", `
        transform: rotateY(${yDegree}deg) rotateX(${-xDegree}deg); perspective(1500px) scale3d(1,1,1);
        -webkit-transform: rotateY(${yDegree}deg) rotateX(${-xDegree}deg); perspective(1500px) scale3d(1,1,1);
        -webkit-transform: rotateY(${yDegree}deg) rotateX(${-xDegree}deg); perspective(1500px) scale3d(1,1,1);
      `);
    }
  }

  // @ts-ignore
  private handleMouseOut = (_) => {
    const node = this.nodeRef.current;
    if (node != null) {
      node.setAttribute("style", "transform: rotateY(0deg) rotateX(0deg);-webkit-transform: rotateY(0deg) rotateX(0deg);-moz-transform: rotateY(0deg) rotateX(0deg)");
    }
  }

  public render(): React.ReactNode {
    return (
      <PerspectiveCardContainer>
        <div className="tilt" onMouseMove={this.handleMouseOver} onMouseOut={this.handleMouseOut} ref={this.nodeRef}>
          <div className='tilt-inner'>
            <div className="tilt-overlay"></div>
            <div className={'card-content'}>
              {this.props.children}
            </div>
          </div>
        </div>
      </PerspectiveCardContainer>
    );
  }
}

export default PerspectiveCard;


