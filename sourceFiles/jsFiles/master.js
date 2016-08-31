$(document).ready(function() {
    $(".componentTitle").on("click", function(){

        $(this).toggleClass("smalltitle");
        $(this).siblings(".componentContent").slideToggle(500);
    });


    $(".titlebar > h1").on("mouseenter", function(){
        $(this).css("cursor", "pointer");
    });
    $(".titlebar > h1").on("click", function(){
        $(this).parent().toggleClass("titlesquish");
        $(".contentwrapper").slideToggle();


    });
});
