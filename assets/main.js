document.addEventListener('DOMContentLoaded', () => {
    //Navigation interaction:
    let header = document.querySelector('.site-header');
    let sideNavs = document.querySelectorAll('.side-nav')
    window.onscroll = () => {
      if (window.pageYOffset > 50) { 
        header.classList.add('fade-out-header');
        sideNavs[0].classList.add('fade-in-left');
        sideNavs[1].classList.add('fade-in-right');
      } else if (window.pageYOffset < 50) {
        header.classList.remove('fade-out-header');
        sideNavs[0].classList.remove('fade-in-left');
        sideNavs[1].classList.remove('fade-in-right');
      } 
    }

    // ensure there's always an odd number of items
    // Because of the first one that spans two columns, it needs to be odd
    let streamItems = [...document.querySelectorAll('.Stream--GridItem')]
	if (streamItems.length % 2 === 0) {
		streamItems[streamItems.length - 3].style.display = 'none'
	}
    
  })


//    let bg = document.querySelector('.animate-bg')
//    setTimeout(() => {
//      bg.classList.add('black-bg')
//
//    }, 1000)


