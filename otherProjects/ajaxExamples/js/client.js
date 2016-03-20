$(document).ready(function() {
  $("#getClients").on("click", function() {

    var url = "http://JennaPewPew.github.io/otherProjects/ajaxExamples/jsonDatabase/clients.json"
    $.getJSON(url, function(data) {
      var html = "<table class='table table-hover table-striped table-responsive'>" +
        "<tr><th>Name</th><th>Email</th><th>Company</th></tr>";


      $.each(data, function(index, item) {
        html += "<tr>" +
         "<td>" + item.name + "</td>" +
         "<td>" + item.email + "</td>" +
         "<td>" + item.company + "</td>"+
         "</tr>";
      })

      html + "</div>";
      $("#data").append(html);
    })
  })
})
