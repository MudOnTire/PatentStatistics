$(function () {
    $('#fullpage').fullpage();
    $('.page-arrow').on('click touch', function () {
        $.fn.fullpage.moveSectionDown();
    });
    $('#collegeFrame').on('load',function(){
        this.height=this.contentWindow.document.body.scrollHeight;
    });
    $('.jump-link').on('click', function(){
        $.fn.fullpage.moveTo(1);
    });
});
 
function pageUp(){
    $.fn.fullpage.moveSectionUp();    
}