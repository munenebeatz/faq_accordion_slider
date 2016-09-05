/**
 * 
 * Created by CORDELIA on 05-Sep-16.
 */

(function ($) {
    var action = "click",
        speed = 300;

    $('.q').on(action, function (e) {
        //get next element and slideToggle other answers
        $(this).next().slideToggle(speed).siblings('li.a').slideUp(speed);
        //get active nav arrow
        var img = $(this).children('img');
        //remove rotate class from all other img except the active
        $('img').not(img).removeClass('rotate');
        //toggle rotate class
        img.toggleClass('rotate');
    });
})(jQuery);