const WBW_STORAGE_KEY = "wbw_click_enabled";

// --------------------
// Word highlight logic
// --------------------
function doHLWord(id) {
    removeHighlight();

    var el = document.getElementById(id);
    if (el) {
        el.style.transition = "background-color 1s ease-out";

        el.classList.add("wbw-highlight");
    }
}

function removeHighlight() {
    var highlighted = document.querySelectorAll(".wbw-highlight");
    for (var i = 0; i < highlighted.length; i++) {
        highlighted[i].classList.remove("wbw-highlight");
    }
}

function doHLWordFollowMode(id) {
    removeHighlight();

    var el = document.getElementById(id);
    if (el) {

        el.classList.add("wbw-highlight");
    }
}

// --------------------
// Click handler
// --------------------
function handleWBWClick(event) {
    var target = event.target;

    if (!target) return;

    // Capture the original tapped element's text before walking up
    var tappedWordText = "";
    if (target.tagName === "SPAN" && target.id && target.id.startsWith("q")) {
        tappedWordText = target.textContent || target.innerText || "";
    }

    // Walk up the DOM to find an element with an id.
    // This handles Bismillah spans (<span class="qr0">) which have no id —
    // we climb to the parent ayah <div> whose id is the global AyatID.
    while (target && !target.id) {
        target = target.parentElement;
    }
    if (!target || !target.id) return;

    // If we didn't capture text from a q-span directly, try the found target
    if (!tappedWordText && target.id.startsWith("q")) {
        tappedWordText = target.textContent || target.innerText || "";
    }

    // Save last tapped word text for CT WBW shortcut
    if (tappedWordText && typeof JSInterface === "object" && JSInterface !== null) {
        if (typeof JSInterface.setLastTappedWordText === "function") {
            JSInterface.setLastTappedWordText(tappedWordText.trim());
        }
    }

    // Instant client-side highlight for word taps (QID elements only)
    if (target.id.startsWith("q")) {
        doHLWord(target.id);
    }

    if (typeof JSInterface === "object" && JSInterface !== null) {
        if (typeof JSInterface.clickWordsbyWord === "function") {
            JSInterface.clickWordsbyWord(target.id);
        }
    }
}

// --------------------
// Touch-based word capture (fires before both double-tap and long-press)
// This ensures lastTappedWordQid/Text are available for the CT WBW shortcut
// --------------------
document.addEventListener("touchstart", function(event) {
    var touch = event.touches[0];
    if (!touch) return;
    var target = document.elementFromPoint(touch.clientX, touch.clientY);
    if (!target) return;

    // Capture word text before walking up
    var wordText = "";
    if (target.tagName === "SPAN" && target.id && target.id.startsWith("q")) {
        wordText = target.textContent || target.innerText || "";
    }

    // Walk up to find element with id
    while (target && !target.id) {
        target = target.parentElement;
    }
    if (!target || !target.id) return;

    if (!wordText && target.id.startsWith("q")) {
        wordText = target.textContent || target.innerText || "";
    }

    // Save word data for CT WBW shortcut
    if (target.id.startsWith("q") && typeof JSInterface === "object" && JSInterface !== null) {
        if (typeof JSInterface.setLastTappedWordText === "function" && wordText) {
            JSInterface.setLastTappedWordText(wordText.trim());
        }
        if (typeof JSInterface.clickWordsbyWord === "function") {
            // Don't call clickWordsbyWord here — only save QID
        }
        // Save QID via dedicated setter
        if (typeof JSInterface.setLastTappedWordQid === "function") {
            JSInterface.setLastTappedWordQid(target.id);
        }
    }
}, {passive: true});

// --------------------
// Enable listener
// --------------------
function enableWBWClickListener() {
    document.removeEventListener("click", handleWBWClick);
    document.addEventListener("click", handleWBWClick);

    localStorage.setItem(WBW_STORAGE_KEY, "true");
    console.log("WBW Click listener ENABLED");
}

// --------------------
// Disable listener
// --------------------
function disableWBWClickListener() {
    document.removeEventListener("click", handleWBWClick);

    localStorage.setItem(WBW_STORAGE_KEY, "false");
    console.log("WBW Click listener DISABLED");
}

// --------------------
// Restore state on reload
// --------------------
(function restoreWBWState() {
   let savedState = null;
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      savedState = localStorage.getItem(WBW_STORAGE_KEY);

         if (savedState !== "false") {
        enableWBWClickListener();
        } else {
        disableWBWClickListener();
        }
    }
  } catch (error) {
    // Handle the error gracefully (e.g., log a warning, use a default state)
    console.warn("localStorage is unavailable or restricted:", error);
  }
    // ENABLE by default unless explicitly disabled

})();