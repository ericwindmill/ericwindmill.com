import React, {Component} from  'react'
import TiDelete from 'react-icons/lib/ti/delete'
import AboutTab from './AboutTab'
import ContactTab from './ContactTab'
import StreamTab from './StreamTab'
import CoursesTab from './CoursesTab'

class TabDetail extends Component {
  constructor(props) {
    super(props)

    this.handleClose = this.handleClose.bind(this)
    this.postEdges = this.props.postEdges
    this.header = this.props.head

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
          return <StreamTab postEdges={this.postEdges} />
        case 'Courses':
          return <CoursesTab />
      default:
        return <p>Uh oh! I couldn't find what you were looking for!</p>
    }
  }

  getHeader() {
    switch(this.props.head) {
      case 'Stream':
        return 'Recent Posts'
      case 'Contact':
        return 'Say hello!'
      case 'About':
        return 'About Me'
      case 'Courses':
        return 'Developer Tools and Resources'
      default:
        return this.props.head;
    }
  }

  render() {
    return(
      <div>
        <header className='TabDetail--Header'>
          <h2>{this.getHeader()}</h2>
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