$(document).ready(function () {

    $('.slider__controls-button').on('click', function (e) {
        e.preventDefault();

        var $this = $(this),
            container = $this.closest('.slider'),
            list = container.find('.slider__list'),
            items = container.find('.list__item'),
            activeSlide = list.find('.active'),
            nextSlide = activeSlide.next(),
            prevSlide = activeSlide.prev(),
            firstSlide = items.first(),
            lastSlide = items.last(),
            sliderOffset = container.offset().left,
            reqPos = 0;
console.log(items.first());
        console.log(firstSlide.offset().left);

        if ($(this).hasClass("slider__control-button_next")) {

            if(nextSlide.length){

                findReqPos(nextSlide)
                removeClass(nextSlide);
            }else{
                findReqPos(firstSlide)
                removeClass(firstSlide)
            }

        } else {
            if(prevSlide.length){

                findReqPos(prevSlide)
                removeClass(prevSlide);
            }else{
                findReqPos(lastSlide)
                removeClass(lastSlide)
            }
        }

        list.css('left', '-=' + reqPos + 'px');
        function removeClass(reqSlide){
            reqSlide.addClass('active').siblings().removeClass('active');
        }
        function findReqPos(slide){
            reqPos=slide.offset().left-sliderOffset;
        }
    })
})