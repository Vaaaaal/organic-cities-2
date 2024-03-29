document.addEventListener("DOMContentLoaded", (event) => {
    window.Vlitejs.registerProvider('vimeo', window.VlitejsVimeo);

    $(".seq_hero-title").clone().appendTo(".seq_mobile-title");
    $(".seq_mobile-title h1").removeClass("disable-mobile").addClass("disable-desktop");
    
    // Add slider to hero
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        parallax: true,
        spaceBetween: -1,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button.is-next',
            prevEl: '.swiper-button.is-prev',
        },
    });

        // Add player for all video available and push it in an object
    let allVideoPlayers = []
    $('.seq_modal-video-item').each(function(index, item) {
            const parent = $(item).parent()
        
        const videoPlayer = new window.Vlitejs(`#${$(item).attr("id")}`, {
            options: {
                controls: true,
                autoplay: false,
                playPause: true,
                progressBar: true,
                poster: parent.find(".seq_modal-video-cover").attr("src"),
                time: true,
                volume: true,
                fullscreen: true,
                bigPlay: true,
                playsinline: true,
                loop: false,
                muted: false,
                autoHide: true,
                providerParams: {
                controls: false,
                }
            },
            provider: ["vimeo"],
        })
        
        allVideoPlayers.push(videoPlayer)
    })

    // Add click event to big btn & swiper title for video
    $('.big-btn-link.is-view').on('click', function() {
        const tl = gsap.timeline()
        const element = $(`#${$(this).data("modalId")}`)
        tl.set(element.parents('.seq_modal-video'), { display: "flex" })
            .to(element.parents('.seq_modal-video'), {
                opacity: 1,
                duration: 0.4,
                ease: "power2.easeOut"
            }
        )
    })
    $('.swiper_internal-title').on('click', function() {
        const tl = gsap.timeline()
        const element = $(`#${$(this).data("modalId")}`)
        tl.set(element.parents('.seq_modal-video'), { display: "flex" })
            .to(element.parents('.seq_modal-video'), {
                opacity: 1,
                duration: 0.4,
                ease: "power2.easeOut"
            }
        )
    })

    // Add click event to modal background to close video and modal
    $('.seq_modal-video').on('click', function(e) {
        if (e.target !== this && !$(e.target).parent().hasClass("seq_modal-video"))
        return;
        
        let filtered = allVideoPlayers.filter(item => { 
            return $(item.media).attr("id") === $(this).find('.seq_modal-video-item').attr("id")
        })
        
        filtered[0].player.pause()
        gsap.to($(this), {
            opacity: 0,
            duration: 0.3,
            ease: "power2.easeOut",
            onComplete: () => {
                gsap.set($(this), { display: "none" })
            }
        })
    })

    // Add match media to gsap
    let mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
        $(".seq_swiper-content-internal-wrap").on("mouseenter", function() {
            $(this).css("color", "rgba(255, 255, 255, 1)")
            $(".swiper_internal-authors-list-item").css("color", "rgba(255, 255, 255, 1)")
        }).on("mouseleave", function() {
            $(this).css("color", "rgba(255, 255, 255, 0.35)")
            $(".swiper_internal-authors-list-item").css("color", "rgba(255, 255, 255, 0.35)")
        })
    })
})