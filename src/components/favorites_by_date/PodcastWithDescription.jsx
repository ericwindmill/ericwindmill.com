import React from "react";
import styled from "styled-components";

export default class PodcastContainer extends React.Component {

  render() {
    const {imgUrl, title, episodeTitle, link, highlight} = this.props
    return (
      <PodcastContainerContainer>
        <a
          target="_blank"
          href={link}>
          <img
            src={imgUrl}
            alt={title}/>
        </a>
        <div>
          <p className="podcast-meta">
            {title}
          </p>
          <p className="episode-title">{episodeTitle}</p>
          <p className="episode-highlight">
            {highlight}
          </p>
        </div>
      </PodcastContainerContainer>
    );
  }
}

const PodcastContainerContainer = styled.div`
      display: flex;
      margin-bottom: 3rem;
      img {
        width: 200px;
        height: 200px;
        flex: 0 0 auto;
      }
      div {
        margin-left: 10px;
      }
      
      div > p {
        margin: 0;
      }
      
      .podcast-meta {
        font-weight: 600;
        font-size: 2.4rem;
      }
      
      .episode-title {
        font-weight: 600;
      }
`