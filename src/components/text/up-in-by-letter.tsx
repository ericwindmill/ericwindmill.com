import * as React from 'react'
import styled from 'styled-components'

interface UpInByLetterProps {
  text: string;
}

const UpInByLetterContainer = styled.span`
    overflow: hidden;
    display: block;
    .word-container {
        display: block;
     }
      
      
      -webkit-animation: slide-in-up 1.4s cubic-bezier(0.250, 0.460, 0.450, 0.940);
              animation: slide-in-up 1.4s cubic-bezier(0.250, 0.460, 0.450, 0.940);
    
     @-webkit-keyframes slide-in-up {
      0% {
        -webkit-transform: translateY(110px);
                transform: translateY(110px);
      }
      75% {
        -webkit-transform: translateY(110px);
                transform: translateY(110px);
      }
      100% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
      }
    }
    @keyframes slide-in-up {
      0% {
        -webkit-transform: translateY(110px);
                transform: translateY(110px);
      }
      75% {
        -webkit-transform: translateY(110px);
                transform: translateY(110px);
      }
      100% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
      }
    }
`

class UpInByLetter extends React.Component<UpInByLetterProps> {

  public render(): React.ReactNode {
    return <UpInByLetterContainer>
          <span className={`word-container slide-in-up`}>
            {this.props.text}
          </span>
    </UpInByLetterContainer>
  }
}

export default UpInByLetter
