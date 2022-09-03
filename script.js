// Your JS goes here
load();
function load() {

    //Checkboard:
    // for (var row = 0; row < 9; row++) {
    //     for (var col = 0; col < 9; col++) {
    //         if ((row + col) % 2 === 0) {
    //             //color red
    //             var tiles = document.createElement('div');
    //             tiles.style.backgroundColor = "red";
    //             tiles.style.width = '11.1%';
    //             tiles.style.paddingBottom = '11.1%';
    //             tiles.style.cssFloat = 'left';
    //             document.body.appendChild(tiles);
    //         } else {
    //             var tiles2 = document.createElement('div');
    //             tiles2.style.backgroundColor = "black";
    //             tiles2.style.width = '11.1%';
    //             tiles2.style.paddingBottom = '11.1%';
    //             tiles2.style.cssFloat = 'left';
    //             document.body.appendChild(tiles2);
    //         }
    //     }
    // }

    //Random Colors
    // for (var row = 0; row < 81; row++) {
    //     var tiles = document.createElement('div');
    //     tiles.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
    //     tiles.style.width = '11.1%';
    //     tiles.style.paddingBottom = '11.1%';
    //     tiles.style.cssFloat = 'left';
    //     document.body.appendChild(tiles);
    // }

    //Gradient
    // var color1 = 137;
    // var color2 = 127;
    // var color3 = 67;
    // var oppColor1 = 127;
    // var oppColor2 = 59;
    // var oppColor3 = 75;
    // for (var row = 0; row < 9; row++) {
    //     for (var col = 0; col < 9; col++) {
    //         if ((row + col) % 2 === 0) {
    //             color1 += 2.9;
    //             color2 += 1.9;
    //             color3 -= 1.1;
    //             var tiles = document.createElement('div');
    //             tiles.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
    //             tiles.style.width = '11.1%';
    //             tiles.style.paddingBottom = '11.1%';
    //             tiles.style.cssFloat = 'left';
    //             document.body.appendChild(tiles);
    //         } else {
    //             oppColor1 += 2.5;
    //             oppColor2 -= 1.5;
    //             oppColor3 -= 0.5;
    //             var tiles2 = document.createElement('div');
    //             tiles2.style.backgroundColor = `rgb(${oppColor1},${oppColor2},${oppColor3})`;
    //             tiles2.style.width = '11.1%';
    //             tiles2.style.paddingBottom = '11.1%';
    //             tiles2.style.cssFloat = 'left';
    //             document.body.appendChild(tiles2);
    //         }
    //     }
    // }

    //Flashing Cards and Play Audio
    for (var row = 0; row < 81; row++) {
        var tiles = document.createElement('div');
        tiles.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
        tiles.style.width = '11.1%';
        tiles.style.paddingBottom = '11.1%';
        tiles.style.cssFloat = 'left';
        tiles.addEventListener('click', function () {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
        });
        document.body.appendChild(tiles);
    } setInterval(changeColor, 200);

    //Bonus Audio
    var audio = document.createElement('audio');
    audio.src = 'shorelineMafia.mp3';
    document.body.appendChild(audio);
}

function changeColor() {
    var divs = document.querySelectorAll('div');
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
    }
}