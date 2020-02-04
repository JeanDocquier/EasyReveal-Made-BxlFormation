$(document).ready(function () {

    function easyReveal(objreveal) {
        //let object = $('.toreveal');
        let scroll = $(window).scrollTop() + $(window).height();
        let posObject = objreveal.offset().top;
        console.log(posObject);
        if ((posObject + 100) < scroll) {
            objreveal.addClass("revealed");
        }
    }
    $(document).scroll(function () {
        $(".toreveal").each(function () {
            easyReveal($(this))
        });
    });
});
