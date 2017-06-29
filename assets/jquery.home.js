    //  <script>
    //    $groovie = $('#groovie-display')
    //    $onTheGrid = $('#on-the-grid-display')
    //    $bulletin = $('#bulletin-display')
    //     $('#groovie-li').mouseenter(() => {
    //       console.log('here')
    //       $onTheGrid.hide()
    //       $bulletin.hide()
    //       $groovie.show()
    //     })
    //     $('#on-the-grid-li').mouseenter(() => {
    //       console.log('there')
    //       $groovie.hide()
    //       $bulletin.hide()
    //       $onTheGrid.show()
    //     })
    //     $('#bulletin-li').mouseenter(() => {
    //       console.log('there')
    //       $groovie.hide()
    //       $onTheGrid.hide()
    //       $bulletin.show()
    //     })




    //   </script>

    //  <!--hover effect-->
    // <script>
    // $(function() {
    //     $('.project-list').sliphover({
    //         target: 'li',
    //         caption: 'data-caption'
    //     });
    // })
    // </script> 

    // <!--Shadow bob-->
    // <script>
    // const hero = document.querySelector(".title-bg");
    // const text = hero.querySelector("h1");


    // function shadow(e){
    //   const width = hero.offsetWidth;
    //   const height = hero.offsetHeight;
    //   const walk = 5; 
    //   let { offsetX: x, offsetY: y} = e;
      
    //   if (this !== e.target){
    //     x = x + e.target.offsetLeft;
    //     y = y + e.target.offsetTop;	
    //   }
    //   const xWalk = Math.round((x / width * walk) - (walk / 2));
    //   const yWalk = Math.round((x / height * walk)-(walk / 2));
      
    // text.style.textShadow = `
    // ${xWalk}px ${yWalk}px 1px rgba(10,10,10,0.3),
    // ${xWalk-1}px ${yWalk+1}px 1px rgba(10,10,10,0.3)
    // `;				
    // }

    // hero.addEventListener("mousemove", shadow);
    // </script>