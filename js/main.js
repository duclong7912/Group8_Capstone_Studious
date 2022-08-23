    $(document).ready( function(){
        document.getElementById("icon").onclick = function() {
            document.getElementById("myBody").classList.toggle("dark");
        };
    })


  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $("header").addClass("nav_fixed");
    } else {
      $("header").removeClass("nav_fixed");
    }
  });


  $(document).ready( function(){
    document.getElementById("stuButton").onclick = function() {
        document.getElementById("myBody").classList.toggle("stuButton");
    };
})
