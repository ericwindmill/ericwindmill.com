import * as React from 'react'
import styled from 'styled-components'

interface FadeInProps {
  text: string;
}

const FadeInContainer = styled.div`
  .fade-in-a {
    -webkit-animation: fade-in-a 1.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) forwards;
            animation: fade-in-a 1.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) forwards;
  }
  
  @keyframes fade-in {
      from {
          opacity:0;
      }
      to {
          opacity:1;
      }
  }

  .fade-in {
    animation: fade-in 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
   }
`

class FadeIn extends React.Component<FadeInProps> {
  public render(): React.ReactNode {
    return (
      <FadeInContainer>
        <span className={`fade-in`}>{this.props.text}</span>
      </FadeInContainer>
    )
  }
}

export default FadeIn
