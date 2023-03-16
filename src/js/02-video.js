import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframeRef = document.querySelector('iframe');
const player = new Player(iframeRef);

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000)
);
player.setCurrentTime(localStorage.getItem(`videoplayer-current-time`) || 0);
