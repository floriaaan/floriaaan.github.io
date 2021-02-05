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
      $("#scrollIcon").fadeOut();
    } else {
      $("#main-nav").slideUp(700);
      $("#main-nav-subpage").hide();
      $("#main-nav-subpage").addClass("subpage-nav");
      $("#scrollIcon").fadeIn();
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
    window.location.pathname = "snake.html";
  }
});

// ========================================================================= //
//  PWA
// ========================================================================= //

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log(err));
  });
}

// ========================================================================= //
//  DARKMODE
// ========================================================================= //

let darkMode_match =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
if (localStorage.getItem("theme") === "dark") {
  darkMode_match = true;
} else if (localStorage.getItem("theme") === "light") {
  darkMode_match = false;
}

const darkModeElement = document.getElementById("darkMode");
darkModeElement.addEventListener("click", onDarkModeChange);
darkModeElement.innerHTML = darkMode_match ? "#dark" : "#light";

function createDarkModeLink() {
  if (!darkMode_match) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "css/darkmode.css";
    link.id = "darkModeLink";
    document.getElementsByTagName("head")[0].appendChild(link);
  }
}

function init() {
  console.log(darkMode_match);
  if (!darkMode_match) {
    darkModeElement.innerHTML = darkMode_match ? "#dark" : "#light";
    createDarkModeLink();
  }
}
init();

function onDarkModeChange() {
  darkMode_match = darkModeElement.innerHTML === "#dark";
  if (!darkMode_match) {
    createDarkModeLink();
    darkModeElement.innerHTML = "#dark";
  } else {
    let link = document.getElementById("darkModeLink");
    link.parentNode.removeChild(link);
    darkModeElement.innerHTML = "#light";
  }
  localStorage.setItem("theme", darkMode_match ? "dark" : "light");
}
