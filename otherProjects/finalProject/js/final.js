$(document).ready(function() {
  //all the nav li, add click event
  $(".nav").find("li").on("click", function() {
      //remove all active class
      $(".nav").find("li").removeClass("active");
      //add active class to clicked li
      $(this).addClass("active");

      var page = $(this).attr("id");
      getPartial(page);
    }) // click
  function getPartial(partial) {
    if (partial == "home") {
      $.get("partials/home.html", function(data) {
        $("#pageContent").html(data)
      })
    } else if (partial == "pg2") {

    } else if (partial == "pg3") {
      $.get("partials/orderPage.html", function(order) {
        $("#pageContent").html(order)
      })
    }


  }
  // begin the program, get the homepage
  getPartial("home");
})
