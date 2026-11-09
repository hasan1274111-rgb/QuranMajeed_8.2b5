var listOfObjects = new Array();
var theme = "";

// Add a click event listener to the entire body of the document
// Check if the clicked element is a <span> tag and span's ID contains a dash ("-") then sent selected span word to context toolbar and add circle on it
document.body.addEventListener("click", event => {
            // Check if the clicked element is a span
            if (event.target.tagName === "SPAN") {
                console.log("Clicked Span ...");
                //event.target.classList.toggle("ihifz-mark-mistakes-red");
                const spanId = event.target.id;
                const spanContent = event.target.innerHTML;

                // Log the ID and innerHTML
                console.log("Clicked Span ID: " + spanId);
                console.log("Clicked Span Content: " + spanContent);

//                if (spanId.includes("-"))
//                {
//                    const words = spanId.split("-");
                    var data = spanContent + "#" + spanId + "#0";
                    console.log("Clicked Span data: " + spanId);
                    JSInterface.getHifzSpan(data);
              //  }
            }
        });


function setiHifzMarkerOnQMView_old(id,show) {
	console.log("IHifzz.. !"+id);
	var key = id;
	var contents = $(key);

	if(show == 1){
	    contents.removeClass('hide-ihifz-marker');
        contents.addClass('show-ihifz-marker');
	}
	else{
	    contents.removeClass('show-ihifz-marker');
	    contents.addClass('hide-ihifz-marker');


	}
}

function setiHifzMarkerOnQMView(elementId, show) {
    console.log("IHifzz.. Initial ID Search: " + elementId + " | show: " + show);

    var element = document.getElementById(elementId);

    // If element is null and the ID follows the 'q123' format
    if (!element && elementId.startsWith('q')) {
        console.warn("IHifzz.. " + elementId + " not found, searching for previous IDs...");

        // Extract the number (e.g., "q806" -> 806)
        var idNumber = parseInt(elementId.substring(1));

        // Try checking up to 5 previous IDs (e.g., 805, 804, 803...)
        for (var i = 1; i <= 5; i++) {
            var fallbackId = 'q' + (idNumber - i);
            element = document.getElementById(fallbackId);

            if (element) {
                console.log("IHifzz.. Found matching fallback element: " + fallbackId);
                break; // Exit loop as soon as we find an element
            }
        }
    }

    // Now proceed with the found element
    if (element) {
        // Remove only the relevant classes
        element.classList.remove('show-ihifz-marker', 'hide-ihifz-marker');

        if (show) {
            element.classList.add('show-ihifz-marker');
            console.log("IHifzz.. Success! Added marker to:", element.id);
        }

        console.log("IHifzz.. Current classes:", element.className);
    } else {
        console.error("IHifzz.. ERROR: Element " + elementId + " and its immediate predecessors not found in DOM.");
    }
}

function getiHifzLineHieght() {

const collection = document.getElementsByClassName("LHH");
const el = collection[0].offsetHeight;
const offsetHeight = el;


JSInterface.getiHifzLineHieghtAndroid(offsetHeight);

}


function ScrollPageiHifz(direction,top,bottom){

    console.log("ScrollPageiHifz");
    var dist =  screen.height;

    if(direction == 1){
        // scroll UP
        dist = dist  - top;
        $("html, body").animate({ scrollTop: $(window).scrollTop() - (top)}, 600);

    }
    else{
        // scroll Down
        dist = dist  - bottom;
        $("html, body").animate({ scrollTop: $(window).scrollTop() + (top)}, 600);


    }


}
