import * as React from 'react';
import styled from 'styled-components';

export interface HeroTransitionTextProps {
  className?: string;
  text: string;
}

const HeroTransitionTextContainer = styled.span`
    overflow: hidden;
    display: block;
    
    .word-container {
      display: block;
     }
    
    .slide-top-a {
      -webkit-animation: slide-top-a 1.4s cubic-bezier(0.250, 0.460, 0.450, 0.940);
              animation: slide-top-a 1.4s cubic-bezier(0.250, 0.460, 0.450, 0.940);
    }
    
    @-webkit-keyframes slide-top-a {
      0% {
        -webkit-transform: translateY(110px);
                transform: translateY(110px);
      }
      75% {
        -webkit-transform: translateY(110px);
                transform: translateY(110px);
      }
      100% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
      }
    }
    @keyframes slide-top-a {
      0% {
        -webkit-transform: translateY(110px);
                transform: translateY(110px);
      }
      75% {
        -webkit-transform: translateY(110px);
                transform: translateY(110px);
      }
      100% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
      }
    }
    
    .slide-top-b {
      -webkit-animation: slide-top-b 1.6s cubic-bezier(0.250, 0.460, 0.450, 0.940);
              animation: slide-top-b 1.6s cubic-bezier(0.250, 0.460, 0.450, 0.940);
    }
    
    @-webkit-keyframes slide-top-b {
      0% {
        -webkit-transform: translateY(110px);
                transform: translateY(110px);
      }
      80% {
        -webkit-transform: translateY(110px);
                transform: translateY(110px);
      }
      100% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
      }
    }
    @keyframes slide-top-b {
      0% {
        -webkit-transform: translateY(110px);
                transform: translateY(110px);
      }
      80% {
        -webkit-transform: translateY(110px);
                transform: translateY(110px);
      }
      100% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
      }
    }
    
    .slide-top-c {
      -webkit-animation: slide-top-c 1.8s cubic-bezier(0.250, 0.460, 0.450, 0.940);
              animation: slide-top-c 1.8s cubic-bezier(0.250, 0.460, 0.450, 0.940);
    }
    
    @-webkit-keyframes slide-top-c {
      0% {
        -webkit-transform: translateY(110px);
                transform: translateY(110px);
      }
      80% {
        -webkit-transform: translateY(110px);
                transform: translateY(110px);
      }
      100% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
      }
    }
    @keyframes slide-top-c {
      0% {
        -webkit-transform: translateY(110px);
                transform: translateY(110px);
      }
      80% {
        -webkit-transform: translateY(110px);
                transform: translateY(110px);
      }
      100% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
      }
    }
`;

class HeroTransitionText extends React.Component<HeroTransitionTextProps> {
  public render(): React.ReactNode {
    return <HeroTransitionTextContainer>
          <span className={`word-container ${this.props.className}`} >
            {this.props.text}
          </span>
      </HeroTransitionTextContainer>;
  }
}

export default HeroTransitionText;
