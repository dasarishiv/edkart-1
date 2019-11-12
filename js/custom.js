$(document).ready(function(){
   
 $('.products-list').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
 
        responsive:{
            0:{
                items:2,
                nav:false,
                dots:false,
                autoplay:true,
                autoplayTimeout:3000


            },
            600:{
                items:2,
                nav:false,
                dots:false
            },
            1000:{
                items:4,
                nav:false,
                loop:false,
                dots:true
            }
        }
    });

    $('.school-list-carousel').owlCarousel({
        loop:true,
        margin:40,
        responsiveClass:true,
 
        responsive:{
            0:{
                items:1,
                nav:false,
                dots:false,
                autoplay:true,
                autoplayTimeout:3000


            },
            600:{
                items:2,
                nav:false,
                dots:false
            },
            1000:{
                items:2,
                nav:false,
                loop:false,
                dots:true
            }
        }
    });








    $('.like').click(function(){

        $(this).toggleClass('active')
    })
});