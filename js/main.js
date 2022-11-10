
$("#range").slider({
    animate: "slow",
    range: "min",
    value: 0,
    min: 0,
    max: 90,
    step: 30
});
$('.filter-aside__head').click(function () {
    $(this).toggleClass('active');
    $(this).next('.filter-aside__body').slideToggle();
})
$('.filter-text').click(function () {
    $('.filter-aside').addClass('active');
    $('.overlay').fadeIn();
})
$('.close-filter').click(function () {
    $('.filter-aside').removeClass('active');
    $('.overlay').fadeOut();
})