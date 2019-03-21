import * as React from 'react'
import styled from 'styled-components'
import Page from "../components/layout/Page"
import {fonts} from "../styles/variables"
import ContentLayout from '../components/layout/content_layout'

interface AboutProps {
}

const AboutPageContainer = styled.div`
  margin: 0 2rem;
`

const AboutHeadline = styled.div`
  padding: 100px;
  font-family: ${fonts.serif};
`

const MainContent = styled.div``
const Sidebar     = styled.aside``

class About extends React.Component<AboutProps> {
  public render(): React.ReactNode {
    return (
      <Page>
        <div className='fade-in'>
          <AboutPageContainer>
            <AboutHeadline>
              <h1>This is about me. About me is important. </h1>
            </AboutHeadline>
            <ContentLayout>
              <MainContent className={"col1"}>
                <h2>aboyt dilaf adslkhf dlhf dal;kfj ds;klfjds;lkfj </h2>
                <h3>aboyt dilaf adslkhf dlhf dal;kfj ds;klfjds;lkfj </h3>
                <p>
                  aboyt dilaf adslkhf dlhf dal;kfj ds;klfjds;lkfj
                  aboyt dilaf adslkhf dlhf dal;kfj ds;klfjds;lkfj
                  aboyt dilaf adslkhf dlhf dal;kfj ds;klfjds;lkfj
                  aboyt dilaf adslkhf dlhf dal;kfj ds;klfjds;lkfj
                  aboyt dilaf adslkhf dlhf dal;kfj ds;klfjds;lkfj
                  aboyt dilaf adslkhf dlhf dal;kfj ds;klfjds;lkfj
                  aboyt dilaf adslkhf dlhf dal;kfj ds;klfjds;lkfj
                  aboyt dilaf adslkhf dlhf dal;kfj ds;klfjds;lkfj
                </p>
                <p>
                  aboyt dilaf adslkhf dlhf dal;kfj ds;klfjds;lkfj
                  aboyt dilaf adslkhf dlhf dal;kfj ds;klfjds;lkfj
                  aboyt dilaf adslkhf dlhf dal;kfj ds;klfjds;lkfj
                  aboyt dilaf adslkhf dlhf dal;kfj ds;klfjds;lkfj
                  aboyt dilaf adslkhf dlhf dal;kfj ds;klfjds;lkfj
                  aboyt dilaf adslkhf dlhf dal;kfj ds;klfjds;lkfj
                  aboyt dilaf adslkhf dlhf dal;kfj ds;klfjds;lkfj
                  aboyt dilaf adslkhf dlhf dal;kfj ds;klfjds;lkfj
                  aboyt dilaf adslkhf dlhf dal;kfj ds;klfjds;lkfj
                  aboyt dilaf adslkhf dlhf dal;kfj ds;klfjds;lkfj
                  aboyt dilaf adslkhf dlhf dal;kfj ds;klfjds;lkfj
                  aboyt dilaf adslkhf dlhf dal;kfj ds;klfjds;lkfj
                  aboyt dilaf adslkhf dlhf dal;kfj ds;klfjds;lkfj
                  aboyt dilaf adslkhf dlhf dal;kfj ds;klfjds;lkfj
                </p>
                <ul>
                  <li>make inspirational quote slider for about page</li>
                  <li> style blog post page</li>
                  <li>make dark mode work</li>
                  <li>library page should be organized like William Channer lists</li>
                  <li>same for `articles` page. They could be categorized</li>
                  <li>article pages: 2 column !!! actually no because it's generated
                      content! Which is fine.
                  </li>
                  <li>article pages: redo syntax highlighting color</li>
                  <li>article pages: syntax highlighting boxes should have max width and
                      be centered
                  </li>
                </ul>
              </MainContent>
              <Sidebar className={"col2"}>
                <img
                  src='https://res.cloudinary.com/ericwindmill/image/upload/c_scale,q_85,w_533/a_90/v1499021356/blog_posts/notes-933111_1920.jpg'
                  alt=''
                />
              </Sidebar>
            </ContentLayout>
          </AboutPageContainer>
        </div>
      </Page>
    )
  }
}

export default About
