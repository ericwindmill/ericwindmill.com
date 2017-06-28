$(() => {

  $('.works-page ul li').hover(function () {
    $('.mouseover').css('display', 'none')
    let thisDescription = $(`#${this.id}-description`)
    thisDescription.stop().fadeTo('50', 1.0)

   })
})

