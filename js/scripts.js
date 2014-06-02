

$(document).foundation({

});

var itemWidth = $('.menu li:not(:first-child)').width();
$('.menu li:not(:first-child)').css({'height': itemWidth + 'px'});
$('.menu li:not(:first-child)').css({'line-height': itemWidth + 'px'});
