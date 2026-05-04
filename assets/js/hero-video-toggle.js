/**
 * Hero Video Toggle
 * Play/pause functionality for hero background videos
 */

(function() {
  'use strict';

  const video = document.getElementById('hero-video');
  const toggle = document.getElementById('video-toggle');

  if (!video || !toggle) return;

  const pauseIcon = toggle.querySelector('.hero-video-toggle__icon--pause');
  const playIcon = toggle.querySelector('.hero-video-toggle__icon--play');

  toggle.addEventListener('click', function() {
    if (video.paused) {
      video.play();
      pauseIcon.removeAttribute('hidden');
      playIcon.setAttribute('hidden', '');
      toggle.setAttribute('aria-label', 'Pause video');
    } else {
      video.pause();
      pauseIcon.setAttribute('hidden', '');
      playIcon.removeAttribute('hidden');
      toggle.setAttribute('aria-label', 'Play video');
    }
  });
})();
