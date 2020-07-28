$(document).ready(function () {
    $("#design-image").click(function () {
      $("#design-image").toggle();
      $("#design").toggle();
    });
    $("#design").click(function () {
      $("#design").slideUp("2000");
      $("#design-image").slideDown("2000");
    });
  });
  
  $(document).ready(function () {
    $("#development-image").click(function () {
      $("#development-image").toggle();
      $("#development").toggle();
    });
    $("#development").click(function () {
      $("#development").slideUp("2000");
      $("#development-image").slideDown("2000");
    });
  });

  $(document).ready(function () {
    $("#product-image").click(function () {
      $("#product-image").toggle();
      $("#product").toggle();
    });
    $("#product").click(function () {
      $("#product").slideUp("2000");
      $("#product-image").slideDown("2000");
    });
  });
$("form").submit(function(){
    alert("Submitted");
});