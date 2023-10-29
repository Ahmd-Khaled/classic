$(function(){
    "use strict";
    // Adjust Header Height

    var myHeader = $(".header"),
        mySlider = $(".bxslider");

    myHeader.height($(window).height());

    $(window).resize(function(){
        myHeader.height($(window).height());
        // Adjust Bxslider list item center
        mySlider.each(function(){
            $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height())/2);
        });
    });

    // Links Add Active class
    $(".links li a").click(function(){
        $(this).parent().addClass("active").siblings().removeClass("active");
    });

    // Adjust Bxslider list item center
    mySlider.each(function(){
        $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height())/2 - 42.5);  // 42.5px error in height
    });
    // console.log("window-height= " + $(window).height());
    // console.log("bxslider li= " + $(".bxslider li").height());


    // Trigger the Bx Slider
    mySlider.bxSlider({
        pager: false
    });


    // Smooth Scroll to Div
    $(".links li a").click(function(){
        $("html, body").animate({
            // scrollTop: $("#services").offset().top
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
        // console.log($(this).data('value'));
    });

    // Our Auto Slider Code
    // Self invoke function
    (function autoSlider(){
        $(".slider .active").each(function(){
            // ! == not()
            if(!$(this).is(':last-child')){
                $(this).delay(3000).fadeOut(1000, function(){
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider()
                });
            } else{
                $(this).delay(3000).fadeOut(1000, function(){
                    $(this).removeClass('active');
                    $('.slider div').eq(0).addClass('active').fadeIn();
                    autoSlider()
                });
            };
        });
    }());

    // Trigger MixitUp plugin
    $("#Container").mixItUp();

    // Adjust shuffle Links
    $(".shuffle li").click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
    });

    // Trigger NiceScroll
    $('html').niceScroll({
        cursorcolor: '#1ABC9C',
        cursorwidth: '7px',
        cursorborder: '1px solid #1ABC9C',
        cursorborderradius: '6px'
    });

});