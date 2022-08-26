$(document).ready(function(){
    const slides = $("#js-slide").find("img");
    const slideLength = slides.length;

    let now = 0;
    let next = 1;

    const slidesshow = () => {
        slides.eq(now % slideLength).fadeOut().removeClass("zoom");
        slides.eq(next % slideLength).fadeIn().addClass("zoom");
        now++;
        next++;
    };

    const show = 3000;
    // setInterval(slidesshow, show);
});