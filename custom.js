var image = document.getElementsByClassName("custom-logo")[0];
var originalImageSrc = document.getElementsByClassName("custom-logo")[0].src;
var originalImageSrcSet = document.getElementsByClassName("custom-logo")[0].srcset;


window.onload = function () {
  if (window.innerWidth < 600) {
    image.setAttribute("src", "https://digital-power.siggraph.org/wp-content/uploads/2020/07/digital_power_sq_logo.png");
    image.setAttribute("srcset", "");
    document.getElementById("navbar").style.display = "none";
  }

  if (window.innerWidth > 600) {
    image.setAttribute("src", originalImageSrc);
    image.setAttribute("srcset", originalImageSrcSet);
  }

  if (window.innerWidth < 805 && window.innerWidth > 600) {
      document.getElementById("navbar").style.display = "none";
  }

  if (window.innerWidth > 805) {
    document.getElementById("navbar").style.display = "block";
  }

}

window.onresize = function () {
  if (window.innerWidth < 600) {
    image.setAttribute("src", "https://digital-power.siggraph.org/wp-content/uploads/2020/07/digital_power_sq_logo.png");
    image.setAttribute("srcset", "");
    document.getElementById("navbar").style.display = "none";
  }

  if (window.innerWidth > 600) {
    image.setAttribute("src", originalImageSrc);
    image.setAttribute("srcset", originalImageSrcSet);
  }

  if (window.innerWidth < 805 && window.innerWidth > 600) {
      document.getElementById("navbar").style.display = "none";
  }

  if (window.innerWidth > 805) {
    document.getElementById("navbar").style.display = "block";
  }
}