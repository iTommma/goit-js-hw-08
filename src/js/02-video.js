import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);                   // створення елементу класу Vimeo з привьязаним 'iframe'

// localStorage.clear();
const currentTime = localStorage.getItem('videoplayer-current-time') + 0;   // +0 попереджує моилку при 1му завантаженні коли localStorage повертає null

player.setCurrentTime(currentTime);                 // встановлення збереженого часу

const onTimeupdate = function (event) {
    localStorage.setItem('videoplayer-current-time', event.seconds);          // збереження часу зупинки
}
player.on('timeupdate', throttle(onTimeupdate, 1000));              // відслідковування події timeupdate




