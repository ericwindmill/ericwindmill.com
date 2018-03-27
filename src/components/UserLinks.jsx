import React, {Component} from 'react'
import styled from 'styled-components'
import {FaGithubAlt, FaTwitter, FaInstagram} from 'react-icons/lib/fa'
import MdMessage from 'react-icons/lib/md/message'

class UserLinks extends Component {

  render() {
    return (
      <UserLinksContainer>
        <a href='https://github.com/ericwindmill'>
          <div className='github icon-container'>
            <FaGithubAlt className='social-icons'/>
          </div>
        </a>
        <a href='https://twitter.com/ericwindmill?lang=en'>
          <div className='twitter icon-container'>
            <FaTwitter className='social-icons'/>
          </div>
        </a>
        <a href="https://www.instagram.com/ericwindmill/">
          <div className='instagram icon-container'>
            <FaInstagram className='social-icons'/>
          </div>
        </a>
        <a href="https://www.messenger.com/t/eric.windmill">
          <div className='message icon-container'>
            <MdMessage className='social-icons'/>
          </div>
        </a>
      </UserLinksContainer>
    )
  }
}

const UserLinksContainer = styled.main`
  display: flex;
  justify-content: space-around;
  margin: 50px 0;
`

export default UserLinks
