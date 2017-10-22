import React, {Component} from  'react'
import TiDelete from 'react-icons/lib/ti/delete'
import AboutTab from './AboutTab'
import ContactTab from './ContactTab'
import StreamTab from './StreamTab'

class TabDetail extends Component {
  constructor(props) {
    super(props)

    this.handleClose = this.handleClose.bind(this)
  }

  handleClose(e) {
    while (e.target.tagName !== 'DIV') {
      e.target = e.target.parentNode
    }
    e.preventDefault()
    const tabName = e.target.classList[0].split('--')[1]
    const tab = document.querySelector(`.HomeTabs--${tabName}`)
    tab.classList.remove('reveal-tab')

  }

  selectDetail() {
    switch (this.props.head) {
        case 'About':
          return <AboutTab />
        case 'Contact':
          return <ContactTab />
        case 'Stream':
          return <StreamTab />
      default:
        return <h1>Default</h1>
    }
  }

  render() {
    return(
      <div>
        <header className='TabDetail--Header'>
          <h2>{this.props.head}</h2>
          <div onClick={this.handleClose} className={`close-tab--${this.props.head}`} >
            <TiDelete className='closeIcon' onClick={this.handleClose} />
          </div>
        </header>
        {this.selectDetail()}
      </div>
    )
  }
}

export default TabDetail