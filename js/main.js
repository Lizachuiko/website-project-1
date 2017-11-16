$(document).ready(function() {
    
    $('.team-acco__item').click( 
        function(e) {
            e.preventDefault();
            $(this).toggleClass('team-acco__item__hidden');
        })
});


// acco query

// $(document).ready(function() {
    
//     $('.menu-acco__trigger').click( 
//         function(e) {
//             e.preventDefault();
//             const item = $(e.currentTarget);
//             $(this).toggleClass('menu-acco__trigger__hidden');
//         });
//         
// });

// $(document).ready(function() {
    
//     $('.menu-acco__trigger').click( 
//         function(e) {
//             e.preventDefault();
//             // $(this).toggleClass('menu-acco__trigger__hidden');
//             $('.menu-acco__content').slideToggle(1);
//         })
// });

  var hero = document.getElementById('hero')
  var hamburger = document.getElementById('hamburger')
  var cross = document.getElementById('cross')

  hamburger.addEventListener('click', function() {
      hero.classList.add('full-menu')
});

 cross.addEventListener('click', function() {
    hero.classList.remove('full-menu')
});


// mobile
var review = document.getElementById('review')
var reviewItem = document.getElementById('review-item')
var mobileCross = document.getElementById('mobile-cross')

reviewItem.addEventListener('click', function() {
    review.classList.add('review-mobile-hidden')
});

mobileCross.addEventListener('click', function(e) {
    e.preventDefault();
    review.classList.remove('review-mobile-hidden')
});


$(function() {
    $('.acco__trigger').on('click', e => { //menu-acco__trigger
        e.preventDefault()

        const $this = $(e.currentTarget); // на что жмем
        const container = $this.closest('.acco'); //то в чем ассордеон menu-acco
        const item = $this.closest('.acco__item'); //menu-acco__item
        const items = $('acco__item', container);//
        const content = $('.acco__content', item);//menu-acco__content
        const otherContent = $('.acco__content', container);//
        const textBlock = $('acco__content-text', item);//menu-acco__text
        const reqHeight = textBlock.outerHeight();//

        if (!item.hasClass('active')) {
            items.removeClass('active')
            item.addClass('active')

            otherContent.css({
                'height':0
            })

            content.css({
                'height': reqHeight
            })

        } else {
            item.removeClass('active');
            content.css({
                'height':0
            })
        }
        
    })
})