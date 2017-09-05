const {desktopCapturer, clipboard} = require('electron')

document.querySelector('#start').onclick = function() {
    desktopCapturer.getSources({types: ['screen']}, function(error, sources) {
        if (error) throw error;
        let img = sources[0].thumbnail
        clipboard.writeImage(img)
    });
}
