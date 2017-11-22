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
             
            if (!item.hasClass('active')){
                items.removeClass('active')
                item.addClass('active')

                otherContent.css ({
                    'height': 0
                })
             
                content.css ({
                    'height': 150
                })
                               
            } else {
                item.removeClass('active');
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
        const reqWidth = Math.min(textBlock.outerHeight(), 500)//

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
});

// workable
// $(function () {

//     $('.slider__btn-next').on('click', function(e){
//         e.preventDefault();

//         var $this = $(this),
//              container = $this.closest('.slider'),
//              items = container.find('.burgers__slider'),
//              activeSlide = items.filter('.active'),
//              reqItem = activeSlide.next(),
//              reqIndex = reqItem.index(),
//              list = container.find('.slider__list'),
//              duration = 500;

//         if (reqItem.length) {

//             list.animate({
//                 'left' : -reqIndex * 1000 + 'px' 
//             }, duration, function () {
//                 activeSlide.removeClass('active');
//                 reqItem.addClass('active');
    
//             });
//         } 
//     });

//     $('.slider__btn-prev').on('click', function(e){
//         e.preventDefault();

//         var $this = $(this),
//         container = $this.closest('.slider'),
//         items = container.find('.burgers__slider'),
//         activeSlide = items.filter('.active'),
//         reqItem = activeSlide.prev(),
//         reqIndex = reqItem.index(),
//         list = container.find('.slider__list'),
//         duration = 500;


//        if (reqItem.length) {

//            list.animate({
//                'left' : -reqIndex * 1000 + 'px' 
//            }, duration, function () {
//                activeSlide.removeClass('active');
//                reqItem.addClass('active');
   
//            });
//        } 
//     });
// });

$(function () {

    var moveSlide = function (container, slideNum) {
        var 
        items = container.find('.burgers__slider'),
        activeSlide = items.filter('.active'),
        reqItem = items.eq(slideNum),
        reqIndex = reqItem.index(),
        list = container.find('.slider__list'),
        duration = 500;

        if (reqItem.length) {

            list.animate({
                'left' : -reqIndex * 1000 + 'px' 
            }, duration, function () {
                activeSlide.removeClass('active');
                reqItem.addClass('active');

            });
        } 
    }

    $('.slider__btn').on('click', function(e){
        e.preventDefault();

        const $this = $(this),
            container = $this.closest('.slider'),
            items = container.find('.burgers__slider'),
            activeItem = items.filter('.active'),
            nextItem = activeItem.next(),
            prevItem = activeItem.prev();

        if ($this.hasClass('slider__btn-next')) {

            if(nextItem.length) {
                moveSlide(container,nextItem.index());
            } else {
                moveSlide(container, items.first().index());
            }

            

        } else {

            if(prevItem.length) {
                moveSlide(container,prevItem.index());
            } else {
                moveSlide(container, items.last().index());
            }
           

        }
        
    
    });

});

    const display = $('.maincontent')
    const sections = $('.section')

    let inScroll = false;

    const menuActiveclass = sectionEq => {
        $('.fixed-menu__item').eq(sectionEq).addClass('active')
            .siblings().removeClass('active');
    }


 const PerformTransition = sectionEq => {
    

    if (inScroll) return  
        inScroll = true
        
        const position = (sectionEq * -100) + '%';

        display.css({
            'transform' : `translateY(${position})`,
            '-webkit-transform' :  `translateY(${position})`
        })
        sections.eq(sectionEq).addClass('active')
            .siblings().removeClass('active');


            
        setTimeout(() => {
            inScroll = false;
            menuActiveclass(sectionEq);
        }, 1300);
    
 } 

 const defineSec = sections => {
    const activeSec = sections.filter('.active')
    return {
        activeSec: activeSec,
        nextSec: activeSec.next(),
        prevSec: activeSec.prev()
    }
 }

    $('.wrapper').on('wheel', e => {
        const deltaY = e.originalEvent.deltaY 
        const section = defineSec(sections)
        // const activeSec = sections.filter('.active')
        // const nextSec = activeSec.next()
        // const prevSec = activeSec.prev()

        if (deltaY > 0 && section.nextSec.length ) { //down
            PerformTransition(section.nextSec.index())
        } 

        if (deltaY < 0 && section.prevSec.length ) { //up
            PerformTransition(section.prevSec.index())
        }
    })

$(document).on('keydown', e => {
    const section = defineSec(sections);

    if(inScroll) return

    switch (e.keyCode) {
        case 40: // вверх
          if (!section.nextSec.length) return;
          PerformTransition(section.nextSec.index());
          break;
    
        case 38: //вниз
          if (!section.prevSec.length) return;
          PerformTransition(section.prevSec.index());
          break;
      }
})