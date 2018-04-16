import React, {Component} from "react";
import styled from "styled-components";

class OptInFormSlim extends Component {
  render() {
    return (
      <OptInFormSlimContainer>
        <p>
          Sign up to get updates about posts, courses, and special treats every Monday Morning.
        </p>
        <div id="mc_embed_signup">
          <form
            action="https://ericwindmill.us14.list-manage.com/subscribe/post?u=ba4877332e56c5f5d88603650&amp;id=c03985072c"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll" className='form-container'>

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
                  name="b_ba4877332e56c5f5d88603650_c03985072c"
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
      </OptInFormSlimContainer>
    );
  }
}

const OptInFormSlimContainer = styled.div`  
  background: rgba(41, 99, 255, .5);
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  
    p {
      font-size: 1.4rem;
      margin-bottom: 0;
    }
  
  .input-text {
      background: #ffffff;
      border: none;
      border-radius: 5px;
      font-size: 1.6rem;
      padding: 5px 5px 5px;
      transition: all 0.3s ease;

      &::-webkit-input-placeholder {
        color: #434343;
      }
      &:focus {
        border-radius: 5px;
        outline: none;
      }
    }
    
    
    --link-blue: rgba(41, 99, 255, 1);
    --link-blue-o-1: rgba(41, 99, 255, 0.1);
    --link-blue-o-2: rgba(41, 99, 255, 0.2);
    --link-blue-o-3: rgba(41, 99, 255, 0.3);
    
    .button {
      margin-top: 50px / 2;
      text-align: center;
      background: rgba(41, 99, 255, 1);
      color: white;
      border-radius: 5px;
      border: none;
      font-size: 1.6rem;
      padding: 5px 10px 5px;
      transition: all 300ms ease;
      
      &:hover {
        box-shadow: 0 2px 4px 4px var(--link-blue-o-2),
        0 3px 6px 4px var(--link-blue-o-1), -2px 1px 1px 0 var(--link-blue-o-1);
        cursor: pointer;
      }
    }
  
  .form-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div {
      margin: 10px;
    }
  }
  
  @media screen and (max-width: 700px) {
      .form-container {
        flex-flow: column;
        > div {
          margin: 10px;
        }
      }
    }

  #mc_embed_signup {
    background: none;
    clear: left;
  }
    
  .HideMe {
    position: absolute;
    left: -5000px;
  }
`;

export default OptInFormSlim;
