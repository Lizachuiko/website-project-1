$(document).ready(function() {

    $('.team-acco__item').click(
        function() {
            $(this).toggleClass('team-acco__item__hidden');
        })
});

// $(document).ready(function() {
//     $('.accordion').asAccordion({
//       namespace: 'accordion',
//       // accordion theme. WIP
//       skin: null,
  
//       // breakpoint for mobile devices. WIP
//       mobileBreakpoint: 768,
  
//       // initial index panel
//       initialIndex: 0,
  
//       // CSS3 easing effects.
//       easing: 'ease-in-out',
  
//       // animation speed.
//       speed: 500,
  
//       // vertical or horizontal
//       direction: 'horizontal',
  
//       // jQuery mouse events. click, mousehover, etc.
//       event: 'click',
  
//       // multiple instance
//       multiple: false
//     });
//   });


  var hero = document.getElementById('hero')
  var hamburger = document.getElementById('hamburger')
  var cross = document.getElementById('cross')

  hamburger.addEventListener('click', function() {
      hero.classList.add('full-menu')

  });

 cross.addEventListener('click', function() {
    hero.classList.remove('full-menu')

});
