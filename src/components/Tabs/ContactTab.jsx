import React, {Component} from  'react'
import Link from 'gatsby-link'
import ContactForm from '../Forms/ContactForm'

class ContactTab extends Component {
  render() {
    return(
      <div>
        <p>Whether you have a work inquiry or just wanna chat, let's talk.</p>
        <ContactForm isTab />
        <p className='subtext'>Currently available for small projects.</p>
        <Link className='link-out' to='/contact'>Contact Page →</Link>
      </div>
    )
  }
}

export default ContactTab