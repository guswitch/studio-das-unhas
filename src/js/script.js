$(document).ready(function () {

    //$('#cursosModal').modal({show:true})

    // Close Card
    $('#closeCard').on('click',function(){
        $(this).closest('#banner').hide();
     })

    // Icon Menu
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

        // Active Menu
        $('.navbar-nav .nav-link').click(function(){
            $('.navbar-nav .nav-link').removeClass('active');
            $(this).addClass('active');
        });

        
        
});



AOS.init();

