import React, { Component } from 'react'

class ContactForm extends Component {
  constructor(props) {
    super(props)

    this.resizeTextarea = this.resizeTextarea.bind(this)
}

  resizeTextarea (e) {
    const textArea = e.target
    textArea.style.height = 'auto';
    textArea.style.height = `${textArea.scrollHeight}px`
  }

  render() {
    return (
      <form className='ContactForm'>
        <input type="hidden" name="form-name" value="contact" />
        <input type='text' name='email' placeholder='Your Email' />
        <textarea type='text' onChange={this.resizeTextarea} name='message' placeholder='Your Message' />
        <button type='submit'>Send Message</button>
      </form>
    )
  }
}

export default ContactForm

