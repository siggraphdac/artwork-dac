var image = document.getElementsByClassName("custom-logo")[0];
var originalImageSrc = document.getElementsByClassName("custom-logo")[0].src;
var originalImageSrcSet = document.getElementsByClassName("custom-logo")[0].srcset;


window.onload = function () {
  if (window.innerWidth < 590) {
      image.setAttribute("src", "https://digital-power.siggraph.org/wp-content/uploads/2020/07/digital_power_sq_logo.png");
      image.setAttribute("srcset", "");
  } else {
      image.setAttribute("src", originalImageSrc);
      image.setAttribute("srcset", originalImageSrcSet);
  }
}

window.onresize = function () {
  if (window.innerWidth < 590) {
      image.setAttribute("src", "https://digital-power.siggraph.org/wp-content/uploads/2020/07/digital_power_sq_logo.png");
      image.setAttribute("srcset", "");
  } else {
      image.setAttribute("src", originalImageSrc);
      image.setAttribute("srcset", originalImageSrcSet);
  }
}