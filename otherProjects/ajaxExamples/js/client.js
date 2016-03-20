$(document).ready(function() {
  $("#getClients").on("click", function() {

    var url = "http://JennaPewPew.github.io/otherProjects/ajaxExamples/jsonDatabase/clients.json"
    $.getJSON(url, function(data) {
      var html = "<ul class='list-group'>";


      $.each(data, function(index, item) {
        html +=
        "<li class='list-group-item'>" + item.name + "</li>" +
        "<li class='list-group-item'>" + item.email + "</li>" +
        "<li class='list-group-item'>" + item.company + "</li>"
        +"<br/>";
      })

      html + "</ul>";
      $("#data").append(html);
    })
  })
})
