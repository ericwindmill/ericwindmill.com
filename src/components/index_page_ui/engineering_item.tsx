import * as React from 'react'
import styled from 'styled-components'
import FadeInImage from '../image/fade_in_image'
import {colors, dimensions, elevation} from "../../styles/variables"
import FadeIn from '../text/fade_in'

// portrait: https://res.cloudinary.com/ericwindmill/image/upload/c_scale,q_85,w_533/a_90/v1499021356/blog_posts/notes-933111_1920.jpg
// landscape: https://res.cloudinary.com/ericwindmill/image/upload/c_scale,q_85,w_533/v1499021356/blog_posts/notes-933111_1920.jpg

interface PortfolioItemProps {
  imgSrc: string
  label: string
  titleLocation?: string
}

const PortfolioItemContainer = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  transform: rotate(0deg);
  :hover {
     * {
      color: ${colors.brand}
    }
  }

`

const OverlayContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
    :hover {
    transform: rotate(-2deg) translate(20px, -33px);
    transition: transform 20s cubic-bezier(0.0, .5, .51, 1); 
    box-shadow: ${elevation.two};
    }
`

const OverlayEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  :hover {
    cursor: pointer;
    background-image: radial-gradient(${colors.brand} 25%, transparent 100%);
    opacity: .2; 
  }
`

const ItemLabel = styled.label`
  color: ${colors.inkSecondary};
  margin: ${dimensions.gridUnit * .5}px;
  
  & * {
    font-size: 1.5rem !important;
  }
  
  &.top {
    position: absolute;
    top: -40px;
  }
`

class PortfolioItem extends React.Component<PortfolioItemProps> {
  public render(): React.ReactNode {
    return (
      <PortfolioItemContainer>
        <OverlayContainer>
          <OverlayEffect />
          <FadeInImage
            src={this.props.imgSrc}
          />
        </OverlayContainer>
        <ItemLabel className={this.props.titleLocation}>
          <FadeIn text={this.props.label}></FadeIn>
        </ItemLabel>
      </PortfolioItemContainer>
    )
  }
}

export default PortfolioItem
