import React, { Component } from "react";
import { FaGithubAlt, FaTwitter, FaInstagram } from 'react-icons/lib/fa'
import MdMessage from  'react-icons/lib/md/message'



class UserLinks extends Component {

  render() {
    return (
      <div className="user-links">
        <div className='github icon-container'>
          <a  href='https://github.com/ericwindmill'>
            <FaGithubAlt className='social-icons'/>
          </a>
        </div>
        <div className='twitter icon-container'>
          <a href='https://twitter.com/ericwindmill?lang=en'>
            <FaTwitter className='social-icons'/>
          </a>
        </div>
        <div className='instagram icon-container'>
          <a href="https://www.instagram.com/ericwindmill/">
            <FaInstagram className='social-icons'/>
          </a>
        </div>
        <div className='message icon-container'>
          <a href="https://www.messenger.com/t/eric.windmill">
            <MdMessage className='social-icons'/>
          </a>
        </div>
      </div>
    );
  }
}

export default UserLinks;
