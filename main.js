document.addEventListener("DOMContentLoaded", (event) => {
    // Add match media to gsap
    let mm = gsap.matchMedia();

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

    const bigBtnTl = gsap.timeline({ repeat: -1 })
    bigBtnTl.to(".big-btn-gradient", {
        translateX: "20%",
        translateY: "45%",
        rotate: 100,
        duration: 6,
        ease: "linear",
    }).to(".big-btn-gradient", {
        translateX: "45%",
        translateY: "-10%",
        scale: 0.5,
        rotate: -20,
        duration: 4,
        ease: "linear",
    }).to(".big-btn-gradient", {
        translateX: "-30%",
        translateY: "0%",
        rotate: 150,
        scale: 0.7,
        duration: 5,
        ease: "linear",
    }).to(".big-btn-gradient", {
        translateX: "-20%",
        translateY: "45%",
        rotate: 270,
        scale: 1,
        duration: 7,
        ease: "linear",
    })

    // Toggle navbar 2025 menu
    $(".navbar-2025_menu").on("click", function() {
        if($(".navbar-2025_menu").hasClass("is-active")) {
            $(".navbar-2025_menu").removeClass("is-active")
            $(".navbar-2025_menu").find(".navbar-2025_menu-icon_open").css("display", "flex")
            $(".navbar-2025_menu").find(".navbar-2025_menu-icon_close").css("display", "none")

            gsap.to(".navbar-2025_tabs-list_wrapper", {
                opacity: 0,
                duration: 0.4,
                ease: "power2.easeOut",
                onComplete: () => {
                    $(".navbar-2025_tabs-list_wrapper").css("pointer-events", "none")
                }
            })
        } else {
            $(".navbar-2025_menu").addClass("is-active")
            $(".navbar-2025_menu").find(".navbar-2025_menu-icon_open").css("display", "none")
            $(".navbar-2025_menu").find(".navbar-2025_menu-icon_close").css("display", "flex")

            gsap.to(".navbar-2025_tabs-list_wrapper", {
                opacity: 1,
                duration: 0.4,
                ease: "power2.easeIn",
                onComplete: () => {
                    $(".navbar-2025_tabs-list_wrapper").css("pointer-events", "auto")
                }
            })
        }
    })

    gsap.set('.navbar_second',{
        display: "flex",
    })
    
    // if($("._2025_program-day_timeline-item.is-ball").length) {
    //     new ScrollTrigger({
    //         trigger: "._2025_program-day_timeline-item.is-ball",
    //         start: "top 50vh",
    //         end: "bottom 50vh",
    //         pin: true,
    //         pinReparent: true,
    //         markers: true,
    //     })
    // }

    mm.add("(min-width: 992px)", () => {
        // Toggle navbar 2025 tabs on scroll top or bottom
        if ($(".navbar_second").length && !$(".navbar_second").hasClass("is-snapper")) {
            const navbar2025Tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "body",
                    start: "100vh top",
                    toggleActions: "play none none reverse",
                }
            })
            navbar2025Tl.fromTo(".navbar_second", {
                yPercent: -110
            }, {
                yPercent: 0,
                duration: 0.3,
                ease: "power2.easeIn",
            })
        }
    })
})