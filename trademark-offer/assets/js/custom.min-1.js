$(window).scroll(function () {
  $(this).scrollTop() > 1
    ? $("header").addClass("sticky")
    : $("header").removeClass("sticky");
}),
  new WOW().init(),
  $(document).ready(function () {
    $(".testimonialCarousel").slick({
      dots: !0,
      infinite: !0,
      autoplay: !0,
      speed: 3e3,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: !1,
      responsive: [{ breakpoint: 991, settings: { slidesToShow: 1 } }],
    });
  }),
  $(document).ready(function () {
    $(".indLedrCarousel").slick({
      dots: !0,
      infinite: !0,
      autoplay: !0,
      speed: 3e3,
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: !1,
      responsive: [
        { breakpoint: 1199, settings: { slidesToShow: 5 } },
        { breakpoint: 991, settings: { slidesToShow: 4 } },
        { breakpoint: 768, settings: { slidesToShow: 3 } },
        { breakpoint: 576, settings: { slidesToShow: 2 } },
      ],
    });
  }),
  $(".forbottom").click(function () {
    $(this).toggleClass("open");
  })

  // Packages Carousel
//   $(document).ready(function () {
//     $(".packagesCarousel").slick({
//       dots: !0,
//       infinite: !0,
//       autoplay: !0,
//       speed: 3e3,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       arrows: !1,
//       responsive: [{ breakpoint: 991, settings: { slidesToShow: 1 } }],
//     });
//   })

$(document).ready(function () {
  $(".packagesCarousel").slick({
    // dots: !0,
    // infinite: !0,
    // autoplay: !0,
    // speed: 3e3,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    // arrows: !1,

    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000, // Speed of autoplay in milliseconds (1 second)
    speed: 500, // Transition speed (0.5 second)
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    draggable: true, // Ensure dragging is enabled
    responsive: [{ breakpoint: 991, settings: { slidesToShow: 1 } }],
  });
});