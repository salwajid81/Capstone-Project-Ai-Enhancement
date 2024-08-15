function togglePlayPause() {
  const audio = document.getElementById('myAudio');
  const button = document.querySelector('.control-button');

  if (audio.paused) {
      audio.play();
      button.textContent = 'Pause'; 
  } else {
      audio.pause();
      button.textContent = 'Play';
  }
}