import React, {Component} from 'react'

class OptInForm extends Component {
  render() {
    return (
      <div>
        <div id="home_mc_embed_signup">
          <form
            action="https://sommacademy.us14.list-manage.com/subscribe/post?u=ba4877332e56c5f5d88603650&amp;id=b1bfca0682"
            method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate"
            target="_blank"
            novalidate>
            <div id="home_mc_embed_signup_scroll">
              <div className='home_mc_form_fields'>
                <div className="mc-field-group">
                  <input type="email"
                         name="EMAIL"
                         placeholder="Your email address"
                         className="email input-text"
                         id="mce-EMAIL"
                  />
                </div>
                <div className="mc-field-group">
                  <input type="text"
                         name="FNAME"
                         placeholder="Your name"
                         className="input-text"
                         id="mce-FNAME"
                  />
                </div>
              </div>
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response"></div>
                <div className="response" id="mce-success-response"></div>
              </div>
              <div className='HideMe'>
                <input type="text"
                       name="b_ba4877332e56c5f5d88603650_b1bfca0682"
                       tabindex="-1"
                       value=""/>
              </div>

              <div className="clear">
                <input type="submit"
                       value="Get Updates"
                       name="subscribe"
                       id="mc-embedded-subscribe"
                       className="button"/>
              </div>

            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default OptInForm