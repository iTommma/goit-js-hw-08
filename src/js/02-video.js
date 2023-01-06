import Vimeo from '@vimeo/player';                  // імпрт Vimeo
const iframe = document.querySelector('iframe');    // елемент 'iframe'
const player = new Vimeo(iframe);                   // створення елементу класу Vimeo з привьязаним 'iframe'

// localStorage.clear();
const currentTime = localStorage.getItem('vimeo-current-time') + 0;     // збережений час зупинки

player.setCurrentTime(currentTime);                 // встановлення збереженого часу

const onTimeupdate = function (event) {
    localStorage.setItem('vimeo-current-time', event.seconds);          // збереження часу зупинки
}
player.on('timeupdate', onTimeupdate);              // відслідковування події timeupdate




