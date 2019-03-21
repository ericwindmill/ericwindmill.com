import * as React from 'react'
import styled from 'styled-components'

interface FadeInImageProps {
  src: string
}

const FadeInContainer = styled.div`
@keyframes fade-in {
	0% { opacity: 0; }
	20% { opacity: 0; }
	60% { opacity: 1; }
	100% { opacity: 1; }
}

 .fade-in {
    animation: fade-in .6s cubic-bezier(0.645, 0.045, 0.355, 1);
   }
   
     margin: -3px;
`

class FadeInImage extends React.Component<FadeInImageProps> {
  public render(): React.ReactNode {
    return (
      <FadeInContainer>
        <img
          className={"fade-in"}
          src={this.props.src}
        />
      </FadeInContainer>
    )
  }
}

export default FadeInImage
