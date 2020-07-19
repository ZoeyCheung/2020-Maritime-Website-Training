$(function () {
    $(".product-gallery-thumbs__item").click(function () {
        console.log($(this).attr("data-large-src"));
        $(".product-gallery-thumbs__item").removeClass("active");
        $(this).addClass("active");
        $("#js-product-big img").attr("src",$(this).attr("data-large-src"));
    });
}); 