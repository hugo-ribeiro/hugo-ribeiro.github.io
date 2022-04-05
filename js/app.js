var scrollUpButton = document.getElementById("scrollUp");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    showScrollUpButton();
};

function showScrollUpButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUpButton.style.display = "block";
  } else {
    scrollUpButton.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}