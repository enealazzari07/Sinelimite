document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
      var expanded = links.classList.contains("open");
      toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    });

    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("open");
      });
    });
  }

  // Hero: reveal the darker sketch lines in a circle around the cursor.
  var hero = document.querySelector(".hero");
  var draw = hero && hero.querySelector(".hero-draw");
  var finePointer = window.matchMedia("(hover: hover) and (min-width: 861px)");

  if (hero && draw && finePointer.matches) {
    hero.addEventListener("mousemove", function (event) {
      var box = hero.getBoundingClientRect();
      draw.style.setProperty("--mx", event.clientX - box.left + 30 + "px");
      draw.style.setProperty("--my", event.clientY - box.top + 30 + "px");
      hero.classList.add("is-drawing");
    });

    hero.addEventListener("mouseleave", function () {
      hero.classList.remove("is-drawing");
    });
  }
});
