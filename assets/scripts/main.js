// Header
const headerFormGroup = document.getElementById("header-form-group");
const search = document.getElementById("search");

headerFormGroup.onclick = function () {
  search.focus();
};

const toggleThemeBtn = document.getElementById("toggle-theme");

toggleThemeBtn.onclick = function () {
  toggleThemeBtn.classList.toggle("fa-moon");
  toggleThemeBtn.classList.toggle("fa-sun");
};

const toggleMenuBtn = document.getElementById("toggle-menu");
const headerNav = document.getElementById("header-nav");

toggleMenuBtn.onclick = function () {
  console.log("Hello");
  console.log(headerNav);
  headerNav.classList.toggle("header-nav--active");
};

// Carousel section
$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// Features Section
const featureItems = document.getElementsByClassName("features-item");

for (let i = 0; i < featureItems.length; ++i) {
  featureItems[i].onfocus = function () {
    featureItems[i].classList.toggle("features-item__active");
  };

  featureItems[i].onclick = function () {
    featureItems[i].focus();
  };

  featureItems[i].onblur = function () {
    featureItems[i].classList.toggle("features-item__active");
  };
}

// Products Section
lightGallery(document.getElementById("animated-thumbnails"), {
  plugins: [lgZoom, lgThumbnail],
  exThumbImage: "data-exthumbimage",
  selector: ".product-item__link",
});

// Testimonials Section
$(document).ready(function () {
  $(".testimonials-carousel").slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});

const testimonialsCarousel = document.querySelector(".testimonials-carousel");

testimonialsCarousel.onmousedown = function () {
  testimonialsCarousel.style.cursor = "grab";
};

testimonialsCarousel.onmouseup = function () {
  testimonialsCarousel.style.cursor = "default";
};
