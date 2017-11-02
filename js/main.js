$(document).ready(function() {
    $('.team__ACCORDEON__member').click(
        function() {
            $(this).toggleClass( 'team__ACCORDEON__member-hidden' );
        })
})

$(document).ready(function() {
    $('.accordion').asAccordion({
      namespace: 'accordion',
      // accordion theme. WIP
      skin: null,
  
      // breakpoint for mobile devices. WIP
      mobileBreakpoint: 768,
  
      // initial index panel
      initialIndex: 0,
  
      // CSS3 easing effects.
      easing: 'ease-in-out',
  
      // animation speed.
      speed: 500,
  
      // vertical or horizontal
      direction: 'horizontal',
  
      // jQuery mouse events. click, mousehover, etc.
      event: 'click',
  
      // multiple instance
      multiple: false
    });
  });