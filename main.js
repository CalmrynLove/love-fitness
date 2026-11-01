// Show More Info Toggle
document.getElementById("toggleInfo")?.addEventListener("click", () => {
    const info = document.getElementById("extraInfo");
    info.classList.toggle("hidden");
});

// OPEN SETTINGS POPUP
document.getElementById("settingsBtn")?.addEventListener("click", () => {
    document.getElementById("settingsPopup").classList.remove("hidden");
});

// CLOSE SETTINGS POPUP
document.getElementById("closeSettings")?.addEventListener("click", () => {
    document.getElementById("settingsPopup").classList.add("hidden");
});

// UPDATED TTS FUNCTION WITH SETTINGS
function speakText(text) {
    const speech = new SpeechSynthesisUtterance(text);

    const rateSlider = document.getElementById("ttsRate");
    const pitchSlider = document.getElementById("ttsPitch");

    speech.rate = rateSlider ? rateSlider.value : 1;
    speech.pitch = pitchSlider ? pitchSlider.value : 1;

    speech.volume = 1;
    speech.lang = "en-US";

    window.speechSynthesis.speak(speech);
}
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// READ ENTIRE PAGE
function readPage() {
    const fullText = document.body.innerText;
    speakText(fullText);
}

