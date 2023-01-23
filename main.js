// Sticky nav bar

window.onscroll = function() {myFunction()};
        
        var navig= document.getElementById("nav");
        var sticky = navig.offsetTop;
        
        function myFunction() {
          if (window.pageYOffset >= sticky) {
            navig.classList.add("sticky")
          } else {
            navig.classList.remove("sticky");
          }
        }