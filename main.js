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

const videoUrl =
  "https://www.youtube.com/embed/_bVjz_OM29A?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com";

const videoContainer = document.querySelector("#video");
const videoDialog = document.querySelector("#video-dialog");
const videoFrame = document.querySelector("#frame");

videoContainer.addEventListener("click", () => {
  videoDialog.showModal();
  videoFrame.src = videoUrl;
});

function onClick(event) {
  if (event.target === videoDialog) {
    dialog.close();
    videoFrame.src = "#";
  }
}

const dialog = document.querySelector("#video-dialog");
dialog.addEventListener("click", onClick);
dialog.showModal();
