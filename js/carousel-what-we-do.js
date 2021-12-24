(function(){

    const slides = [
        `<div><article class="what_we_do_content-card">
        <div class="what_we_do_content_inner">
            <div class="what_we_do_icon_wrapper">
                <img width="64" src="img/icon_wwd-one.svg" alt="icon what we do one">
            </div>
            <h2 class="what_we_do_card-name">Honey Production</h2>
            <p class="what_we_do_card-text">We produce, bottle, and sell honey harvested by our beekeepers.
            </p>
            <div class="what_we_do_anchor_container">
                <a href="#" class="what_we_do_anchor_text">Learn more</a>
            </div>
        </div>
    </article></div>`,
        `<div><article class="what_we_do_content-card">
        <div class="what_we_do_content_inner">
            <div class="what_we_do_icon_wrapper">
                <img width="64" src="img/icon_wwd-two.svg" alt="icon what we do two">
            </div>
            <h2 class="what_we_do_card-name">Honey Shop</h2>
            <p class="what_we_do_card-text">We offer over 10 types of organic raw honey in our online store.
            </p>
            <div class="what_we_do_anchor_container">
                <a href="#" class="what_we_do_anchor_text">Learn more</a>
            </div>
        </div>
    </article></div>`,
        `<div><article class="what_we_do_content-card">
        <div class="what_we_do_content_inner">
            <div class="what_we_do_icon_wrapper">
                <img width="64" src="img/icon_wwd-three.svg" alt="icon what we do three">
            </div>
            <h2 class="what_we_do_card-name">Supplements</h2>
            <p class="what_we_do_card-text">You can buy bee pollen, propolis, and hive mixtures. </p>
            <div class="what_we_do_anchor_container">
                <a href="#" class="what_we_do_anchor_text">Learn more</a>
            </div>
        </div>
    </article></div>`,
        `<div><article class="what_we_do_content-card">
        <div class="what_we_do_content_inner">
            <div class="what_we_do_icon_wrapper">
                <img width="64" src="img/icon_wwd-four.svg" alt="icon what we do four">
            </div>
            <h2 class="what_we_do_card-name">Beekeeping Classes</h2>
            <p class="what_we_do_card-text">Feel free to book excursions and workshops at our swaths.</p>
            <div class="what_we_do_anchor_container">
                <a href="#" class="what_we_do_anchor_text">Learn more</a>
            </div>
        </div>
    </article></div>`
    ];

    let currentSlide = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.what_we_do_carousel_slide');
        slideContainer.innerHTML = slides[currentSlide];
        if (window.innerWidth > 600) {
            const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
            slideContainer.innerHTML += slides[secondSlide];
            if (window.innerWidth > 900) {
                const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
                slideContainer.innerHTML += slides[thirdSlide];
            }
        }
    }

    function nextSlide() {
        currentSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1; 
        showCurrentSlide();
    }

    function prevSlide() {
        currentSlide = currentSlide - 1 <= 0 ? slides.length - 1 : currentSlide - 1;
        showCurrentSlide();
    }

    showCurrentSlide();

    document.querySelector('.what_we_do-carousel__button.back').addEventListener('click', nextSlide);
    document.querySelector('.what_we_do-carousel__button.forward').addEventListener('click', prevSlide);
    window.addEventListener('resize', showCurrentSlide);

})();