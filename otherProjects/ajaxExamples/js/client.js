$(document).ready(function() {
  $("#getClients").on("click", function() {

    var url = "http://JennaPewPew.github.io/otherProjects/ajaxExamples/jsonDatabase/clients.json"
    $.getJSON(url, function(data) {
        $.each(data, function(index, item){
            $("#data").append(item.name)

        })
    })
  })
})
