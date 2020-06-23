$(document).ready(function () {
    $('.collapse')
        .on('shown.bs.collapse', function () {
            $(this)
                .parent()
                .find(".fa-bars")
                .removeClass("fa-bars")
                .addClass("fa-times");
        })
        .on('hidden.bs.collapse', function () {
            $(this)
                .parent()
                .find(".fa-times")
                .removeClass("fa-times")
                .addClass("fa-bars");
        });
});

$('.navbar-nav .nav-link').click(function(){
    $('.navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
});

AOS.init();

