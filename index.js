/* Show and hide menu */
$(document).ready(function(){
   
    'use strict';
    
    $(window).scroll(function() {
        
        'use strict';
        
        if($(window).scrollTop() < 280 ) {
            
            $('.navbar').css ({
               'margin-top': '-100px',
                'opacity': '0'
                
            });
            
            $('.navbar-expand-lg').css({
                'background-color': 'rgba(59, 59 , 59, 0)'
                
            });
            
        } else {
            
            $('.navbar').css ({
               'margin-top': '0px',
                'opacity': '1'
                
            });
            
            $('.navbar-expand-lg').css({
                'background-color': 'rgba(185, 215, 232, 0.85)',
                'border-color': '#444'
                
            });
            
            $('.navbar .navbar-brand').css({
                'padding-top': '0px'
                
            });
            
            $('.navbar > li > a ').css({
                'padding-top': '15px'
                
            });
            
            
        }
       
        
    });
    
    
});

// Smooth Scrolling
$('.btn').on('click', function(event) {
    'use strict'
    if (this.hash !== '') {
      event.preventDefault();
      const hash = this.hash;
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        1000
      );
    }
  });

/* active menu item on click */
$(document).ready(function() {
    
    'use strict';
    
    
    $('.navbar-collapse .navbar-nav li a').click(function(){
        
        'use strict';
        
        $('.navbar-collapse .navbar-nav li a').removeClass("active");
        
        $(this).addClass("active");
    
    });
});

// highlight menu item on scroll
$(document).ready(function() {
    
    'use strict';
    
    $(window).scroll( function() {
        
        'use strict';
        
        $("section").each(function()  {
            
            'use strict';
            
            var bb = $(this).attr("id");  // ACCUEIL, SERVICES, CONTACT
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 70;
            
            if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {
             
                $(".navbar-collapse .navbar-nav li a[href='#" + bb + "']").addClass("active");
           
            } else {
                $(".navbar-collapse .navbar-nav li a[href='#" + bb + "']").removeClass("active");
                
            }
            
            
        });
    
    
    });
    
    
});

