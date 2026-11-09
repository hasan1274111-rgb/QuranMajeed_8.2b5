function HighlightQidsClass(elementId, color) {
    // Remove the highlight class from all elements
    var allHighlighted = document.querySelectorAll('.follow-mode-highlight-on');
    allHighlighted.forEach(el => el.classList.remove('follow-mode-highlight-on'));

    // Get the element with the specified ID
    var element = document.getElementById(elementId);
    console.log("HighlightQidsClass called for elementId: " + elementId);

    if (element) {
        console.log("Element found - " + elementId);
        element.classList.add('follow-mode-highlight-on');
    } else {
        console.error('Element with ID ' + elementId + ' not found.');
    }
}