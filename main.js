import "./style.scss";
import "./node_modules/jquery/dist/jquery";
import "./node_modules/owl.carousel/dist/owl.carousel.js";
import "./node_modules/bootstrap/dist/js/bootstrap.bundle";
// import "./node_modules/bootstrap/js/src/";

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 32,
    dots: true,
    dotClass: "custom-dot",
    autoWidth: true,
    dotsEach: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
