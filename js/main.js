$(document).ready(function() {
    
    $('.team-acco__trigger').click( 
        function(e) {
            e.preventDefault();

            const $this = $(e.currentTarget);
            const container = $this.closest('.team-acco');
            const item = $this.closest('.team-acco__item');
            const items = $('.team-acco__item', container);
            const content = $('.team-acco__content', item);
            const otherContent = $('.team-acco__content', container);
            // const textBlock = $('.acco__content-text', item);
            // const reqHeight = textBlock.outerHeight();
             
            if (!item.hasClass('.team-acco__item__hidden')){
                items.removeClass('.team-acco__item__hidden')
                item.addClass('.team-acco__item__hidden')

                otherContent.css ({
                    'height': 0
                })
             
                content.css ({
                    'height': 100
                })
                               
            } else {
                item.removeClass('.team-acco__item__hidden');
                content.css({
                  'height' : 0
                })
            }
        })
});

// $(this).toggleClass('team-acco__item__hidden'); //acco работал
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
    $('.menu-acco__trigger').on('click', e => { //menu-acco__trigger
        e.preventDefault()

        const $this = $(e.currentTarget); // на что жмем
        const container = $this.closest('.menu-acco'); //то в чем ассордеон menu-acco
        const item = $this.closest('.menu-acco__item'); //menu-acco__item
        const items = $('.menu-acco__item', container);//
        const content = $('.menu-acco__content', item);//menu-acco__content
        const otherContent = $('.menu-acco__content', container);//
        const textBlock = $('.menu-acco__text', item);//menu-acco__text
        const reqWidth = textBlock.outerWidth();//

        if (!item.hasClass('active')) {
            items.removeClass('active')
            item.addClass('active')

            otherContent.css({
                'width':0
            })

            content.css({
                'width': reqWidth
            })

        } else {
            item.removeClass('active');
            content.css({
                'width':0
            })
        }
        
    })
})