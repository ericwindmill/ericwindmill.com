import React, { Component } from 'react'

class ContactForm extends Component {
  constructor(props) {
    super(props)


}

  resizeTextarea () {
    const observe = function(element, event, cb) {
      element.addEventListener(event, cb)
    }

    function init() {
     var text = document.querySelector('textarea')
     function resize() {
       text.style.height = 'auto'
       text.style.height = `${text.scrollHeight}px`
     }
     function delayedResize () {
       window.setTimeout(resize, 0)
     }
     observe(text, 'change', resize)
     observe(text, 'cut', delayedResize)
     observe(text, 'paste', delayedResize)
     observe(text, 'drop', delayedResize)
     observe(text, 'keydown', delayedResize)

      text.focus()
      text.select()
      text.resize()
    }
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

