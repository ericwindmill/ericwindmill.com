$(() => {

  $('.works-page ul li').hover(function () {
    let thisDescription = $(`#${this.id}-description`)
    thisDescription.stop().fadeTo('50', 1.0)
  }, function () {
    let thisDescription = $(`#${this.id}-description`)
    thisDescription.stop().fadeTo('50', 0.0)
    $('.mouseover').css('display', 'none')
  })
})

