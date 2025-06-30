
$(function () {

    //header style
    $(document).scroll(function (e) {
        $(window).scrollTop() > 50 ? $('header').addClass('hader-fixed') : $('header').removeClass('hader-fixed');
    });

    //для якорей
    jQuery(function ($) {
        $('a[href*="#"]').on('click.smoothscroll', function (e) {
            var hash = this.hash, _hash = hash.replace(/#/, ''), theHref = $(this).attr('href').replace(/#.*/, '');
            if (theHref && location.href.replace(/#.*/, '') != theHref) return;
            var $target = _hash === '' ? $('body') : $(hash + ', a[name="' + _hash + '"]').first();
            if (!$target.length) return;
            e.preventDefault();
            $('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 800, 'swing', function () {
                window.location.hash = hash;
            });
        });
    });


    $('.questions-sec__question-header').on('click', function () {
        $(this).closest('.questions-sec__question').toggleClass('questions-sec__question--activ')
        $(this).closest('.questions-sec__question').find('.questions-sec__question-body').slideToggle(200)
        $(this).closest('.questions-sec__question').find('.questions-sec__question-body-text').toggleClass('questions-sec__question-body-text--activ')
    })

});


window.addEventListener('load', function () {

    let preloaderConteiner = document.querySelector('.preloader-conteiner');
    let app = document.querySelector('.app')
    setTimeout(() => {
        preloaderConteiner.classList.add('hidePreloader')
        app.style.display = "block"

    }, 200)

    //slider for front sec (pages and page builder)
    let sliderElement = document.querySelectorAll('.infinite-logo-slider--main .swiper-container')

    if (sliderElement && sliderElement.length > 0) {
        let swiperOptions = {
            loop: true,
            spaceBetween: 140,
            autoplay: {
                delay: 1,
                disableOnInteraction: false,
                reverseDirection: false,
            },
            slidesPerView: 'auto',
            speed: 7000,
            grabCursor: true,
            mousewheelControl: false,
            keyboardControl: false,
            allowTouchMove: false,
        };

        let swiper = new Swiper(".infinite-logo-slider--main .swiper-container", swiperOptions);
    }



    //slider for front sec (pages and page builder)
    let sliderElement2 = document.querySelectorAll('.infinite-logo-slider--reverce .swiper-container')

    if (sliderElement2 && sliderElement2.length > 0) {
        let swiperOptions = {
            loop: true,
            spaceBetween: 140,
            autoplay: {
                delay: 1,
                disableOnInteraction: false,
                reverseDirection: true,

            },
            slidesPerView: 'auto',
            speed: 7000,
            grabCursor: true,
            mousewheelControl: false,
            keyboardControl: false,
            allowTouchMove: false,
        };

        let swiper2 = new Swiper(".infinite-logo-slider--reverce .swiper-container", swiperOptions);
    }



    //anim scroll sec 2

    // Create a media condition that targets viewports at least 768px wide
    const mediaQuery = window.matchMedia('(min-width: 1200px)')
    // Check if the media query is true
    if (mediaQuery.matches) {
        let containerSec = document.querySelector('.why-sec')
        let imgElement = document.querySelector('.why-sec-v2__video-wrapper video')
        let cardsRow = document.querySelector('.why-sec__card-row')

        let containerSecHeight = containerSec.clientHeight
        let fronStartBrowserToSecRange = containerSec.offsetTop

        let currentScrollValue = window.scrollY

        console.log('windows height', window.innerHeight)
        // console.log('ff', +fronStartBrowserToSecRange - ((window.innerHeight - containerSecHeight) + containerSecHeight))

        let valueScrollForStartAnim = +fronStartBrowserToSecRange - ((window.innerHeight - containerSecHeight) + 500)
        let valueScrollForEndAnim = +fronStartBrowserToSecRange - 200

        let procentProgressScroll = 0

        console.log('scroll value', currentScrollValue)
        console.log('containerSecHeight', containerSecHeight)
        console.log('fronStartBrowserToSecRange', fronStartBrowserToSecRange)

        console.log('valueScrollForStartAnim', valueScrollForStartAnim)

        window.addEventListener('scroll', function () {
            currentScrollValue = window.scrollY
            console.log('scroll value', currentScrollValue)

            if (currentScrollValue < valueScrollForStartAnim) {
                procentProgressScroll = 0
            }

            if (currentScrollValue >= valueScrollForStartAnim && currentScrollValue < valueScrollForEndAnim) {
                let currentValueScrolIncide = currentScrollValue - valueScrollForStartAnim
                let fullRangeValue = valueScrollForEndAnim - valueScrollForStartAnim
                let currentProcent = (currentValueScrolIncide / fullRangeValue)
                console.log('start anim', currentProcent, currentValueScrolIncide)
                procentProgressScroll = currentProcent
            }

            if (currentScrollValue > valueScrollForEndAnim) {
                procentProgressScroll = 1
            }

            // cardsRow.style.marginLeft = - ((970 * procentProgressScroll)) + 'px'

            imgElement.style.width = 100 - ((procentProgressScroll * 100) / 3) + '%'
            imgElement.style.height = 100 - ((procentProgressScroll * 100) / 3) + '%'

        })
    }




}, false);





function animateController() {
    new Skroll({
        mobile: true,
    })
        .add(".our-services-sec__advantage", {
            delay: 100,
            duration: 1000,
            animation: "fadeInUp"
        })

        .add(".our-services-sec__title", {
            delay: 100,
            duration: 1000,
            animation: "fadeInUp"
        })

        .add(".our-services-sec__subtitle", {
            delay: 100,
            duration: 1000,
            animation: "fadeInUp"
        })

        .add(".our-services-sec__teg", {
            delay: 100,
            duration: 1000,
            animation: "fadeInUp"
        })

        .add(".our-services-sec__img-wrapper", {
            delay: 100,
            duration: 1000,
            animation: "fadeInUp"
        })


        .add(".our-partners-sec__teg", {
            delay: 100,
            duration: 1000,
            animation: "fadeInUp"
        })

        .add(".our-partners-sec__title", {
            delay: 100,
            duration: 1000,
            animation: "fadeInUp"
        })

        .add(".our-partners-sec__subtitle", {
            delay: 100,
            duration: 1000,
            animation: "fadeInUp"
        })

        // .add(".infinite-logo-slider--main", {
        //     delay: 100,
        //     duration: 1000,
        //     animation: "fadeInRight"
        // })

        // .add(".infinite-logo-slider--reverce", {
        //     delay: 100,
        //     duration: 2000,
        //     animation: "fadeInLeft"
        // })

        .add(".our-partners-sec__down-title", {
            delay: 100,
            duration: 1000,
            animation: "fadeInUp"
        })

        .add(".our-partners-sec__down-btn-row", {
            delay: 100,
            duration: 1000,
            animation: "fadeInUp"
        })

        .add(".team-sec__teg-wrapper", {
            delay: 100,
            duration: 1000,
            animation: "fadeInUp"
        })

        .add(".team-sec__title", {
            delay: 100,
            duration: 1000,
            animation: "fadeInUp"
        })

        .add(".team-sec__team-element", {
            delay: 100,
            duration: 1000,
            animation: "fadeInUp"
        })


        .add(".questions-sec__text-wrapper", {
            delay: 100,
            duration: 1000,
            animation: "fadeInUp"
        })
        .add(".questions-sec__question ", {
            delay: 100,
            duration: 500,
            animation: "fadeInUp"
        })

        .add(".consultation-sec__teg ", {
            delay: 100,
            duration: 1000,
            animation: "fadeInUp"
        })

        .add(".consultation-sec__title ", {
            delay: 100,
            duration: 1000,
            animation: "fadeInUp"
        })

        .add(".consultation-sec__text ", {
            delay: 100,
            duration: 1000,
            animation: "fadeInUp"
        })

        .add(".consultation-sec__get-title ", {
            delay: 100,
            duration: 1000,
            animation: "fadeInUp"
        })

        .add(".consultation-sec__get-element ", {
            delay: 100,
            duration: 1000,
            animation: "fadeInUp"
        })

        .add(".consultation-sec__down-text ", {
            delay: 100,
            duration: 1000,
            animation: "fadeInUp"
        })

        .add(".consultation-sec__btn-wrapper ", {
            delay: 100,
            duration: 1000,
            animation: "fadeInUp"
        })
        .add(".ready-sec__text ", {
            delay: 100,
            duration: 1000,
            animation: "fadeInUp"
        })

        .add(".hero-sec__bg-line ", {
            delay: 70,
            duration: 700,
            animation: "fadeInLeft"
        })

        .add(".why-sec__teg ", {
            delay: 100,
            duration: 700,
            animation: "fadeInUp"
        })

        .add(".why-sec__title ", {
            delay: 100,
            duration: 700,
            animation: "fadeInUp"
        })

        .add(".why-sec__subtitle ", {
            delay: 100,
            duration: 700,
            animation: "fadeInUp"
        })

        .add(".why-sec__text ", {
            delay: 100,
            duration: 700,
            animation: "fadeInUp"
        })

        .add(".hero-sec__text", {
            delay: 500,
            duration: 700,
            animation: "fadeInUp"
        })

        .add(".hero-sec__subtitle ", {
            delay: 600,
            duration: 700,
            animation: "fadeInUp"
        })

        .add(".hero-sec__btn-wrapper ", {
            delay: 700,
            duration: 700,
            animation: "fadeInUp"
        })

        .add(".form-sec form", {
            delay: 100,
            duration: 700,
            animation: "fadeInUp"
        })

        // .add(".why-sec-v2__video-wrapper", {
        //     delay: 100,
        //     duration: 1000,
        //     animation: "fadeInUp"
        // })

        .add(".why-sec__card", {
            delay: 100,
            duration: 700,
            animation: "fadeInUp"
        })



        .add(".js1", {
            delay: 1000,
            duration: 1000,
            animation: "rotate90"
        })

        .add(".js2", {
            delay: 1200,
            duration: 1000,
            animation: "flipInY"
        })

        .add(".js3", {
            delay: 1400,
            duration: 1000,
            animation: "zoomIn"
        })






        .init()
        .recalcPosition()
}

animateController()