     // Restore the playback position on page load
     document.addEventListener('DOMContentLoaded', () => {
        const audio = document.getElementById('myAudio');
        const button = document.querySelector('.control-button');
        
        // Get the last saved playback position from localStorage
        const savedPosition = localStorage.getItem('audioPosition');
        const isPlaying = localStorage.getItem('isPlaying') === 'true';

        if (savedPosition) {
            audio.currentTime = parseFloat(savedPosition);
        }

        if (isPlaying) {
            audio.play();
            button.textContent = 'Pause';
        } else {
            audio.pause();
            button.textContent = 'Play';
        }

        // Save playback position and state on pause or unload
        audio.addEventListener('pause', () => {
            localStorage.setItem('isPlaying', 'false');
            localStorage.setItem('audioPosition', audio.currentTime);
            button.textContent = 'Play';
        });
        
        window.addEventListener('beforeunload', () => {
            localStorage.setItem('audioPosition', audio.currentTime);
            localStorage.setItem('isPlaying', !audio.paused);
        });
    });

    function togglePlayPause() {
        const audio = document.getElementById('myAudio');
        const button = document.querySelector('.control-button');

        if (audio.paused) {
            audio.play();
            localStorage.setItem('isPlaying', 'true');
            button.textContent = 'Pause';
        } else {
            audio.pause();
            localStorage.setItem('isPlaying', 'false');
            button.textContent = 'Play';
        }
    }