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
    $('.navbar_second-link.is-sommaire').on('click', function() {
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
    
    // Hover effect on second nav
    $('.navbar_second-link').on('mouseenter', function() {
    	gsap.to(this, {
      	color: "#fff",
        duration: 0.3,
        ease: "power2.easeOut",
      })
      gsap.to($(this).find(".navbar_second-indicator"), {
      	translateX: 0,
        duration: 0.3,
        ease: "power2.easeOut",
      })
    }).on('mouseleave', function() {
    	gsap.to(this, {
      	color: "#888",
        duration: 0.3,
        ease: "power2.easeOut",
      })
      gsap.to($(this).find(".navbar_second-indicator"), {
      	translateX: "-105%",
        duration: 0.3,
        ease: "power2.easeOut",
      })
    })
    
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
          gsap.to(".home_sequence-interventions-item", {
          	flex: 1,
            duration: 0.4,
            ease: "power2.easeOut",
            // ease: "linear",
          })
          $(this).parent().addClass('is-active');
          gsap.to($(this).parent(), {
          	flex: 4,
            duration: 0.6,
            ease: "back.out(1.3)",
          })
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
                  duration: 1,
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
            
            const initialCollection = Flip.getState(collection);
            const tl = gsap.timeline()
            tl.to(collection.find(".home_sequence-interventions-item-video"), {
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
                gsap.set(collection.find(".home_sequence-interventions-item"), { flex: 1 })
                
                const options = {
                  duration: 0.4,
                  ease: "power2.easeOut",
                }
                Flip.from(initialCollection, options)
              },
            }).to([collection.find(".home_sequence-interventions-title .line"), collection.find(".home_sequence-interventions-entreprise .line")], {
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
      }
    ])
	});
