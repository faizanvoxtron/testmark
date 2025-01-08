/**
* Template Name: Multi - v4.7.0
* Template URL: https://bootstrapmade.com/multi-responsive-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

$.event.special.touchstart = {
  setup: function( _, ns, handle ) {
      this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
  }
};
$.event.special.touchmove = {
  setup: function( _, ns, handle ) {
      this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
  }
};

var winWidth = $(window).width();

(function() {
  "use strict";
  // $("#website-design").fancybox();
  getCopyYear();
  tabsInit();
  initHtmlReader();

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
    
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled')
      } else {
        selectHeader.classList.remove('header-scrolled')
      }
    }
    window.addEventListener('load', headerScrolled)
    onscroll(document, headerScrolled)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Hero carousel indicators
   */
  let heroCarouselIndicators = select("#hero-carousel-indicators")
  let heroCarouselItems = select('#heroCarousel .carousel-item', true)

  heroCarouselItems.forEach((item, index) => {
    (index === 0) ?
    heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
      heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
  });

  /**
   * Testimonials slider
   */


  /**
   * Porfolio isotope and filter
   */
  
  // window.addEventListener('load', () => {

  //   let portfolioContainer = select('.portfolio-container');
  //   if (portfolioContainer) {
  //     let portfolioIsotope = new Isotope(portfolioContainer, {
  //       itemSelector: '.portfolio-item',
  //       layoutMode: 'fitRows'
  //     });

  //     let portfolioFilters = select('#portfolio-flters li', true);

  //     on('click', '#portfolio-flters li', function(e) {
  //       e.preventDefault();
  //       portfolioFilters.forEach(function(el) {
  //         el.classList.remove('filter-active');
  //       });
  //       this.classList.add('filter-active');

  //       portfolioIsotope.arrange({
  //         filter: this.getAttribute('data-filter')
  //       });
  //       portfolioIsotope.on('arrangeComplete', function() {
  //         AOS.refresh()
  //       });
  //     }, true);
  //   }
  //   showMobileTootip();
  //   initHtmlAppender('.js-reanderhtml');
  // });


  $(window).scroll(function() {
    initHtmlAppender('.js-reanderhtml');
  });
    

  $.fn.isInViewport = function(){
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
  

  /**
   * Initiate portfolio lightbox 
   */
  // const portfolioLightbox = GLightbox({
  //   selector: '.portfolio-lightbox'
  // });

  /**
   * Portfolio details slider
   */
  // new Swiper('.portfolio-details-slider', {
  //   speed: 400,
  //   loop: true,
  //   autoplay: {
  //     delay: 5000,
  //     disableOnInteraction: false
  //   },
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'bullets',
  //     clickable: true
  //   }
  // });

  /**
   * Animation on scroll
   */
  // window.addEventListener('load', () => {
  //   AOS.init({
  //     duration: 1000,
  //     easing: 'ease-in-out',
  //     once: true,
  //     mirror: false
  //   })
  // });

  showMobileTootip();
    $('body').on('click touchstart', '.js-defaultOverlay', function () {
		hideMobileTootip();
	}).on('click','.is-ttShow .js-ttClose', function(){
        var self = $(this);
        self.find('.js-mbtt').removeClass('is-ttShow');
        self.parent('.tooltiptext').parent('.is-ttShow').removeClass('is-ttShow');
        setTimeout(function(){
            if($('.js-mbtt.is-ttShow').length < 1){
                $('body').removeClass('is-mbttShow');
            }
        }, 1000);
    });
  

    

})()


function getCopyYear() {
  var copyright = new Date().getFullYear();
  $(".copyrightyear").text(copyright);
}



function tabsInit() {
  $('.js-tab-link').click(function(e) {
      e.preventDefault();
      var $this = $(this);
      var targetId = $this.attr('data-tab-id');
      var tabsName = $this.attr('data-tab-name');
      $('[data-tab-name="' + tabsName + '"]').removeClass('is-active');
      // $this.addClass('is-active');
      $('[data-tab-id="'+targetId+'"]').addClass('is-active');
      $('.tab-'+targetId).addClass('is-active');
  });
}


function showMobileTootip(){
	if($(window).width() <= 991){
		$('body').on('click','.js-mbtt:not(.is-ttShow)', function(){
			var $this = $(this);
			$this.addClass('is-ttShow');
			$('body').addClass('is-mbttShow');
		});	
	}
}

function hideMobileTootip(){
    $('.js-mbtt').removeClass('is-ttShow');
    $('body').removeClass('is-mbttShow');
}


function initHtmlReader(){
	var readHTMLFile = function(url){
		var toReturn;
		$.ajax({
			url: url,
			async: false
		}).done(function(data){
			toReturn = data;
		});
		return toReturn;
	};
	$.appSection = function(url){
		fileContent = readHTMLFile(url);
		initAppendFile(fileContent, url);
	};
}

function initHtmlAppender(target){
	var $target = $(target);
	$target.each(function (i, ele){
		var $ele = $(ele);
		if ($ele.isInViewport()){
			var htmlreander = $ele.attr('data-htmlreander');
			if(htmlreander != ''){
				$.appSection(htmlreander);
				$ele.attr('data-htmlreander','');
			}
		}
	});
}

function initAppendFile(content, target){
	$('[data-htmlreander="'+target+'"]').append(content);
	$('[data-htmlreander="'+target+'"] > div,[data-htmlreander="'+target+'"] > section').unwrap();
	//$('[data-htmlreander="'+target+'"]').removeClass('minht-400p');
	tabsInit();
	showMobileTootip();
  testiSlider();
}

// function testiSlider(){
//   new Swiper('.testimonials-slider', {
//     speed: 600,
//     loop: true,
//     autoplay: {
//       delay: 5000,
//       disableOnInteraction: false
//     },
//     slidesPerView: 'auto',
//     pagination: {
//       el: '.swiper-pagination',
//       type: 'bullets',
//       clickable: true
//     },
//     breakpoints: {
//       320: {
//         slidesPerView: 1,
//         spaceBetween: 20
//       },

//       1200: {
//         slidesPerView: 2,
//         spaceBetween: 20
//       }
//     }
//   });
//  }


 var btn = $('.back-to-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


// AOS.init({
//   // Global settings:
  
//   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//   offset: 120, // offset (in px) from the original trigger point
//   delay: 0, // values from 0 to 3000, with step 50ms
//   duration: 400, // values from 0 to 3000, with step 50ms
//   easing: 'ease-in', // default easing for AOS animations
//   once: true, // whether animation should happen only once - while scrolling down
//   mirror: false, // whether elements should animate out while scrolling past them
//   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

// });


$('.home-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows:false,
  fade: false,
  //asNavFor: '.main-slider-nav'
});


$('.main-slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.home-slider',
  draggable:false,
  dots: false,
  autoplay: false,
  arrows:false,
  centerMode: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1      
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$('.testimonials-slider').slick({
  dots:false,
  infinite:true,
  autoplay:true,
  arrows:true,
  speed: 300,
  slidesToShow: 1,
  nextArrow:('#next'),
  prevArrow:('#prev'),  
});
	

// jQuery("html").easeScroll({
//   frameRate: 60,
//   animationTime: 1500,
//   stepSize: 300,
//   pulseAlgorithm: 1,
//   pulseScale: 8,
//   pulseNormalize: 1,
//   accelerationDelta: 20,
//   accelerationMax: 1,
//   keyboardSupport: true,
//   arrowScroll: 50,
//   touchpadSupport: false,
//   fixedBackground: true
// });

