$(document).ready(function () {

    $('#bar1').barfiller();
    $('#bar2').barfiller();
    $('#bar3').barfiller({
        barColor: '#fc6'
    });
    $('#bar4').barfiller({
        barColor: '#900',
        duration: 3000
    });

});

//barfiller js end=======================================

//customer slider js============start=================
$('.customer_slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,

});
//customer slider js============end=================


//supporters slider js============start=================
$('.supporters_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 500,
});

//supporters slider js============end=================
