       // DROP DOWN
       document.addEventListener('DOMContentLoaded', function() {
        var dropdowns = document.querySelectorAll('.dropdown');
      
        dropdowns.forEach(function(dropdown) {
          dropdown.querySelector('.dropbtn').addEventListener('click', function() {
            dropdown.classList.toggle('open');
          });
        });
      
        // Close the dropdown when clicking outside of it
        window.addEventListener('click', function(event) {
          dropdowns.forEach(function(dropdown) {
            if (!dropdown.contains(event.target)) {
              dropdown.classList.remove('open');
            }
          });
        });
      });
