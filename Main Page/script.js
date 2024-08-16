var button = document.getElementById("navigateButton");
function goLink(){
    window.location.href = "https://docs.google.com/presentation/d/1kghlaqtHvn7N_Mt9oSPfPA9EVnQBwwfBWmH6LglNYLM/copy";
}
function togglePlayPause() {
    const audio = document.getElementById('myAudio');
    const button = document.querySelector('.control-button');
    if (audio.paused) {
        audio.play();
        button.textContent = 'Pause Music'; 
    } else {
        audio.pause();
        button.textContent = 'Play Music';
    }
  }