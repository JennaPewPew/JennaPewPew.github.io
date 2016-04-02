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
        $('.carousel').carousel();
      })
    } else if (partial == "pg2") {
      $.getJSON("jsonDatabase/final.json", function(data) {

    var html = "";

    $.each(data, function(index, item) {
        html += '<div class="col-md-4">' +
          '<div class="city">' + "  "+ item.city + '</div>' +
          '<div class="style"><small>Accomadation Style</small>' + "  "+ item.style + '</div>' +
          '<div class="price"><small>Cost</small>'+ "  " + item.price + '</div>' +
          '<img class="image" src="' + item.image + '"/>' +

          '</div>'; //col-md-4
      }) //each cat

    $("#pageContent").html(html);
  }) //getJSON


    } else if (partial == "pg3") {
      $.get("partials/orderPage.html", function(order) {
        $("#pageContent").html(order)
        $(document).ready(function() {
          /*
          click - done
          focus -
          blur -
          change -
          ouseenter & mouseleave -
          */

          $("#mySingleLineText").on("focus", function() {
              $("#log").append("<br/>Input Focus")
              $(this).css("background-color", "#EAF9E0") //changes the color of the input box when focuses
            })
            .on("blur", function() {
              $("#log").append("<br/>Input Change")
              $(this).css("background-color", "#FFFFFF") // reverts color back once no longer focuses
            });

          $("#mySingleLineText2").on("focus", function() {
              $("#log").append("<br/>Input Focus")
              $(this).css("background-color", "#EAF9E0") // same as above
            })
            .on("blur", function() {
              $("#log").append("<br/>Input Change")
              $(this).css("background-color", "#FFFFFF") // same as above
            });


          $("#myButton").on("mouseenter", function() {
              $("#log").append("<br/>Button Mouse Enter")
              $(this).text("Click Here") // changes button text to click here once mouse hovers over button
            })
            .on("mouseleave", function() {
              $("#log").append("<br/>Button Mouse Leave")
              $(this).text("Add To Cart") // reverts changes once mouse leaves button
            });



          $("#myButton").on("click", function() { // when the button is clicked

            /*

                var myInput = $("#mySingleLineText").val();
                var myInput2 = $("#mySingleLineText2").val();
                var myTextArea = $("#myTextArea").val();
                var mySelect = $("#mySelect").val();
                var myRadio = $("[name='color']:checked").val();
            */


            $("#log").append("<br>User clicked the button!"); // log the values of the following object
            var userOrder = {}; // create new object
            userOrder.myInput = $("#mySingleLineText").val();
            userOrder.myInput2 = $("#mySingleLineText2").val();
            userOrder.myTextArea = $("#myTextArea").val();
            userOrder.mySelect = $("#mySelect").val();
            userOrder.myRadio = $("[name='location']:checked").val();
            userOrder.myCheckValues = [];

            //each is a jquery loop for objects/arrays
            $("[name='extra']:checked").each(function() {

              userOrder.myCheckValues.push($(this).val()); // pushes the values of each function onto the screen
            });


            // log all of these values onto the screen once the button is clicked
            $("#receipt").append("<br> Your Order has been proccessed, you have chosen:");
            $("#receipt").append("<br> City: " + userOrder.myRadio);
            $("#receipt").append("<br>Accomadations: " + userOrder.mySelect);
            $("#receipt").append("<br> Extra Features"  + userOrder.myCheckValues.join());
            $("#receipt").append("<br>Additional Reqests: " + userOrder.myTextArea);
            $("#receipt").append("<br> Name and email: " + userOrder.myInput + " " + userOrder.myInput2);
            $("#receipt").append("<br> Please check your email for a confirmation receipt");


            alert("send to databse: " + JSON.stringify(userOrder));
          });


        });

      })
    }


  }
  // begin the program, get the homepage
  getPartial("home");
})
