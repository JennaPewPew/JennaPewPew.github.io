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
      $(this).css("background-color", "#FFC3E1")
    })
    .on("blur", function() {
      $("#log").append("<br/>Input Change")
      $(this).css("background-color", "#FFFFFF")
    });


      $("#myButton").on("mouseenter", function() {
        $("#log").append("<br/>Button Mouse Enter")
          $(this).text("Order Now!!")
        })
        .on("mouseleave", function() {
          $("#log").append("<br/>Button Mouse Leave")
            $(this).text("Click Me!")
        });

  $("#mySelect").on("change", function() {
      $("#log").append("<br/>Change Selection")
    var val = $(this).val();
    $("#mySelectMessage").html(val + " Nice selection!");
  });

  $("#myButton").on("click", function() {

    var myInput = $("#mySingleLineText").val();
    var myTextarea = $("#myTextArea").val();
    var mySelect = $("#mySelect").val();
    var myRadio = $("[name='gender']:checked").val();

    var myCheckValues = [];
    //each is a jquery loop for objects/arrays
    $("[name='vehicle']:checked").each(function() {

      myCheckValues.push($(this).val());
    });

    $("#log").append("<br>User clicked the button!");

    $("#log").append("<br>User clicked the button: " + myInput);
    $("#log").append("<br>Value of textarea is: " + myTextarea);
    $("#log").append("<br>Value of select is: " + mySelect);
    $("#log").append("<br>Value of radio button is: " + myRadio);
    $("#log").append("<br> Value of check is: " + myCheckValues.join());

  });


});
