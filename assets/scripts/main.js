// Features Section
const featureItems = document.getElementsByClassName("features-item");

for (let i = 0; i < featureItems.length; ++i) {
  featureItems[i].onclick = function () {
    const featureItem_Active = document.getElementsByClassName(
      "features-item__active"
    );
    featureItem_Active[0]?.classList?.remove("features-item__active");

    featureItems[i].classList.add("features-item__active");
  };
}

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
