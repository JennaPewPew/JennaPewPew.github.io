$("#getClients").on("click", function() {

  var url = "http://JennaPewPew.github.io/otherProjects/ajaxExamples/jsonDatabase/clients.json"
  $.getJSON(url, function(data) {
    alert(data);
    console.dir(data);

  })
})
