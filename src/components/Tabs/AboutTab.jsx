import React, {Component} from  'react'
import Link from 'gatsby-link'

class AboutTab extends Component {
  render() {
    return(
      <div>
     <div className='AboutTab--Container'>
       <img src='http://res.cloudinary.com/ericwindmill/image/upload/v1509812872/portfolio_site/Bitmap.png' />
       <p><em>Hi! I’m Eric Windmill. I’m a front-end developer, writer, UI designer and Sommelier. I I currently live in rainy and beautiful Portland, Oregon, USA. I help clients and comapnies design killer user-centered experiences on mobile and web and implement the code it needs to work.
         I also write about development and design and my opinions here, at Huffington Post, and CSS Tricks.</em></p>
     </div>
       <Link className='link-out' to='/about'>To Full Bio →</Link>
      </div>
    )
  }
}

export default AboutTab