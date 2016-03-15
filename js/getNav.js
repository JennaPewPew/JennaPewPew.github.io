//get the file (replace with your own url)
$.get("http://JennaPewPew.github.io/partials/nav.html", function(data){
  $(document).ready(function(){
    $(".container").prepend(data);
  })
})
$.get("http://JennaPewPew.github.io/partials/footer.html",function(foot){
  $(document).ready(function(){
    $(".container").append(foot);
      $(".container").fadeIn();
  })  
})
