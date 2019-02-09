import * as React from 'react';
import styled from 'styled-components';
import {dimensions, colors} from '../styles/variables';

interface GalaxyEdgeProps {
  children?: React.ReactChild;
}

const GalaxyEdgeContainer = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 200px;
    height:200px;

  svg {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 200px;
    height:200px;
  }
    
    #galaxy-edge {
      fill: ${colors.brand};
      transform: translateY(100px);
      filter: drop-shadow(6px 0 2px rgba(0,0,0,.2));
    }
    
    #galaxy-edge-2 {
      fill: rgba(101,234,255,.15);
      transform: translateY(50px);
    }
    
    #galaxy-edge-3 {
      fill: rgba(208,159,255,.2);
      transform: translateY(0);
    }

`;

class GalaxyEdge extends React.Component<GalaxyEdgeProps> {
  public render(): React.ReactNode {
    return (
      <GalaxyEdgeContainer>
        <svg id="svgbg" viewBox="0 0 1200 800" preserveAspectRatio="none" version="1.1"
             xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1200,800 L-1.02318154e-12,800 L-8.89954777e-13,600 C85.0430697,565.142875 151.709736,531.809542 200,500 C272.435395,452.285687 338.467981,390.813027 400,354.972914 C461.532019,319.1328 525.122694,312.86294 600,300 C674.877306,287.13706 734.237872,273.879008 800,240 C865.762128,206.120992 930.224542,145.116619 1000,100 C1046.51697,69.9222542 1113.18364,36.5889209 1200,2.84217094e-14 L1200,800 Z"
            id="galaxy-edge-3" fill="#302345" fillRule="nonzero">
          </path>
          <path
            d="M1200,800 L-4.54747351e-13,800 L-4.54747351e-13,600 C92.3469003,548.58313 159.013567,515.249796 200,500 C261.47965,477.125305 329.445246,466.672269 400,432.679514 C470.554754,398.686758 536.267469,348.94112 600,300 C663.732531,251.05888 724.495633,199.122197 800,163.836483 C875.504367,128.550768 927.388716,128.550768 1000,100 C1048.40752,80.9661547 1115.07419,47.6328214 1200,2.84217094e-14 L1200,800 Z"
            id="galaxy-edge-2" fill="#302345" fillRule="nonzero"></path>
          <path
            d="M1200,800 L-4.54358773e-13,800 L-4.54358773e-13,600 C73.9118225,548.376296 140.578489,507.709066 200,477.99831 C289.132266,433.432177 336.11022,418.160356 400,400 C463.88978,381.839644 535.351476,383.035372 600,349 C664.648524,314.964628 734.722377,247.81986 800,200 C865.277623,152.18014 911.094171,125.221248 1000,82.395035 C1059.27055,53.8442265 1125.93722,26.3792149 1200,2.84217094e-14 L1200,800 Z"
            id="galaxy-edge" fill="#302345" fillRule="nonzero"></path>
        </svg>
        {this.props.children}
      </GalaxyEdgeContainer>
    );
  }
}

export default GalaxyEdge;
