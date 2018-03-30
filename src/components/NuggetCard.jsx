import React, {Component} from "react";
import styled from "styled-components";

const leftArrangement = {
  gridTemplateAreas: "'coverImage title' 'coverImage description'",
  gridTemplateColumns: "200px 1fr",
};

const rightArrangement = {
  gridTemplateAreas: "'title coverImage' 'description coverImage'",
  gridTemplateColumns: "1fr 200px",
};

class NuggetCard extends Component {
  render() {
    const {title, image, description, arrangement, externalUrl} = this.props;
    return (
      <ProjectCardContainer>
        <a href={`${externalUrl}`}>
          <Card
            style={
              arrangement === "rightArrangement"
                ? leftArrangement
                : leftArrangement
            }
          >
            <h2>{title}</h2>
            <img src={image} alt={"project logo"} width={"200px"}/>
            <p>{description}</p>
          </Card>
        </a>
      </ProjectCardContainer>
    );
  }
}

export default NuggetCard;

const ProjectCardContainer = styled.div`
  a {
    color: black;
    text-decoration: none;
    &:hover {
      div {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2),
          0 3px 1px 2px rgba(0, 0, 0, 0.12), -2px 1px 1px 0 rgba(0, 0, 0, 0.12);
        cursor: pointer;
      }
    }
  }
`;

const Card = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-column-gap: 50px;

  margin: 25px 0;
  padding: 20px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 1px -2px rgba(0, 0, 0, 0.12),
    -2px 1px 5px 0 rgba(0, 0, 0, 0.12);
  transition: all 300ms ease;
  
  
    img {
      grid-area: coverImage;
      margin-bottom: 0;
    }
    p {
      grid-area: description;
    }
    p:last-child {
      margin-bottom: 0;
    }
    h2 {
      grid-area: title;
      margin-top: 0px;
    }

  @media screen and (max-width: 600px) {
    grid-template-areas: "coverImage" "title" "description" !important;
    grid-template-columns: 1fr !important;
    grid-template-rows: 150px max-content 1fr !important;
    
    img {
      width: 150px;
      grid-area: coverImage;
      justify-self: center;
      margin-bottom: 0;
    }
    p {
      grid-area: description;
    }
    p:last-child {
      margin-bottom: 0;
    }
    h2 {
      grid-area: title;
      margin-top: 0;
    }
  }
`;
