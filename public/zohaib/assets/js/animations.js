(function ($) {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealObserver = null;

  /* ---- Enhanced preloader ---- */
  function hidePreloader() {
    var $preloader = $(".se-pre-con");
    if (!$preloader.length || $preloader.hasClass("is-hidden")) return;

    $("body").addClass("is-loaded page-ready");
    $preloader.addClass("is-hidden");
    setTimeout(function () {
      $preloader.remove();
      // Re-check reveals after paint so first-load scroll animations fire cleanly
      refreshVisibleReveals();
    }, 700);
  }

  function refreshVisibleReveals() {
    if (!revealObserver) return;
    document
      .querySelectorAll(".reveal-on-scroll, .reveal-left, .reveal-right, .reveal-scale, .reveal-group, .title")
      .forEach(function (el) {
        var rect = el.getBoundingClientRect();
        var inView = rect.top < window.innerHeight * 0.9 && rect.bottom > 80;
        if (inView && !el.classList.contains("is-visible") && !el.classList.contains("reveal-group")) {
          el.classList.add("is-visible");
        }
        if (inView && el.classList.contains("reveal-group")) {
          revealGroup(el);
        }
      });
  }

  function revealGroup(el) {
    if (el.dataset.revealed === "1") return;
    el.dataset.revealed = "1";
    el.classList.add("is-visible");
    var children = el.querySelectorAll(".reveal-child");
    children.forEach(function (child, index) {
      setTimeout(function () {
        child.classList.add("is-visible");
      }, index * 100);
    });
  }

  /* ---- Scroll reveal with stagger ---- */
  function initScrollReveal() {
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      $(".reveal-on-scroll, .reveal-child, .reveal-left, .reveal-right, .reveal-scale, .reveal-group").addClass("is-visible");
      $(".title").addClass("is-visible");
      return;
    }

    revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;

          if (el.classList.contains("reveal-group")) {
            revealGroup(el);
          } else {
            el.classList.add("is-visible");
          }

          revealObserver.unobserve(el);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );

    document
      .querySelectorAll(".reveal-on-scroll, .reveal-left, .reveal-right, .reveal-scale, .reveal-group, .title")
      .forEach(function (el) {
        revealObserver.observe(el);
      });
  }

  /* ---- Auto-tag elements for reveal ---- */
  function markRevealTargets() {
    // Hero uses page-ready CSS animation after preloader

    $(".about-area .thumb").addClass("reveal-on-scroll reveal-left");
    $(".about-area .about-text").addClass("reveal-on-scroll reveal-right");

    $(".services-area .title").addClass("reveal-on-scroll");
    $(".services-grid").addClass("reveal-group");
    $(".service-card").addClass("reveal-child");
    $(".services-items .row").addClass("reveal-group");
    $(".services-items .item").addClass("reveal-child");

    $(".experiance-area .title").addClass("reveal-on-scroll");
    $(".experience-timeline").addClass("reveal-group");
    $(".experience-item").addClass("reveal-child");
    $(".timeline").addClass("reveal-group");
    $(".timeline .entry").addClass("reveal-child");

    $(".certifications-area .title").addClass("reveal-on-scroll");
    $(".certifications-swiper").addClass("reveal-on-scroll");

    $(".fun-factor-area .row").addClass("reveal-group");
    $(".fun-factor-area .item").addClass("reveal-child reveal-scale");

    $(".portfolio-area .title").addClass("reveal-on-scroll");
    $(".work-filters").addClass("reveal-on-scroll");
    $(".work-list").addClass("reveal-group");
    $(".work-card").addClass("reveal-child");

    $(".contact-form-area .title").addClass("reveal-on-scroll");
    $(".contact-aside").addClass("reveal-group");
    $(".contact-aside-card").addClass("reveal-child");
    $(".contact-panel").addClass("reveal-on-scroll");

    $("footer").addClass("reveal-on-scroll");
  }

  /* ---- Navbar shrink + active section (scroll spy) ---- */
  function initNavScroll() {
    var $nav = $("nav.navbar");
    var $links = $(".navbar-nav a.smooth-menu");
    var $items = $(".navbar-nav > li");
    var sectionIds = [];
    var navLock = false;

    $links.each(function () {
      var href = $(this).attr("href");
      if (href && href.charAt(0) === "#" && $(href).length) {
        sectionIds.push(href);
      }
    });

    function setActive(id) {
      $links.removeClass("active");
      $items.removeClass("active");
      var $match = $links.filter('[href="' + id + '"]');
      $match.addClass("active");
      $match.parent("li").addClass("active");
    }

    function updateShrink() {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > 40) {
        $nav.addClass("navbar-shrink");
        $nav.removeClass("no-background");
      } else {
        $nav.removeClass("navbar-shrink");
        $nav.addClass("no-background");
      }
    }

    function getCurrentSection() {
      var scrollTop = $(window).scrollTop();
      var offset = 120;
      var current = sectionIds[0] || "#home";

      for (var i = 0; i < sectionIds.length; i++) {
        var $section = $(sectionIds[i]);
        if (!$section.length) continue;
        var top = $section.offset().top - offset;
        if (scrollTop >= top) {
          current = sectionIds[i];
        }
      }

      if (window.innerHeight + scrollTop >= document.documentElement.scrollHeight - 40) {
        current = "#contact";
      }

      return current;
    }

    function onScroll() {
      updateShrink();
      if (navLock) return;
      setActive(getCurrentSection());
    }

    // Expose lock helpers for smooth-scroll clicks
    window.__zkNav = {
      lock: function () {
        navLock = true;
        $("body").addClass("nav-scrolling");
      },
      unlock: function (id) {
        navLock = false;
        $("body").removeClass("nav-scrolling");
        if (id) setActive(id);
        else setActive(getCurrentSection());
      },
      setActive: setActive,
    };

    $(window).on("scroll", onScroll);
    onScroll();

    // Browser scroll restoration can land mid-page after ready
    $(window).on("load pageshow", function () {
      onScroll();
    });
  }

  /* ---- Smooth anchor scroll ---- */
  function initSmoothScroll() {
    $('a.smooth-menu[href^="#"]').on("click", function (e) {
      var href = this.getAttribute("href");
      var target = $(href);
      if (!target.length) return;
      e.preventDefault();

      if (window.__zkNav) {
        window.__zkNav.lock();
        window.__zkNav.setActive(href);
      } else {
        $(".navbar-nav a.smooth-menu").removeClass("active");
        $(".navbar-nav > li").removeClass("active");
        $(this).addClass("active").parent("li").addClass("active");
      }

      // Drop sticky :hover highlight after click
      if (this.blur) this.blur();

      $("html, body").stop().animate(
        { scrollTop: Math.max(0, target.offset().top - 70) },
        prefersReducedMotion ? 0 : 420,
        "easeOutCubic",
        function () {
          if (window.__zkNav) window.__zkNav.unlock(href);
        }
      );

      // Close mobile menu if open
      if ($("#navbar-menu").hasClass("in") || $("#navbar-menu").hasClass("show") || $("#navbar-menu").is(":visible")) {
        $(".navbar-toggle").trigger("click");
      }
    });
  }

  /* ---- Button interactions ---- */
  function initRipple() {
    if (prefersReducedMotion) return;

    var $buttons = $(".zk-btn, .work-filter, .nav-cta-btn");

    $buttons.each(function () {
      if (!$(this).find(".zk-btn-glow").length && ($(this).hasClass("zk-btn") || $(this).hasClass("nav-cta-btn"))) {
        $(this).prepend('<span class="zk-btn-glow" aria-hidden="true"></span>');
      }
    });

    $buttons.on("pointermove", function (e) {
      var $btn = $(this);
      var offset = $btn.offset();
      var x = e.pageX - offset.left;
      var y = e.pageY - offset.top;
      $btn.find(".zk-btn-glow").css({ left: x + "px", top: y + "px" });
    });

    $buttons.on("click", function (e) {
      var $btn = $(this);
      var offset = $btn.offset();
      var x = e.pageX - offset.left;
      var y = e.pageY - offset.top;
      var $ripple = $('<span class="btn-ripple"></span>').css({ left: x, top: y });
      $btn.append($ripple);
      $btn.addClass("is-pressing");
      setTimeout(function () {
        $ripple.remove();
        $btn.removeClass("is-pressing");
      }, 650);
    });
  }

  /* ---- Portfolio / work filter ---- */
  function initFilterAnimation() {
    $(".work-filter").on("click", function () {
      var filter = $(this).data("filter");
      $(".work-filter").removeClass("current");
      $(this).addClass("current");

      $(".work-card").each(function () {
        var $card = $(this);
        if (filter === "*" || $card.hasClass(filter)) {
          $card.removeClass("is-hidden");
        } else {
          $card.addClass("is-hidden");
        }
      });
    });
  }

  /* ---- Card pointer glow + tilt (Services + Recent Work) ---- */
  function initServiceTilt() {
    if (prefersReducedMotion) return;
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    $(".service-card, .work-card").each(function () {
      var $card = $(this);
      if (!$card.find(".service-glow").length) {
        $card.prepend('<span class="service-glow" aria-hidden="true"></span>');
      }

      $card.on("pointerenter", function () {
        $card.addClass("is-glowing");
      });

      $card.on("pointermove", function (e) {
        var rect = this.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        var rx = ((y / rect.height) - 0.5) * -6;
        var ry = ((x / rect.width) - 0.5) * 6;

        this.style.setProperty("--glow-x", x + "px");
        this.style.setProperty("--glow-y", y + "px");

        $card.addClass("is-active-tilt").css({
          transform: "translateY(-10px) rotateX(" + rx + "deg) rotateY(" + ry + "deg)",
        });
      });

      $card.on("pointerleave", function () {
        $card.removeClass("is-active-tilt is-glowing").css({ transform: "" });
      });
    });
  }

  /* ---- Certifications Swiper (autoplay, pause on hover) ---- */
  function initCertificationsSwiper() {
    if (typeof Swiper === "undefined") return;
    if (!$(".certifications-swiper").length) return;

    var certSwiper = new Swiper(".certifications-swiper", {
      loop: true,
      speed: 700,
      spaceBetween: 18,
      slidesPerView: 1,
      watchSlidesProgress: true,
      autoplay: {
        delay: 2800,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: ".cert-swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        576: { slidesPerView: 1.15 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
      },
    });

    // Extra guarantee: stop on hover, resume on leave
    $(".certifications-swiper")
      .on("mouseenter", function () {
        if (certSwiper.autoplay) certSwiper.autoplay.stop();
      })
      .on("mouseleave", function () {
        if (certSwiper.autoplay) certSwiper.autoplay.start();
      });
  }

  /* ---- Fixed hero: hide once scrolled past ---- */
  function initHeroParallax() {
    var shell = document.querySelector(".hero-shell");
    var media = document.querySelector(".hero-shell .hero-media");
    if (!shell || !media) return;

    var sync = function () {
      var past = shell.getBoundingClientRect().bottom <= 0;
      media.style.opacity = past ? "0" : "1";
      media.style.visibility = past ? "hidden" : "visible";
      media.style.pointerEvents = "none";
    };

    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync, { passive: true });
    sync();
  }

  $(document).ready(function () {
    markRevealTargets();
    initScrollReveal();
    initNavScroll();
    initSmoothScroll();
    initRipple();
    initFilterAnimation();
    initServiceTilt();
    initCertificationsSwiper();
    initHeroParallax();

    if (!$(".loader-inner").length) {
      $(".se-pre-con").html(
        '<div class="loader-inner">' +
          '<div class="loader-spinner"></div>' +
          '<p class="loader-text">Zohaib Khan</p>' +
          '<div class="loader-bar"><span></span></div>' +
        "</div>"
      );
    }
  });

  $(window).on("load", function () {
    setTimeout(hidePreloader, prefersReducedMotion ? 0 : 450);
  });

  setTimeout(hidePreloader, 5000);
})(jQuery);
