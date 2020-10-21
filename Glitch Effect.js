var container = document.getElementById('container');
var count = 80;
var glitchTimeOut = 1;

for (let i = 0; i < count; i++) {
    let glitchBox = document.createElement('div');
    glitchBox.classList.add('box');
    container.appendChild(glitchBox);
}

let glitch = document.getElementsByClassName('box');
setInterval(() => {
    for (let i = 0; i < glitch.length; i++) {
        var opacity = (Math.random() * .6).toFixed(3);
        glitch[i].style.left = Math.floor(Math.random() * 100) + 'vw';
        glitch[i].style.top = Math.floor(Math.random() * 100) + 'vh';
        glitch[i].style.width = Math.floor(Math.random() * 200) + 'px';
        glitch[i].style.height = Math.floor(Math.random() * 75) + 'px';
        glitch[i].style.backgroundPosition = Math.floor(Math.random() * 25) + 'px';
    }
}, glitchTimeOut);