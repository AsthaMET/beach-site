// active nav
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY >= 50) {
    nav.classList.add("active_nav");
  } else {
    nav.classList.remove("active_nav");
  }
});

// menu
document.addEventListener("DOMContentLoaded", () => {
  const btn = menuButton;
  const menu = mobileMenu;
  const open = menuIcon;
  const close = closeIcon;

  const toggleMenu = (isOpen) => {
    menu.classList.toggle("-translate-x-full", !isOpen);
    menu.classList.toggle("translate-x-0", isOpen);

    open.classList.toggle("hidden", isOpen);
    close.classList.toggle("hidden", !isOpen);
  };

  btn.onclick = (e) => {
    e.stopPropagation();
    toggleMenu(menu.classList.contains("-translate-x-full"));
  };

  document.onclick = (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      toggleMenu(false);
    }
  };

  menu
    .querySelectorAll("a")
    .forEach((a) => (a.onclick = () => toggleMenu(false)));
});

// serch
document.addEventListener("DOMContentLoaded", () => {
  const searchIcon = document.getElementById("search-icon");
  const searchBox = document.getElementById("search-box");

  searchIcon.addEventListener("click", () => {
    searchBox.classList.toggle("hidden");
  });
  document.addEventListener("click", (event) => {
    if (
      !searchBox.contains(event.target) &&
      !searchIcon.contains(event.target)
    ) {
      searchBox.classList.add("hidden");
    }
  });
});

//welcome-to-our-facility slider
document.addEventListener("DOMContentLoaded", () => {
  var swiper = new Swiper(".our-facility-swiper", {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    loopedSlides: 5,
    slidesPerView: 1.1,
    spaceBetween: 20,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
});

// our-team-member slider
document.addEventListener("DOMContentLoaded", () => {
  var swiper = new Swiper(".team-member-Swiper", {
    loop: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    slidesPerView: "auto",
    spaceBetween: 20,
    breakpoints: {
      640: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
    },
  });
});

//
document.addEventListener("DOMContentLoaded", () => {
  var swiper = new Swiper(".testonomial", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    slidesPerView: 1,
    spaceBetween: 20,
  });
});
