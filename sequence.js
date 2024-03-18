document.addEventListener("DOMContentLoaded", (event) => {
    window.Vlitejs.registerProvider('vimeo', window.VlitejsVimeo);
    
    // Add slider to hero
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        parallax: true,

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

    // Add click event to big btn for video
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
})