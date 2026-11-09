scrollContinue=false;
isTouching=false;
function startReading(mins) {

    if (smoothScroll.scrolling()) {

    	$('span:in-viewport(120)') .run(function(){

    		 	 d = $(this).parent();
    		 	 ayatid = d.attr("id");

    		 	 if (isNumeric(ayatid)) {
    				console.log("QMJS ayatid: "+ayatid)
    			 	eTop = $(this).parent().offset().top;
    			 	 ssTop = $(window).scrollTop();
    		 		if ((typeof JSInterface == "object")  && (JSInterface !== null)) {
    					if (!JSInterface.isPlaying()) {
    							JSInterface.test(ayatid);
    						}
    				}
    			}
    	 	})
    	 	$('.withTr:in-viewport(120)') .run(function(){
    		 	 ayatid = $(this).attr("id");
    			 console.log("QMJS ayatid: "+ayatid)

    		 	 	eTop = $(this).offset().top;
    			 	 ssTop = $(window).scrollTop();
    		 	 if (isNumeric(ayatid)) {
    		 	 	if ((typeof JSInterface == "object")  && (JSInterface !== null)) {
    					if (!JSInterface.isPlaying()) {
    							JSInterface.test(ayatid);
    						}
    				}
    		 	}
    		 })
    }
    window.mins = mins
    window.scrollContinue=true;
    if (document.body) document.body.classList.add('autoscrolling');
    viewportHeight = window.innerHeight //currently displayed area

    percentage = ((numberOfPages2)/20)*100
    totalHeightEstimate = ($(container).height()*100)/percentage
    viewPercentage = (viewportHeight/totalHeightEstimate)*100
    Speed = (viewPercentage*mins)/100
    smoothScroll({
            yPos: '+'+viewportHeight,
            duration: Speed*60000,  //milliseconds
            preventUserScroll:false,
            complete:function() {
                if (window.scrollContinue && !isTouching)
                    startReading(window.mins);
            }
    });

}
document.addEventListener('touchmove', function(e) {
                        isTouching = true;
                    });
document.addEventListener('touchend, touchcancel', function(e) {
                        isTouching = false;
                    });



function stopReading() {
    window.scrollContinue=false;
    if (document.body) document.body.classList.remove('autoscrolling');
    smoothScroll.stopAll()
}