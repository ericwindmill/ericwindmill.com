import React, { Component } from 'react'
import UserLinks from '../UserLinks/UserLinks'

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
    const submitRegion = this.props.isTab
      ? <div className='SubmitRegion'> <button type='submit'>Send Message</button> </div>
      : (<div className='SubmitRegion'>
          <button type='submit'>Send Message</button>
          <p>Or, elsewhere → </p>
          <UserLinks />
        </div>)


    return (


      <form netlify className='ContactForm'>
        <input type="hidden" name="form-name" value="contact" />
        <input type='text' name='email' placeholder='Your Email' />
        <textarea type='text' onChange={this.resizeTextarea} name='message' placeholder='Your Message' />
        {submitRegion}
      </form>
    )
  }
}

export default ContactForm

