$(document).ready(function() {
    // мой 1-ый рабочий вариант
    // $('.main_btna').on('click', showModal);
    // $('.main_btn').on('click', showModal);
    // $('a[href="#sheldure"]').on('click', showModal);

    // $('.close').on('click', function() {        
    //     $('.modal').animate({
    //         opacity: 'toggle',
    //         height: 'toggle'
    //     }, 1000);
    //     $('.overlay').fadeToggle(1500);
    // });

    // function showModal() {
    //     $('.overlay').fadeToggle(1500);
    //     $('.modal').animate({
    //         opacity: 'toggle',
    //         height: 'toggle'
    //     }, 1000);
    // }

    // мой 2-ой и основной рабочий вариант 
    $('.main_btna, .main_btn, a[href="#sheldure"]').click(function() {
        $('.overlay').fadeIn(1000);
        $('.modal').slideDown(1000);
    });

    $('.close').click(function() {
        $('.modal').slideUp(1000);
        $('.overlay').fadeOut(1000);
    });
});