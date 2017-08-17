



$(() => {
  //random background colors 
  let projects = document.querySelectorAll('.stream-item.project')
  let colors = ['#ED6D7D', '#4A90E2', '#F4EC87']
  projects.forEach(project => {
    project.style.background = colors[Math.floor(Math.random() * colors.length)]
  })


//   function debounce(func, wait = 20, immediate = true) {
//     var timeout;
//     return function() {
//       var context = this, args = arguments;
//       var later = function() {
//         timeout = null;
//         if (!immediate) func.apply(context, args);
//       };
//       var callNow = immediate && !timeout;
//       clearTimeout(timeout);
//       timeout = setTimeout(later, wait);
//       if (callNow) func.apply(context, args);
//     };
//   };





  // const sliderImages = document.querySelectorAll('.square')

  // let currentScrollPos = 0
  // let dir = 'up' 
  // function slide () {
  //   sliderImages.forEach(img => {
  //     const innerImg = img.querySelector('img')
  //     const startSlideAt = 125
  //     const stopSlideAt = 800

  //     function changeDir () {
  //       if (window.scrollY > currentScrollPos) {
  //         dir = 'up'
  //         currentScrollPos = window.scrollY
  //       } else if (window.scrollY < currentScrollPos) {
  //         dir = 'down'
  //         currentScrollPos = window.scrollY
  //       }
  //     }


  //     if (window.scrollY > startSlideAt &&
  //         window.scrollY < stopSlideAt) {
  //           changeDir()
  //           if (dir === 'up') {
  //             img.style.top = (img.offsetTop - (img.offsetTop / 40)) + 'px'
  //           } else {
  //             img.style.top = (img.offsetTop + (img.offsetTop / 40)) + 'px'
  //           }
  //     }
  //   })
  // }

  // function checkSlide () {
  //   sliderImages.forEach((sliderImage, idx) => {
  //     if (window.scrollY > 125 && window.scrollY < 850) {
  //       let newScrollY = setTimeout(checkScrollY(window.scrollY), 0)
  //       sliderImage.style.top = newScrollY - sliderImage.style.top
  //     }
  //   })
  // }

  // $(window).scroll(() => {
  //   if (window.scrollY > 125 && window.scrollY < 225) {
  //     console.log($(window).scrollTop()))
  //     $(".square").css({
  //       'top': (.style.top - 10) + "px"
  //     })
  //   }
  // })

  // window.onscroll = (e) => {
  //   let vertical_position = 0;
  //   if (window.pageYOffset) {//usual
  //     vertical_position = window.pageYOffset;
  //   }
  // }

  //   var your_div = document.querySelectorAll('.square');
  //   your_div.style.top = (vertical_position + 200) + 'px';
    // window.addEventListener('scroll', slide)
})