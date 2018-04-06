/*global $, jQuery, alert*/
$(document).ready(function() {
  "use strict";

  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //

  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on("click", function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $("a").each(function() {
      $(this).removeClass("active");
      if ($(window).width() < 768) {
        $(".nav-menu").slideUp();
      }
    });

    $(this).addClass("active");

    var target = this.hash,
      menu = target;

    target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: target.offset().top - 80
        },
        500,
        "swing",
        function() {
          window.location.hash = target.selector;
          $(document).on("scroll", onScroll);
        }
      );
  });

  function onScroll(event) {
    if ($(".home").length) {
      var scrollPos = $(document).scrollTop();
      $("nav ul li a").each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }

  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // ========================================================================= //

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 200) {
      $("#main-nav, #main-nav-subpage").slideDown(700);
      $("#main-nav-subpage").removeClass("subpage-nav");
    } else {
      $("#main-nav").slideUp(700);
      $("#main-nav-subpage").hide();
      $("#main-nav-subpage").addClass("subpage-nav");
    }
  });

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $(".responsive").on("click", function(e) {
    $(".nav-menu").slideToggle();
  });

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: [
        "Tommy-croprocesseur.",
        "Ando-scope.",
        "Julien-synchrone.",
        "Benjamin-cremente.",
        "Vincent-serif"
      ],
      typeSpeed: 100,
      loop: true
    });
  });

  // ========================================================================= //
  //  Owl Carousel Services
  // ========================================================================= //

  $(".services-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    margin: 20,
    dots: true,
    nav: false,
    responsiveClass: true,
    responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 } }
  });

  // ========================================================================= //
  //  Porfolio isotope and filter
  // ========================================================================= //

  var portfolioIsotope = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-thumbnail",
    layoutMode: "fitRows"
  });

  $("#portfolio-flters li").on("click", function() {
    $("#portfolio-flters li").removeClass("filter-active");
    $(this).addClass("filter-active");

    portfolioIsotope.isotope({ filter: $(this).data("filter") });
  });

  // ========================================================================= //
  //  magnificPopup
  // ========================================================================= //

  var magnifPopup = function() {
    $(".popup-img").magnificPopup({
      type: "image",
      removalDelay: 300,
      mainClass: "mfp-with-zoom",
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: "ease-in-out", // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is("img")
            ? openerElement
            : openerElement.find("img");
        }
      }
    });
  };

  // Call the functions
  magnifPopup();

  // let progressBarColor1;
  // let progressBarColor2;
  // let progressBarColor3;
  // let progressBarColor4;
  // let progressBarColor5;
  // let progressBarColor6;
  // let someValueToCheck1 = $("#pb1").attr("aria-valuenow");
  // let someValueToCheck2 = $("#pb2").attr("aria-valuenow");
  // let someValueToCheck3 = $("#pb3").attr("aria-valuenow");
  // let someValueToCheck4 = $("#pb4").attr("aria-valuenow");
  // let someValueToCheck5 = $("#pb5").attr("aria-valuenow");
  // let someValueToCheck6 = $("#pb6").attr("aria-valuenow");

  function changeMaColor() {
    const someValueToCheckTab = [
      $("#pb1").attr("aria-valuenow"),
      $("#pb2").attr("aria-valuenow"),
      $("#pb3").attr("aria-valuenow"),
      $("#pb4").attr("aria-valuenow"),
      $("#pb5").attr("aria-valuenow"),
      $("#pb6").attr("aria-valuenow")
    ];
    const pbTab = ["#pb1", "#pb2", "#pb3", "#pb4", "#pb5", "#pb6"];
    let couleurGauche, couleurDroite;
    for (let i = 0; i < someValueToCheckTab.length; i++) {
      if (someValueToCheckTab[i] >= 50) {
        couleurGauche = "#00910A";
        couleurDroite = "#3CEF48";
      } else if (someValueToCheckTab[i] < 50 && someValueToCheckTab[i] >= 20) {
        couleurGauche = "#1A679B";
        couleurDroite = "#73C1F4";
      } else if (someValueToCheckTab[i] <= 20) {
        couleurGauche = "#D81D00";
        couleurDroite = "#FDB119";
      }
      $(pbTab[i]).css(
        "background",
        `linear-gradient(to left, ${couleurGauche}, ${couleurDroite})`
      );
    }
  }

  changeMaColor();

  // if(someValueToCheck1 >= 50){progressBarColor1 = "#008bd6"}
  // else if (someValueToCheck1 < 50 && someValueToCheck1 >= 20){
  //   progressBarColor1 = "#00d675"}
  //   else {progressBarColor = "#A52A2A"};
  // $("#pb1").css('background-color', progressBarColor1);

  // if(someValueToCheck2 >= 50){progressBarColor2 = "#008bd6"}
  // else if (someValueToCheck2 < 50 && someValueToCheck2 >= 20){
  //   progressBarColor2 = "#00d675"}
  //   else {progressBarColor2 = "#A52A2A"};
  // $("#pb2").css('background-color', progressBarColor2);

  // if(someValueToCheck3 >= 50){progressBarColor3 = "#008bd6"}
  // else if (someValueToCheck3 < 50 && someValueToCheck3 >= 20){
  //   progressBarColor3 = "#00d675"}
  //   else {progressBarColor3 = "#A52A2A"};
  // $("#pb3").css('background-color', progressBarColor3);

  // if(someValueToCheck4 >= 50){progressBarColor4 = "#008bd6"}
  // else if (someValueToCheck4 < 50 && someValueToCheck4 >= 20){
  //   progressBarColor4 = "#00d675"}
  //   else {progressBarColor4 = "#A52A2A"};
  // $("#pb4").css('background-color', progressBarColor4);

  // if(someValueToCheck5 >= 50){progressBarColor5 = "#008bd6"}
  // else if (someValueToCheck5 < 50 && someValueToCheck5 >= 20){
  //   progressBarColor5 = "#00d675"}
  //   else {progressBarColor5 = "#A52A2A"};
  // $("#pb5").css('background-color', progressBarColor5);

  // if(someValueToCheck6 >= 50){progressBarColor6 = "#008bd6"}
  // else if (someValueToCheck6 < 50 && someValueToCheck6 >= 20){
  //   progressBarColor6 = "#00d675"}
  //   else {progressBarColor6 = "#A52A2A"};
  // $("#pb6").css('background-color', progressBarColor6);

  let tl = new TimelineMax({
    paused: true
  });
});
