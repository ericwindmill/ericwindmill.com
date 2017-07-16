$(() => {
  let arrow = document.querySelector('.directions')
  let content = document.querySelector('.Home--Content')
  let title = document.querySelector('.Home--Title')
  let arrowView

  const showArrow = () => {
    let i = 0
    let reverse = false
    arrowView = setInterval(() => {
      arrow.style.opacity = (i / 10)
      if (i === 7 && !reverse) {
        reverse = true
      } else if (i === 0 && reverse) {
        reverse = false
      }
      if (!reverse) {
        i++
      } else {
        i--
      }
    }, 100)
  }

  let flag = false
  content.addEventListener('scroll', () => {
    clearInterval(arrowView)
    arrow.style.opacity = 0
    flag = true
  })

  setTimeout(() => {
    if (flag) {
      return
    } else {
      showArrow()
    }
  }, 2500)
})

