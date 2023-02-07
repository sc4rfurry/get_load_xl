$(document).ready(function() {
    $('.github-link').click(function() {
        window.location.href = "https://github.com/sc4rfurry/load_xl";
      });
      
    $(".github-link").hover(function() {
      $(this).animate({
        backgroundColor: "#fff",
        color: "#333"
      }, 300);
    }, function() {
      $(this).animate({
        backgroundColor: "#333",
        color: "#fff"
      }, 300);
    });
  });
  