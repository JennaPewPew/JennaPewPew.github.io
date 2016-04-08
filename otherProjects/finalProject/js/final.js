$(document).ready(function() {
  console.log("Hi Mark!");
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
    if (partial == "home") { // if the home nav is clicked do this script
      $.get("partials/home.html", function(data) {
        $("#pageContent").html(data)
        $('.carousel').carousel();//makes carosel work
      })
    } else if (partial == "pg2") {// if listng nac is clicked do this script
      $.getJSON("jsonDatabase/final.json", function(data) {

    var html = "";

    $.each(data, function(index, item) { // oragnaizes the JSON Elements into html elements to be displayed on the screen
        html += '<div class="col-md-4" col-xs-10 col-xs-offset-1 >' +
          '<div class="city">' + "  "+ item.city + '</div>' +
          '<div class="style">Style:' + "  "+ item.style + '</div>' +
          '<div class="price">Cost:'+ "  " + item.price + '</div>' +
          '<img class="image" src="' + item.image + '"/>' +

          '</div>'; //col-md-4
      }) // end each listing div

    $("#pageContent").html(html); // print info to screen
  }) //getJSON


} else if (partial == "pg3") { //if the book nav is clicked do this script
      $.get("partials/orderPage.html", function(order) {
        $("#pageContent").html(order)
        $(document).ready(function() {
          $(".hide-name").hide(); //hides the astrixs
          $(".hide-email").hide();
          $(".hide-accomadations").hide();
          $(".hide-start-date").hide();
          $(".hide-end-date").hide();

          $('#startRentDate, #endRentDate').datepicker({});// puts in a datepicker
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
            $("#mySelect").on("change", function() { // appends/changes the message underneath the select box depending on what is selected
              $("#log").append("<br/>Change Selection")
            });
            $("#myLocation").on("change", function() { // appends/changes the message underneath the select box depending on what is selected
              $("#log").append("<br/>Change Location")
            });

          $("#myButton").on("mouseenter", function() {
              $("#log").append("<br/>Button Mouse Enter")
              $(this).text("Click Here") // changes button text to click here once mouse hovers over button
            })
            .on("mouseleave", function() {
              $("#log").append("<br/>Button Mouse Leave")
              $(this).text("Book Now") // reverts changes once mouse leaves button
            });



          $("#myButton").on("click", function() { // when the button is clicked

            if(document.getElementById("startRentDate").value == ""){
              alert("You forgot to pick a date")//shows red error asterix and alerts the user that they forgot to fill in a mandatory field
              $(".hide-start-date").show();
              return false;
            }
            else if(document.getElementById("endRentDate").value == ""){
              alert("You forgot to pick a date")//shows red error asterix and alerts the user that they forgot to fill in a mandatory field
              $(".hide-end-date").show();
              return false;
            }
            else if(document.getElementById("mySingleLineText").value == ""){
              alert("You forgot to enter your name")//shows red error asterix and alerts the user that they forgot to fill in a mandatory field
              $(".hide-name").show();
              return false;
            }

            else if (document.getElementById("mySingleLineText2").value == "") {
              alert("You forgot to enter your email")//shows red error asterix and alerts the user that they forgot to fill in a mandatory field
              $(".hide-email").show();
              return false;
            }
            else if (document.getElementById("mySelect").value == "Select Accomadations") {
              alert("Please pick where you will stay")//shows red error asterix and alerts the user that they forgot to fill in a mandatory field
              $(".hide-accomadations").show();
              return false;
            }

            else{

              $(".hide-name").hide();//hides the red error asterixs once everything has been filled out correctly
              $(".hide-email").hide();
              $(".hide-accomadations").hide();
              $(".hide-start-date").hide();
              $(".hide-end-date").hide();

              //After the form has been completed hide button
              $(".hide-button").hide();

            $("#log").append("<br>User clicked the button!"); // log the values of the following object
            var userOrder = {}; // create new object
            userOrder.startRentDate = $("#startRentDate").val();
            userOrder.endRentDate = $("#endRentDate").val();
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


            // log all of these values onto the screen once the button is clicked in the form of a reciept
            $("#receipt").append("<h2> Reciept </h2>");
            $("#receipt").append(" Your Order has been proccessed, you have chosen:");
            $("#receipt").append("<br> Check in: " + userOrder.startRentDate);
            $("#receipt").append("<br> Check out: " + userOrder.endRentDate);
            $("#receipt").append("<br> City: " + userOrder.myRadio);
            $("#receipt").append("<br>Accomadations: " + userOrder.mySelect);
            $("#receipt").append("<br> Extra Features:" +" " + userOrder.myCheckValues.join());
            $("#receipt").append("<br>Additional Reqests: " + userOrder.myTextArea);
            $("#receipt").append("<br> Name and email: " + userOrder.myInput + " " + userOrder.myInput2);
            $("#receipt").append("<br> <div class='bottom-padding'>Please check your email for a confirmation receipt</div>");


            alert("send to databse: " + JSON.stringify(userOrder));// sends the user order to the database
            console.log(JSON.stringify(userOrder));

}
          });


        });

      })
    }


  }
  // begin the program, get the homepage
  getPartial("home"); // loads home page to screen
})
