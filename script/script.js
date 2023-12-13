function scrollOverlay() {
  if (screen.width > 768){
    var scrollPosition = window.scrollY;

    var overlay = document.getElementById("overlay");
    var background = document.getElementById("background");

    var overlay_pos = overlay.getBoundingClientRect().bottom;
    var background_pos = background.getBoundingClientRect().bottom;

    /*var menu = document.getElementsByClassName("menu-container")[0];*/
    /*var index_main = document.getElementsByClassName("index_main")[0];*/
    var index_main = document.getElementById("index_main");

    var h = window.innerHeight;
    

    overlay.style.transform = "translate(0px, " + (-scrollPosition) + "px)";

    if (overlay_pos < 0) {
      background.style.transform = "translate(0px, " + (h - (scrollPosition)) + "px)";
    }
  }
  
}

document.addEventListener("scroll", function() {
  requestAnimationFrame(scrollOverlay);
});