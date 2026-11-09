var listOfObjects = new Array();
var theme = "";

function toggleCircleClass_old(elementId, color) {
// Get the element with the specified ID
    var element = document.getElementById(elementId);

    // Check if the element exists
    if (element) {
    if(element.classList.length > 0){
         element.className = "";
         }

        var colorClass = 'ihifz-mark-mistakes-' + color;
            element.classList.add(colorClass);

        }
    else {
        console.error('Element with ID ' + elementId + ' not found.');
    }
}

function toggleCircleClass(elementId, color) {
    console.error('AA:' + color );
    const element = document.getElementById(elementId);
    if (!element) {
        console.error('AA:Element with ID ' + elementId + ' not found.');
        return;
    }

    // Remove any previous color classes that start with 'ihifz-mark-mistakes-'
    element.classList.forEach(cls => {
        if (cls.startsWith('ihifz-mark-mistakes-')) {
            console.error('AA: cls ' + cls );
            element.classList.remove(cls);
        }
    });

    // Add the new color class
    element.classList.add('ihifz-mark-mistakes-' + color);
}
