console.log("[Anti-Focus] Loaded (single-run version).");

// Run only once when DOM is ready
function onReady(callback) {
    if (document.readyState !== "loading") {
        callback();
    } else {
        document.addEventListener("DOMContentLoaded", callback);
    }
}

onReady(() => {
    console.log("[Anti-Focus] Disabling focus mode…");

    // Remove overlays
    document.querySelectorAll("[id^='question_overlay-']").forEach(el => {
        el.style.display = "none";
        el.classList.remove("visible");
    });

    // Reveal questions
    document.querySelectorAll("[id^='cadre-question-']").forEach(el => {
        el.classList.remove("invisible");
        el.style.visibility = "visible";
        el.style.opacity = 1;
    });

    // Hide timers
    document.querySelectorAll("[id^='chrono-']").forEach(el => {
        el.style.display = "none";
    });

    // Remove focus JS triggers
    document.querySelectorAll("[id^='cadre-formulaire-']").forEach(el => {
        el.onmouseenter = null;
        el.onmouseleave = null;
        el.removeAttribute("onmouseenter");
        el.removeAttribute("onmouseleave");
    });

    // Remove global key handler
    document.body.removeAttribute("onkeyup");
    document.body.onkeyup = null;

    // Patch q[n].activation_focus only once
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

    console.log("[Anti-Focus] Focus mode disabled (single run).");
});
