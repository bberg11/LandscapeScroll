$(document).ready(function () {
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    if (windowWidth>windowHeight && windowWidth<=480) {
        $(".content .main-content .products .product img").css({'height':(($(window).height())-60)+'px'});
    } else {
        $(".content .main-content .products .product img").css({'height':'auto'});
    }
});
$(window).resize(function() {
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    if (windowWidth>windowHeight && windowWidth<=480) {
        $(".content .main-content .products .product img").css({'height':(($(window).height())-60)+'px'});
    } else {
        $(".content .main-content .products .product img").css({'height':'auto'});
    }
});