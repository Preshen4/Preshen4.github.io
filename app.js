$(document).ready(function() {

          // for the navigator bar to appear on scroll
          $(window).scroll(function() {
                    if (this.scrollY > 200) {
                              $('.navbar').addClass('sticky');
                    } else {
                              $('.navbar').removeClass('sticky');
                    }
          });

          var typed = new Typed(".typing-1", {
                    strings: ["Developer", "Programmer", "Student", "Nerd"],
                    typeSpeed: 80,
                    backSpeed: 60,
                    loop: true                    
          });

          var typed = new Typed(".typing-2", {
                    strings: ["Developer", "Programmer", "Student", "Nerd"],
                    typeSpeed: 80,
                    backSpeed: 60,
                    loop: true                    
          });

});
