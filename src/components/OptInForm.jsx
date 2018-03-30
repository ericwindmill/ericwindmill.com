import React, {Component} from "react";
import styled from "styled-components";

class OptInForm extends Component {
  render() {
    return (
      <OptInFormContainer>
        <div id="mc_embed_signup">
          <form
            action="https://sommacademy.us14.list-manage.com/subscribe/post?u=ba4877332e56c5f5d88603650&amp;id=b1bfca0682"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <div className="mc-field-group">
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="Your email address"
                  className="email input-text"
                  id="mce-EMAIL"
                />
              </div>
              <div className="mc-field-group">
                <input
                  type="text"
                  name="FNAME"
                  placeholder="Your name."
                  className="input-text"
                  id="mce-FNAME"
                />
              </div>
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response"/>
                <div className="response" id="mce-success-response"/>
              </div>
              <div className="HideMe">
                <input
                  type="text"
                  name="b_ba4877332e56c5f5d88603650_b1bfca0682"
                  tabindex="-1"
                  value=""
                />
              </div>
              <div className="clear">
                <input
                  type="submit"
                  value="Get Updates"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                />
              </div>
            </div>
          </form>
        </div>
      </OptInFormContainer>
    );
  }
}

const OptInFormContainer = styled.div`
.input-text {
      background: none;
      border: none;
      border-bottom: 2px solid #434343;
      font-size: 2rem;
      width: 100%;
      margin: 5px 0 10px;
      padding: 15px 5px 15px;
      transition: all 0.3s ease;

      &::-webkit-input-placeholder {
        color: #434343;
      }
      &:focus {
        border-radius: 5px;
        outline: none;
        background: rgba(41, 99, 255, .2);
      }
    }
    
    
    --link-blue: rgba(41, 99, 255, 1);
    --link-blue-o-1: rgba(41, 99, 255, 0.1);
    --link-blue-o-2: rgba(41, 99, 255, 0.2);
    --link-blue-o-3: rgba(41, 99, 255, 0.3);
    
    .button {
      width: 100%;
      height: 65px;
      margin-top: 50px / 2;
      text-align: center;
      background: rgba(41, 99, 255, 1);
      color: white;
      border-radius: 5px;
      font-size: 2rem;
      transition: all 300ms ease;
      box-shadow: 0 2px 2px 0 var(--link-blue-o-2),
        0 3px 1px 2px var(--link-blue-o-1), -2px 1px 1px 0 var(--link-blue-o-1);
      
      &:hover {
        box-shadow: 0 2px 4px 4px var(--link-blue-o-2),
        0 3px 6px 4px var(--link-blue-o-1), -2px 1px 1px 0 var(--link-blue-o-1);
        cursor: pointer;
      }
    }

  #mc_embed_signup {
    background: #ffffff;
    clear: left;
  }
    
  .HideMe {
    position: absolute;
    left: -5000px;
  }
`;

export default OptInForm;
