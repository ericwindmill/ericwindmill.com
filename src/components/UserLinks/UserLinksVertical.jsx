import React, {Component} from 'react'
import styled from 'styled-components'
import {FaGithubAlt, FaTwitter, FaInstagram} from 'react-icons/lib/fa'
import MdMessage from 'react-icons/lib/md/message'

export default class UserLinks extends Component {

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

const UserLinksContainer = styled.div`
display: flex;
flex-flow: column;
a:last-child > div {
  margin-right: 0;
}

.icon-container {
	border-radius: 5px;
	width: 33px;
	height: 33px;
	margin-right: 50px / 3;
	padding: 5px;
	display: flex;

	.social-icons {
		color: white;
		height: 100%;
		width: 100%;
	}
}

.github {
	background: purple;
}

.twitter {
	background:deepskyblue;
}

.instagram {
	background: peachpuff;
}

.message {
	background: dodgerblue;
}
`
