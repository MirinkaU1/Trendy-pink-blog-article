document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementById('btnAudio');
    let content = document.getElementById('text');
    let speech = new SpeechSynthesisUtterance();
        
    button.addEventListener("click", function(){
        speech.text = content.textContent;
        window.speechSynthesis.speak(speech);
    });
});


