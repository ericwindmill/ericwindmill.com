import React from "react";
import styled from "styled-components";

export default class AlbumCover extends React.Component {

  render() {
    const {imgUrl, artist, albumTitle} = this.props;
    return (
      <AlbumCoverContainer>
        <img src={imgUrl} alt={albumTitle}/>
        <div className="overlay">
          <h3>{albumTitle}</h3>
          <p>by {artist}</p>
        </div>
      </AlbumCoverContainer>
    );
  }
}

const AlbumCoverContainer = styled.div`
  position: relative;
  height: 200px;
  width: 200px;
  
  img {
    height: 200px;
    width: 200px
  }
  
  .overlay {
    position: absolute;
    height: 200px;
    width: 200px;
    background: rgba(0,0,0,.5);
    z-index: 5;
    top: 0;
    left: 0;
    opacity: 0;
    transition: all 100ms ease-in-out;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    
    p, h3 {
      color: rgba(255,255,255, 1);
      text-align: center;
    }
  }
  
  &:hover {
    cursor: help;
    .overlay {
      opacity: 1;
    }
  }
`