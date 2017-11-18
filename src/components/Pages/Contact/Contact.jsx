import React, { Component } from 'react'
import ContactForm from '../../Forms/ContactForm'

class ContactPage extends Component {
  render () {
    return (
      <main>
        <section className='Hero'>
          <h1>Let's Get In Touch</h1>
        </section>
        <section className='Contact--Body'>
          <div className='Contact--Content'>
          <p>Feel free to reach out if you wanna chat about work, or just say 'hi'!</p>
          <p>Fill out the form below, email me at <a href='mailto:eric@ericwindmill.com'>eric@ericwindmill.com</a>, or give me a call at <b>502-608-2287</b>.</p>
          <div className='Contact--FormContainer'>
          <ContactForm isTab />
          </div>
          </div>
        </section>

      </main>
    )
  }
}

export default ContactPage