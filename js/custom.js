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

    



    $('.prod-thumb-carousel').owlCarousel({
        loop:true,
        margin:40,
        responsiveClass:true,
 
        responsive:{
            0:{
                items:1,
                nav:false,
                dots:true,
                autoplay:true,
                autoplayTimeout:3000


            },
            600:{
                items:1,
                nav:false,
                dots:true
            },
            1000:{
                items:1,
                nav:false,
                loop:false,
                dots:true
            }
        }
    });




    $('.like').click(function(){

        $(this).toggleClass('active')
    });



    $('.list-grid-wrap a').click(function(){

        var targetName=$(this).attr('data-name');
        $('.list-grid-wrap a').removeClass('active');  
        $(this).addClass('active');

        if($('.products-wrap').hasClass('gridview')){

            $('.products-wrap').removeClass('gridview');
            $('.products-wrap').addClass(targetName);
        }else{
            $('.products-wrap').removeClass('listview');
            $('.products-wrap').addClass(targetName);
        }

       
    });








    var incrementPlus;
    var incrementMinus;
    
    var buttonPlus  = $(".cart-qty-plus");
    var buttonMinus = $(".cart-qty-minus");
    
    var incrementPlus = buttonPlus.click(function() {
        var $n = $(this)
            .parent(".qty-num-wrap")            
            .find(".qty");
        $n.val(Number($n.val())+1 );
    });
    
    var incrementMinus = buttonMinus.click(function() {
            var $n = $(this)
            .parent(".qty-num-wrap")  
             
            .find(".qty");
        var amount = Number($n.val());
        if (amount > 0) {
            $n.val(amount-1);
        }
    });




    $('#prodDescTab').tabCollapse();



});