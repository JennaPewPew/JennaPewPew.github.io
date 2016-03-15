//get the file (replace with your own url)
$.get("http://JennaPewPew.github.io/partials/nav.html", function(data){
  $(document).ready(function(){
    $(".container").prepend(data);
  })
})
