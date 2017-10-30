import React, {Component} from  'react'
import Link from 'gatsby-link'

class AboutTab extends Component {
  render() {
    return(
     <div>
       <p><em>Hi! I’m Eric Windmill. I’m a designer, writer, speaker and coffee enthusiast currently residing in beautiful Zurich, Switzerland. I help companies create memorable experiences through user centered design.
         I’m currently design tinkering on Google Lens, previously Maps.
         I also write and speak about design.</em></p>
       <img src='http://res.cloudinary.com/ericwindmill/image/upload/c_scale,h_200/v1501186620/portfolio_site/bw_clinton_photography.png' />
       <Link className='link-out' to='/about'>To Full Bio →</Link>
     </div>
    )
  }
}

export default AboutTab