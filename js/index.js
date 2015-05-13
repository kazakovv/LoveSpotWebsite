    
	
	$(function(){
        
        $(window).bind('scroll.measure resize.measure',function(){
            
            // Gather together the window width, height, and scroll position.
            var winWidth = $(window).width(),
                winHeight = $(window).height(),
                winLeft = $(window).scrollLeft(),
                winTop = $(window).scrollTop(),
                winBottom = winTop + winHeight,
                winRight = winLeft + winWidth,
                inView = [];
            
            // Loop over each of the elements you want to check
            $('.showScrollMessage').each(function(){
                
                // Get the elements position and dimentions.
                var pos = $(this).position(),
                    width = $(this).outerWidth(),
                    height = $(this).outerHeight();
                
                // Set bottom and right dimentions.
                pos.bottom = pos.top + height;
                pos.right = pos.left + width;
                
                // Check whether this element is partially within
                // the window's visible area.
                if((
                    pos.left >= winLeft &&
                    pos.top >= winTop &&
                    pos.right <= winRight &&
                    pos.bottom <= winBottom
                ) || (
                    pos.left >= winLeft && pos.top >= winTop && 
                    pos.left <= winRight && pos.top <= winBottom
                ) || (
                    pos.right <= winRight && pos.bottom <= winBottom &&
                    pos.right >= winLeft && pos.bottom >= winTop
                )){
                    // Change this to push the actual element if you need it.
                    inView.push( $(this).text() );
                }
            });
            
            // For the purposes of this example, we only need the
            // first and last element, but in your application you may need all.
            var first = inView.shift(),
                last = inView.pop();
            
            // Show the details in the info box.
            //$('#scrollBox .scrollMessage').text( winWidth+' x '+winHeight );
            //$('#info .txl').text( winTop+' x '+winLeft );
            //$('#scrollBox .scrollMessage').text( 'Showing from '+first+' to '+last );
				if(first === undefined) { 
					$('#scrollBox .scrollMessage').fadeIn(1000);

					$('#scrollBox .scrollMessage').html('&#9660;');	
				} else { 
					$('#scrollBox .scrollMessage').fadeOut(1000);
				}
        });
        
        
        
        $(window).trigger('resize.measure');
    })
    