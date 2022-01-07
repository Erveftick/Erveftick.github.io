$(document).ready(function() {
    /* ======= Owl Carousel ====== */
     var owl = $('.owl-carousel');
              owl.owlCarousel({
                margin: 10,
                nav: true,
                loop: true,
                responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 4
                  },
                  1000: {
                    items: 4
                  }
                }
              })


});
