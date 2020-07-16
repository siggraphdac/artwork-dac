var image = document.getElementsByClassName("custom-logo")[0];
var originalImageSrc = document.getElementsByClassName("custom-logo")[0].src;
var originalImageSrcSet = document.getElementsByClassName("custom-logo")[0].srcset;


window.onload = function () {
  if (window.innerWidth < 590) {
      image.setAttribute("src", "https://via.placeholder.com/150");
      image.setAttribute("srcset", "");
  } else {
      image.setAttribute("src", originalImageSrc);
      image.setAttribute("srcset", originalImageSrcSet);
  }
}

window.onresize = function () {
  if (window.innerWidth < 590) {
      image.setAttribute("src", "https://via.placeholder.com/150");
      image.setAttribute("srcset", "");
  } else {
      image.setAttribute("src", originalImageSrc);
      image.setAttribute("srcset", originalImageSrcSet);
  }
}