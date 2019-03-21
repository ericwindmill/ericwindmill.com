import * as React from 'react'
import styled from 'styled-components'
import EngineeringItem from "./engineering_item"

interface MainBodyProps {
}

const MainBodyContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`

class MainBody extends React.Component<MainBodyProps> {
  public render(): React.ReactNode {
    return (
      <MainBodyContainer>
        <EngineeringItem
          imgSrc={"https://res.cloudinary.com/ericwindmill/image/upload/c_scale,q_85,w_666/v1499021356/blog_posts/notes-933111_1920.jpg"}
          label={"Generic Title"}
        />
        <div
          style={{
            marginTop: "222px"
            // marginLeft: "350px"
          }}
        >
          <EngineeringItem
            imgSrc={"https://res.cloudinary.com/ericwindmill/image/upload/c_scale,q_85,w_555/a_90/v1499021356/blog_posts/notes-933111_1920.jpg"}
            label={"Generic Title"}
            titleLocation={"top"}
          />
        </div>
        <div
          style={{
            marginLeft: "66px",
            marginTop: "-111px"
          }}
        >
          <EngineeringItem
            imgSrc={"https://res.cloudinary.com/ericwindmill/image/upload/c_scale,q_85,w_533/a_90/v1499021356/blog_posts/notes-933111_1920.jpg"}
            label={"Generic Title"}
          />
        </div>
        <div
          style={{
            marginTop: "111px",
            marginLeft: "121px"
          }}
        >
          <EngineeringItem
            imgSrc={"https://res.cloudinary.com/ericwindmill/image/upload/c_scale,q_85,w_533/v1499021356/blog_posts/notes-933111_1920.jpg"}
            label={"Generic Title"}
          />
        </div>
        <EngineeringItem
          imgSrc={"https://res.cloudinary.com/ericwindmill/image/upload/c_scale,w_365/v1552430255/portfolio_site/next_proj.png"}
          label={""}
        />
      </MainBodyContainer>
    )
  }
}

export default MainBody
