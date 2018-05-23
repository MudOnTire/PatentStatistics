$(function () {
    $('#fullpage').fullpage();
    $('.page-arrow').on('click touch', function () {
        $.fn.fullpage.moveSectionDown();
    });
});