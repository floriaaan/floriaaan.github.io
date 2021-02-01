/*global $, jQuery, alert*/
$(document).ready(function () {
  "use strict";

  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //

  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $("a").each(function () {
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
          scrollTop: target.offset().top - 80,
        },
        500,
        "swing",
        function () {
          // window.location.hash = target.selector;
          $(document).on("scroll", onScroll);
        }
      );
  });

  function onScroll(event) {
    if ($(".home").length) {
      var scrollPos = $(document).scrollTop();
      $("nav ul li a").each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }

  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // ========================================================================= //

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 200) {
      $("#main-nav, #main-nav-subpage").slideDown(700);
      $("#main-nav-subpage").removeClass("subpage-nav");
      $('#scrollIcon').fadeOut();
    } else {
      $("#main-nav").slideUp(700);
      $("#main-nav-subpage").hide();
      $("#main-nav-subpage").addClass("subpage-nav");
      $('#scrollIcon').fadeIn();

    }
  });

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $(".responsive").on("click", function (e) {
    $(".nav-menu").slideToggle();
  });

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function () {
    typed.typed({
      strings: ["Developer.", "Student.", "Passionate.", "Autodidact."],
      typeSpeed: 100,
      loop: true,
    });
  });

  // ========================================================================= //
  //  Snake
  // ========================================================================= //

  var allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down",
    65: "a",
    66: "b",
  };

  // the 'official' Konami Code sequence
  var konamiCode = [
    "up",
    "up",
    "down",
    "down",
    "left",
    "right",
    "left",
    "right",
    "b",
    "a",
  ];

  // a variable to remember the 'position' the user has reached so far.
  var konamiCodePosition = 0;

  // add keydown event listener
  document.addEventListener("keydown", function (e) {
    // get the value of the key code from the key map
    var key = allowedKeys[e.keyCode];
    // get the value of the required key from the konami code
    var requiredKey = konamiCode[konamiCodePosition];

    // compare the key with the required key
    if (key == requiredKey) {
      // move to the next key in the konami code sequence
      konamiCodePosition++;

      // if the last key is reached, activate cheats
      if (konamiCodePosition == konamiCode.length) {
        activateCheats();
        konamiCodePosition = 0;
      }
    } else {
      konamiCodePosition = 0;
    }
  });

  function activateCheats() {
    window.location.pathname = "portfolio/snake.html";
  }
});
