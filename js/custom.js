$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
 
        responsive:{
            0:{
                items:1,
                nav:false,
                dot:false
            },
            600:{
                items:2,
                nav:false,
                dot:false
            },
            1000:{
                items:4,
                nav:false,
                loop:false,
                dot:false
            }
        }
    });


    $('#search').keyup(function(){
        var sVal=$(this).val();

        $('.alphabets').val(sVal)
    });
});