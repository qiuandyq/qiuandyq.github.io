document.addEventListener("DOMContentLoaded", () => {
  const rightScrollable = document.getElementById("right-scrollable");
  const main = document.getElementById("main");
  const themeButton = document.getElementById("theme-button");
  const linkedinIcon = document.getElementById("linkedin-icon");
  const githubIcon = document.getElementById("github-icon");
  const emailIcon = document.getElementById("email-icon");
  const resumeIcon = document.getElementById("resume-icon");
  const bodyTag = document.getElementsByTagName("body")[0];
  const cardEl = document.querySelectorAll("a");

  themeButton.addEventListener("click", themeToggle);
  rightScrollable.addEventListener("wheel", (e) => e.preventDefault());
  main.addEventListener("wheel", (e) => scrollSpeed(e));
  linkedinIcon.addEventListener("mouseenter", (e) => enterIcon(e));
  linkedinIcon.addEventListener("mouseleave", (e) => leaveIcon(e));
  githubIcon.addEventListener("mouseenter", (e) => enterIcon(e));
  githubIcon.addEventListener("mouseleave", (e) => leaveIcon(e));
  emailIcon.addEventListener("mouseenter", (e) => enterIcon(e));
  emailIcon.addEventListener("mouseleave", (e) => leaveIcon(e));
  resumeIcon.addEventListener("mouseenter", (e) => enterIcon(e));
  resumeIcon.addEventListener("mouseleave", (e) => leaveIcon(e));

  function enterIcon(el) {
    anime.remove(el.target);
    anime({
      targets: el.target,
      scale: 1.075,
      duration: 800,
    });
  }

  function leaveIcon(el) {
    anime.remove(el.target);
    anime({
      targets: el.target,
      scale: 1,
      duration: 800,
    });
  }

  let isScrolling = false;
  let targetScroll = 0;

  function scrollSpeed(e) {
    targetScroll = rightScrollable.scrollTop + 1.5 * e.deltaY;

    if (!isScrolling) {
      smoothScroll();
    }
  }

  function smoothScroll() {
    isScrolling = true;

    const distance = targetScroll - rightScrollable.scrollTop;
    const speed = 15; // Adjust the speed as needed

    if (Math.abs(distance) <= speed) {
      rightScrollable.scrollTop = targetScroll;
      isScrolling = false;
      return;
    }

    rightScrollable.scrollTop += distance > 0 ? speed : -speed;

    requestAnimationFrame(smoothScroll);
  }

  // Additional event listener to stop animation on manual scrolling
  rightScrollable.addEventListener("scroll", () => {
    if (isScrolling) {
      isScrolling = false;
    }
  });

  function themeToggle() {
    const theme = document.documentElement.getAttribute("data-theme");
    const h1 = document.getElementsByTagName("h1");
    const h2 = document.getElementsByTagName("h2");
    const h3 = document.getElementsByTagName("h3");
    const p = document.getElementsByTagName("p");

    if (theme === "dracula") {
      document.documentElement.setAttribute("data-theme", "garden");
      themeButton.innerHTML = "Dark";
      anime({
        targets: bodyTag,
        background: "#ffffff",
        easing: "easeInOutQuad",
        duration: 800,
      });
      anime({
        targets: h1,
        color: "#000000",
        easing: "easeInOutQuad",
        duration: 800,
      });
      anime({
        targets: h2,
        color: "#6b7280",
        easing: "easeInOutQuad",
        duration: 800,
      });
      anime({
        targets: h3,
        color: "#374151",
        easing: "easeInOutQuad",
        duration: 800,
      });
      anime({
        targets: p,
        color: "#000000",
        easing: "easeInOutQuad",
        duration: 800,
      });
      var bgGray700Els = document.getElementsByClassName("hover:bg-gray-700"),
        i = bgGray700Els.length;
      while (i--) {
        bgGray700Els[i].classList.add("hover:bg-gray-300");
        bgGray700Els[i].classList.remove("hover:bg-gray-700");
      }
    } else {
      document.documentElement.setAttribute("data-theme", "dracula");
      themeButton.innerHTML = "Light";
      var bgGray300Els = document.getElementsByClassName("hover:bg-gray-300"),
        i = bgGray300Els.length;
      while (i--) {
        bgGray300Els[i].classList.add("hover:bg-gray-700");
        bgGray300Els[i].classList.remove("hover:bg-gray-300");
      }
      anime({
        targets: bodyTag,
        background: "#282a36",
        easing: "easeInOutQuad",
        duration: 800,
      });
      anime({
        targets: h1,
        color: "#ffffff",
        easing: "easeInOutQuad",
        duration: 800,
      });
      anime({
        targets: h2,
        color: "#9ca3af",
        easing: "easeInOutQuad",
        duration: 800,
      });
      anime({
        targets: h3,
        color: "#d1d5db",
        easing: "easeInOutQuad",
        duration: 800,
      });
      anime({
        targets: p,
        color: "#ffffff",
        easing: "easeInOutQuad",
        duration: 800,
      });
    }
  }

  function animateCard(el, scale, duration, elasticity) {
    anime.remove(el);
    anime({
      targets: el,
      scale: scale,
      duration: duration,
      elasticity: elasticity,
    });
  }

  function enterCard(el) {
    animateCard(el, 1.0275, 800, 400);
  }

  function leaveCard(el) {
    animateCard(el, 1.0, 600, 300);
  }

  for (var i = 0; i < cardEl.length; i++) {
    cardEl[i].addEventListener(
      "mouseenter",
      function (e) {
        enterCard(e.target);
      },
      false
    );

    cardEl[i].addEventListener(
      "mouseleave",
      function (e) {
        leaveCard(e.target);
      },
      false
    );
  }

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

  function lines() {
    //random width size
    let sizeW = Math.random() * 6;
    //duration for animation
    let duration = Math.random() * 3;
    let color = getrandomcolor();

    let div = document.createElement("div");
    div.setAttribute("class", "circle");
    document.body.appendChild(div);
    div.style.width = 2 + sizeW + "px";
    div.style.left = getRandomIntInclusive(-innerWidth, innerWidth) + "px";
    div.style.animationDuration = 2 + duration + "s";
    div.style.background = color;
    div.style.aspectRatio = 1 / getRandomIntInclusive(5, 15);
    div.style.zIndex = 0;

    //remove
    setTimeout(function () {
      document.body.removeChild(div);
    }, 5000);
  }

  // setInterval(function () {
  //   lines();
  // }, 50);

  function getrandomcolor() {
    let letters = "0123456789ABCDEF";
    let color = "#";

    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }
});
