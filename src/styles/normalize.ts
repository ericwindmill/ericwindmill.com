import styledNormalize from "styled-normalize"
import {injectGlobal} from "styled-components"
import {dimensions, fonts, colors} from "./variables"
import {onEvent, media} from "./mixins"

// tslint:disable-next-line:no-unused-expression
injectGlobal`
  ${styledNormalize}

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: ${dimensions.fontSize.regular}px !important;
    line-height: ${dimensions.lineHeight.regular} !important;
  }

  body {
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    font-family: ${fonts.sansSerif};
    color: ${colors.black};
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  // Set defaults for links
  a {
    text-decoration: none;
    color: ${colors.linkInk};
    ${onEvent`
      text-decoration: underline;
    `}
  }
  
   button {
      outline: none;
      border: none;
      background: transparent;
      font-family: ${fonts.sansSerif};
      cursor: pointer;
      
  }

  .ripple{
    overflow:hidden;
  }

  .ripple-effect{
    position: absolute;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background: white;
    animation: ripple-animation 2s;
  }

  img {
    max-width: 100%;
    object-fit: contain;
    position: relative;
  }

  // Figure elements
  figure {
    margin: 2rem 0;
  }

  figcaption {
    font-size: 80%;
  }

  table {
    width: 100%;
    margin-bottom: 1rem;
    border: 1px solid ${colors.ui.light};
    font-size: 85%;
    border-collapse: collapse;
  }

  td,
  th {
    padding: .25rem .5rem;
    border: 1px solid ${colors.ui.light};
  }

  th {
    text-align: left;
  }

  tbody {
    tr {
      &:nth-child(odd) {
        td {
          background-color: ${colors.ui.whisper};
        }
        tr {
          background-color: ${colors.ui.whisper};
        }
      }
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 1.414rem;
    margin-bottom: .5rem;
    color: ${colors.ink};
    font-weight: 300;
    line-height: ${dimensions.lineHeight.heading};
    text-rendering: optimizeLegibility;
  }

  h1 {
    margin-top: 0;
    font-size: ${dimensions.headingSizes.h1}rem;
  }

  h2 {
    font-size: ${dimensions.headingSizes.h2}rem;
    color: ${colors.inkSecondary};
  }

  h3 {
    font-size: ${dimensions.headingSizes.h3}rem;
  }

  h4, h5, h6 {
    font-size: ${dimensions.headingSizes.h4}rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  strong {
    color: $color-heading;
  }

  ul,
  ol,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin-bottom: .5rem;
  }

  hr {
    position: relative;
    margin: 1.5rem 0;
    border: 0;
    border-top: 1px solid ${colors.ui.light};
  }
  
 @keyframes fade-in {
	0% { opacity: 0; }
	20% { opacity: 0; }
	60% { opacity: 1; }
	100% { opacity: 1; }
}

 .fade-in {
    animation: fade-in .6s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  blockquote {
    margin: .8rem 0;
    padding: .5rem 1rem;
    border-left: .25rem solid ${colors.ui.light};
    color: ${colors.gray.calm};

    p {
      &:last-child {
        margin-bottom: 0;
      }
    }
    
    
    @keyframes ripple-animation {
    from {
      transform: scale(1);
      opacity: 0.4;
    }
    to {
      transform: scale(100);
      opacity: 0;
    }
}
    

    ${media.md`
      padding-right: 5rem;
      padding-left: 1.25rem;
    `}
  }
  
  ${media.sm`
    h1 {font-size: 26px;}
    h2 {font-size: 24px;}
    h3 {font-size: 20px;}
    h4,h5,h6 {font-size: 16px;}
    p {font-size: 14px;}
  `};
`
