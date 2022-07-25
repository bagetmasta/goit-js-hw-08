const _ = require('lodash');
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

const onPlay = function (data) {
  // data is an object containing properties specific to that event
  localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
};

const throttledOnOnPlay = _.throttle(onPlay, 1000);

player.on('timeupdate', throttledOnOnPlay);

player
  .setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video's duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
