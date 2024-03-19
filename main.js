document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(Flip, ScrollTrigger, SplitText);

    $(".big-btn").on("mouseenter", function() {
        gsap.to($(this).find(".big-btn-item.is-null"), {
            opacity: 0,
            duration: 0.3,
            ease: "power2.easeOut",
        })
    }).on("mouseleave", function() {
        gsap.to($(this).find(".big-btn-item.is-null"), {
            opacity: 1,
            duration: 0.3,
            ease: "power2.easeOut",
        })
    })
    
    $(".big-btn-link.is-view").on("mouseenter", function() {
        gsap.to($(this).siblings(".big-btn-item.is-view"), {
            opacity: 1,
            duration: 0.3,
            ease: "power2.easeOut",
        })
        gsap.to($(this).siblings(".big-btn-item.is-read"), {
            opacity: 0,
            duration: 0.3,
            ease: "power2.easeOut",
        });
    }).on("mouseleave", function() {
        gsap.to($(this).siblings(".big-btn-item.is-view"), {
            opacity: 0,
            duration: 0.3,
            ease: "power2.easeOut",
        })
    })
    $(".big-btn-link.is-read").on("mouseenter", function() {
        gsap.to($(this).siblings(".big-btn-item.is-read"), {
            opacity: 1,
            duration: 0.3,
            ease: "power2.easeOut",
        })
        gsap.to($(this).siblings(".big-btn-item.is-view"), {
            opacity: 0,
            duration: 0.3,
            ease: "power2.easeOut",
        });
    }).on("mouseleave", function() {
        gsap.to($(this).siblings(".big-btn-item.is-read"), {
            opacity: 0,
            duration: 0.3,
            ease: "power2.easeOut",
        })
    })
})