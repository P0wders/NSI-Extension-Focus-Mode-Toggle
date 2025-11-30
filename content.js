console.log("[Anti-Focus] Loaded with auto-reapply.");

// Main function that disables focus mode
function disableFocusMode() {
    console.log("[Anti-Focus] Disabling focus mode…");

    document.querySelectorAll("[id^='question_overlay-']").forEach(el => {
        el.style.display = "none";
        el.classList.remove("visible");
    });

    document.querySelectorAll("[id^='cadre-question-']").forEach(el => {
        el.classList.remove("invisible");
        el.style.visibility = "visible";
        el.style.opacity = 1;
    });

    document.querySelectorAll("[id^='chrono-']").forEach(el => {
        el.style.display = "none";
    });

    document.querySelectorAll("[id^='cadre-formulaire-']").forEach(el => {
        el.onmouseenter = null;
        el.onmouseleave = null;
        el.removeAttribute("onmouseenter");
        el.removeAttribute("onmouseleave");
    });

    document.body.removeAttribute("onkeyup");
    document.body.onkeyup = null;

    if (window.q) {
        for (const k in window.q) {
            if (window.q[k] && typeof window.q[k].activation_focus === "function") {
                window.q[k].focus = false;
                window.q[k].activation_focus = () => {
                    console.log("[Anti-Focus] blocked activation_focus");
                };
            }
        }
    }

    console.log("[Anti-Focus] Focus mode disabled.");
}

// Run once on DOM ready
disableFocusMode();

// Watch for changes (when next question loads)
const observer = new MutationObserver(() => {
    disableFocusMode();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});
