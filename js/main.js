
    (function ($) {
      "use strict";
      

      $(document).ready(function() {
        var swiper = new Swiper(".woo-product-shop-swiper", {
          spaceBetween: 10,
          slidesPerView: 6,
          freeMode: true,
          watchSlidesProgress: true,
        });
      
        var swiper2 = new Swiper(".woo-product-shop-swiper2", {
          spaceBetween: 10,
          centeredSlides: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          thumbs: {
            swiper: swiper,
          },
        });
      });
      



      $(document).ready(function(){
        // Initialize Magnific Popup on elements with class 'image-popup-vertical-fit'
        $('.image-popup-vertical-fit').magnificPopup({
            type: 'image', // Type of content to display (image)
            mainClass: 'mfp-with-zoom', // Class to be added to the popup for custom styling
    
            // Enable gallery mode
            gallery: {
                enabled: true // Allow navigating through a gallery of images
            },
    
            // Enable zoom effect
            zoom: {
                enabled: true, // Enable zoom effect
                duration: 300, // Duration of the zoom effect in milliseconds
                easing: 'ease-in-out', // Easing function for the zoom effect
    
                // Define the element that will trigger the zoom effect
                opener: function(openerElement) {
                    // If the openerElement is an image, return it; otherwise, find an image within it
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    });
    

    
    
    
    
    
    })(jQuery);
