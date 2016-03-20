$(document).ready(function() {
  $("#getClients").on("click", function() {

    var url = "http://JennaPewPew.github.io/otherProjects/ajaxExamples/jsonDatabase/clients2.json"
    $.getJSON(url, function(data) {
      var html = "<div class='col-md-4'>";


      $.each(data, function(index, item) {
        html += "<ul class= 'list-group'>" +
        "<li class='list-group-item bold'>" + item.name + "</li>" +
        "<li class='list-group-item'>" + item.make + "</li>" +
        "<li class='list-group-item'>" + item.model + "</li>" +
        "<li class='list-group-item'>" + item.year + "</li>"+
        "<li class='list-group-item'>" + item.color + "</li>"+
        "</ul>";
      })

      html + "</div>";
      $("#data").append(html);
    })
  })
})
