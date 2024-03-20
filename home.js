document.addEventListener("DOMContentLoaded", (event) => {
  window.Vlitejs.registerProvider('vimeo', window.VlitejsVimeo);
  
  // SplitText for animations
  new SplitText(".home_sequence-interventions-title", {type: "lines", linesClass: "line"});
  new SplitText(".home_sequence-interventions-entreprise", {type: "lines", linesClass: "line"});
  
  // Add authors to the good place (sibling entreprise)
  $(".home_sequence-interventions-entreprise").each((index, item) => {
    $(item).find(".home_sequence-interventions-authors").text($(item).find(".home_sequence-interventions-authors").text().trim());
    $(item).find(".home_sequence-interventions-authors").append(",&nbsp;").prependTo($(item).find(".home_sequence-interventions-entreprise-item"));
  })

  // Open sommaire modal
  $('.navbar_second-sommaire').on('click', function() {
    gsap.to('.modal.is-sommaire', {
      translateX: 0,
      duration: 0.4,
      ease: "power2.easeOut",
      onComplete: function() {
        gsap.set("body", {
          overflow: 'hidden'
        })
      }
    })
  })
  
  function closeSommaire() {
    gsap.to('.modal.is-sommaire', {
      translateX: "102%",
      duration: 0.4,
      ease: "power2.easeOut",
      onComplete: function() {
        gsap.set("body", {
          overflow: 'inherit'
        })
      }
    })
  }
  // Close sommaire modal
  $('.modal-sommaire-link').on('click', closeSommaire)
  $('.close-icon.is-sommaire').on('click', closeSommaire)
  
  // Open edito modal
  $('.glowy-btn.is-edito').on('click', function() {
    gsap.to('.modal.is-edito', {
      translateX: 0,
      duration: 0.4,
      ease: "power2.easeOut",
      onComplete: function() {
        gsap.set("body", {
          overflow: 'hidden'
        })
      }
    })
  })
  
  // Close edito modal
  $('.close-icon.is-edito').on('click', function() {
    gsap.to('.modal.is-edito', {
      translateX: "102%",
      duration: 0.4,
      ease: "power2.easeOut",
      onComplete: function() {
        gsap.set("body", {
          overflow: 'inherit'
        })
      }
    })
  })

  // Scroll to the good element in view (due to scroll snap)
  $('.navbar_second-link').on("click", function() {
    const element = document.getElementById($(this).data("target"))
    element.scrollIntoView(true)
  })

  $('.modal-sommaire-link').on("click", function() {
    const element = document.getElementById($(this).data("target"))
    element.scrollIntoView(true)
  })
  
  // Hover effect for navbar second
  $('.navbar_second-link').on("mouseenter", function() {
    gsap.to(this, {
      color: "#fff",
      duration: 0.2,
      ease: "power2.easeOut",
    })
  }).on("mouseleave", function() {
    gsap.to(this, {
      color: "#a0a0a0",
      duration: 0.2,
      ease: "power2.easeIn",
    })
  })

  // Active state effect on second nav
  ScrollTrigger.defaults({
    scroller: ".snapper",
  })

  const introTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#intro",
      start: "top 10%",
      end: "bottom 10%",
      toggleActions: "play reverse play reverse",
    }
  })
  introTl.to(".navbar_second-link.is-intro", {
    color: "#fff",
    duration: 0.3,
    ease: "power2.easeOut",
  }).fromTo($(".navbar_second-link.is-intro").find(".navbar_second-indicator"), {
    translateX: "-105%",
  }, {
    translateX: 0,
    duration: 0.3,
    ease: "power2.easeOut",
  }, 0)

  const editoTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#edito",
      start: "top 10%",
      end: "bottom 10%",
      toggleActions: "play reverse play reverse",
    }
  })
  editoTl.to(".navbar_second-link.is-edito", {
    color: "#fff",
    duration: 0.3,
    ease: "power2.easeOut",
  }).to($(".navbar_second-link.is-edito").find(".navbar_second-indicator"), {
    translateX: 0,
    duration: 0.3,
    ease: "power2.easeOut",
  }, 0)

  const makingTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#making",
      start: "top 10%",
      endTrigger: ".home_making-wrapper .snapper-item:last-child",
      end: "bottom 10%",
      toggleActions: "play reverse play reverse",
    }
  })
  makingTl.to(".navbar_second-link.is-making", {
    color: "#fff",
    duration: 0.3,
    ease: "power2.easeOut",
  }).to($(".navbar_second-link.is-making").find(".navbar_second-indicator"), {
    translateX: 0,
    duration: 0.3,
    ease: "power2.easeOut",
  }, 0)

  const thinkTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#thinking",
      start: "top 10%",
      endTrigger: ".footer",
      end: "bottom top",
      toggleActions: "play reverse play reverse",
    }
  })
  thinkTl.to(".navbar_second-link.is-thinking", {
    color: "#fff",
    duration: 0.3,
    ease: "power2.easeOut",
  }).to($(".navbar_second-link.is-thinking").find(".navbar_second-indicator"), {
    translateX: 0,
    duration: 0.3,
    ease: "power2.easeOut",
  }, 0)
  
  // Add custom player
  new window.Vlitejs("#player-making", {
    options: {
      controls: true,
      autoplay: false,
      playPause: true,
      progressBar: true,
      time: true,
      volume: true,
      fullscreen: true,
      poster: "https://uploads-ssl.webflow.com/65f1ad70977f323b50ce95e4/65f2337eac367b9214c7f0ab_default.jpg",
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
  
  new window.Vlitejs("#player-think", {
    options: {
      controls: true,
      autoplay: false,
      playPause: true,
      progressBar: true,
      time: true,
      volume: true,
      fullscreen: true,
      poster: "https://uploads-ssl.webflow.com/65f1ad70977f323b50ce95e4/65f2337eac367b9214c7f0ab_default.jpg",
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
  
  $('.home_type-video.is-home-intervention').each(function(index, item) {
    new window.Vlitejs(item, {
      options: {
        controls: true,
        autoplay: false,
        playPause: true,
        progressBar: true,
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
  })
  
  // Dynamicly add click event after finsweet attributes cmsnest loads
  window.fsAttributes = window.fsAttributes || [];
  window.fsAttributes.push([
    'cmsnest',
    (listInstances) => {
      // Add active class when dynamic nested video element clicked
      $('.home_sequence-interventions-item-video').on('click', function() {
        $('.home_sequence-interventions-item').removeClass('is-active');
        $(".home_intervention-video-overlay").removeClass('is-active');

        gsap.to(".home_sequence-interventions-item", {
          flex: 1,
          duration: 0.4,
          ease: "power2.easeOut",
        })

        gsap.to($(this).parent(), {
          flex:  $(this).parent().parent().children().length ? $(this).parent().parent().children().length : 1,
          duration: 0.6,
          ease: "back.out(1.3)",
        })
        gsap.set($(this).find(".home_intervention-video-overlay"), { display: "flex" })
        $(this).find(".home_intervention-video-overlay").addClass("is-active")
      })
      
      // Add click event on plus / minus icon
      $(".home_sequence-icon").on("click", function() {
        if($(this).hasClass("is-plus")) {
          $(this).removeClass("is-plus")
          $(this).addClass("is-minus")
          const collection = $(this)
            .parent()
            .siblings(".home_sequence-interventions")
            .find(".home_sequence-interventions-collection")

          const initialCollection = Flip.getState(collection);
          const tl = gsap.timeline()
          collection.find(".home_sequence-interventions-title .line")
          tl.to(collection.find(".home_sequence-interventions-title .line"), {
            yPercent: 100,
            duration: 0.4,
            ease: "power2.easeInOut",
            stagger: 0.03,
          }).to(collection.find(".home_sequence-interventions-entreprise .line"), {
            yPercent: 100,
            duration: 0.4,
            ease: "power2.easeInOut",
            stagger: 0.03,
            onComplete: function() {
              collection.addClass("is-video")
              $(collection.find(".home_sequence-interventions-item-classic")).addClass("is-disabled")
              $(collection.find(".home_sequence-interventions-item-video")).addClass("is-active")
              const options = {
                duration: 0.8,
                ease: "power2.easeOut",
              }
              Flip.from(initialCollection, options)
            }
          }, 0).to(collection.find(".home_sequence-interventions-item-video"), {
            scaleY: 1,
            duration: 0.6,
            ease: "power2.easeOut",
            stagger: 0.05,
          })
        } else if($(this).hasClass("is-minus")) {
          $(this).removeClass("is-minus")
          $(this).addClass("is-plus")
          const collection = $(this)
            .parent()
            .siblings(".home_sequence-interventions")
            .find(".home_sequence-interventions-collection")
          
          $('.home_sequence-interventions-item').removeClass('is-active');
          $(".home_intervention-video-overlay").removeClass('is-active');
          
          const initialCollection = Flip.getState(collection);
          const tl = gsap.timeline()
          tl.to(".home_sequence-interventions-item", {
            flex: 1,
            duration: 0.4,
            ease: "power2.easeOut",
          }).to(collection.find(".home_sequence-interventions-item-video"), {
            scaleY: 0,
            duration: 0.6,
            ease: "power2.easeOut",
            stagger: {
              amount: 0.15,
              from: "end",
            },
            onComplete: function() {
              collection.removeClass("is-video")
              collection.find(".home_sequence-interventions-item-classic").removeClass("is-disabled")
              collection.find(".home_sequence-interventions-item-video").removeClass("is-active")
              
              const options = {
                duration: 0.6,
                ease: "power2.easeOut",
              }
              Flip.from(initialCollection, options)
            },
          }, "-=0.2").to([collection.find(".home_sequence-interventions-title .line"), collection.find(".home_sequence-interventions-entreprise .line")], {
            yPercent: 0,
            duration: 0.4,
            ease: "power2.easeOut",
            stagger: {
              amount: 0.03,
              from: "end",
            },
          }, "+=0.3")
        }
      })

      // Add player for all video available and push it in an object
      let allVideoPlayers = []
      $('.home_modal-video-item').each(function(index, item) {
        const parent = $(item).parent()
        
        const videoPlayer = new window.Vlitejs(`#${$(item).attr("id")}`, {
          options: {
            controls: true,
            autoplay: false,
            playPause: true,
            progressBar: true,
            poster: parent.find(".home_modal-video-cover").attr("src"),
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
      
      // Add click event to play btn overlay to open modal video
      $('.home_intervention-video-overlay').on('click', function() {
        if(!$(this).hasClass("is-active")) {
          return
        }

        gsap.set("body", { overflow: 'hidden' })
        const tl = gsap.timeline()
        const element = $(`#${$(this).data("modalId")}`)
        tl.set(element.parents('.home_modal-video'), { display: "flex" })
          .to(element.parents('.home_modal-video'), {
            opacity: 1,
            duration: 0.4,
            ease: "power2.easeOut",
          }
        )
      })
      
      // Add click event to modal background to close video and modal
      $('.home_modal-video').on('click', function(e) {
        if (e.target !== this && !$(e.target).parent().hasClass("home_modal-video"))
          return;
          
        let filtered = allVideoPlayers.filter(item => { 
          return $(item.media).attr("id") === $(this).find('.home_modal-video-item').attr("id")
        })
        
        gsap.set("body", { overflow: 'scroll' })
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
    }
  ])

  // Add match media to gsap
  let mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
    $(".home-bg-wrapper").css("height", "100%")
    $(".home-bg-overlay").css("height", "100%")
  })

  mm.add("(max-width: 768px)", () => {
    const value = $(".snapper").children().toArray()
    value.shift()
    const height = value.reduce((acc, item) => {
      return acc + $(item).height()
    }, 0)

    $(".home-bg-wrapper").css("height", height)
    $(".home-bg-overlay").css("height", "101%")
  })
});
