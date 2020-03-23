
      /*
       * Open the drawer when the menu ison is clicked.
       */
      var menu = document.querySelector('.menu-icon');
      var main = document.querySelector('.page');
      var drawer = document.querySelector('.menu');

      menu.addEventListener('click', function(e) {
        drawer.classList.toggle('menu_open');
        e.stopPropagation();
      });
      main.addEventListener('click', function() {
        drawer.classList.remove('menu_open');
      });
