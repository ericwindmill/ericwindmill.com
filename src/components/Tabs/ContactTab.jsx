import React, {Component} from  'react'
import ContactForm from '../Forms/ContactForm'

class ContactTab extends Component {
  render() {
    return(
      <div>
        <h1>Say hello!</h1>
        <p>I can talk to anyone about anything. Whether you have a work inquiry or just wanna chat, let's talk.</p>
        <ContactForm isTab />
        <p className='subtext'>Currently available for small projects.</p>
      </div>
    )
  }
}

export default ContactTab