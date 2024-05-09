let key = null;

let keyUp = 'f';
let keyLeft = 'g';
let keyRight = 'h';
let keyDown = 'j';
let lastKey = null;

document.getElementById('upControl').innerHTML = keyUp;
document.getElementById('leftControl').innerHTML = keyLeft;
document.getElementById('rightControl').innerHTML = keyRight;
document.getElementById('downControl').innerHTML = keyDown;

let config = document.getElementById('cfg');
let visibleCfg = 0;

let volume = 0.3;
let audio = new Audio('media/Ouais-Ouais.mp3');
audio.play();
audio.volume = volume;
let muteVolume = 0;

let namefile = config.js

let gameArrow = null;
let arrowKeyUp = 'f';
let arrowKeyLeft = 'g';
let arrowKeyRight = 'h';
let arrowKeyDown = 'j';

let streak = 0;
let maxstreak = 0;
let laststreak = 0;

document.onkeypress = function(event) {
    key = event.key;
    
    if ((key == keyLeft) || (key == keyUp) || (key == keyDown) || (key == keyRight)) {
        document.getElementById('controltx').innerHTML = key;
        
        if (key == gameArrow) {
            streak = streak + 1;

            if(maxstreak < streak) {
                maxstreak = streak;
            }
        } else {
            if(maxstreak < streak) {
                maxstreak = streak;
            }

            laststreak = streak;
            streak = 0;
        }
    
        document.getElementById('str').innerHTML = streak;
        document.getElementById('maxstr').innerHTML = maxstreak;
        document.getElementById('lststr').innerHTML = laststreak;

        randomize();
    } else {
        document.getElementById('controltx').innerHTML = key + '(not avable)';
    }
}

// function exec(namefile) {
//     import keyArray from namefile;

//     keyUp = keyArray[keyUp];
//     keyLeft = keyArray[keyLeft];
//     keyRight = keyArray[keyRight];
//     keyDown = keyArray[keyDown];

//     console.log ('File connected: ' + namefile);
// }

function muteVolumeFunc() {
    if (muteVolume == 0) {
        muteVolume = 1;
        audio.muted = true;
    } else if (muteVolume == 1) {
        muteVolume = 0;
        audio.muted = false;
    } else {
        console.error('Not avable meaning in "muteVolumeFunc": ' + muteVolume);

    }
}

function changeConfig() {
    if (visibleCfg == 0) {
        visibleCfg = 1;
        config.style.display = 'block';
    } else if (visibleCfg == 1) {
        visibleCfg = 0;
        config.style.display = 'none';
    } else {
        console.error('Not avable meaning in "visibleCfg": ' + visibleCfg);
    }
}

function saveConfig() {
    let unKeyUp = document.getElementById('keyUp').value;
    let unKeyLeft = document.getElementById('keyLeft').value;
    let unKeyRight = document.getElementById('keyRight').value;
    let unKeyDown = document.getElementById('keyDown').value;

    let upControl = document.getElementById('upControl');
    let leftControl = document.getElementById('leftControl');
    let rightControl = document.getElementById('rightControl');
    let downControl = document.getElementById('downControl');
    
    if (unKeyUp != '') {
        keyUp = unKeyUp;
        arrowKeyUp = unKeyUp;
    }

    if (unKeyLeft != '') {
        keyLeft = unKeyLeft;
        arrowKeyLeft = unKeyLeft;
    }

    if (unKeyRight != '') {
        keyRight = unKeyRight;
        arrowKeyRight = unKeyRight;
    }

    if (unKeyDown != '') {
        keyDown = unKeyDown;
        arrowKeyDown = unKeyDown;
    }

    document.getElementById('upControl').innerHTML = keyUp;
    document.getElementById('leftControl').innerHTML = keyLeft;
    document.getElementById('rightControl').innerHTML = keyRight;
    document.getElementById('downControl').innerHTML = keyDown;
}

function randomize() {
    let upperArrow = document.getElementById('upperArrow');
    let downerArrow = document.getElementById('downerArrow');
    let lefterArrow = document.getElementById('lefterArrow');
    let righterArrow = document.getElementById('righterArrow');

    let streak = 0;

    gameArrow = Math.random(0);
    if (gameArrow < 0.25) {
        gameArrow = 1;
    } else if ((gameArrow > 0.25) && (gameArrow < 0.50)) {
        gameArrow = 2;
    } else if ((gameArrow > 0.50) && (gameArrow < 0.75)) {
        gameArrow = 3;
    } else if (gameArrow > 0.75) {
        gameArrow = 4;
    } else {
        console.error('Not avable meaning in "muteVolumeFunc": '+gameArrow);
    }
    console.log(gameArrow);

    if (gameArrow == 1) {
        upperArrow.style.display = 'block';
        downerArrow.style.display = 'none';
        lefterArrow.style.display = 'none';
        righterArrow.style.display = 'none';
        gameArrow = arrowKeyUp;
    } else if (gameArrow == 2) {
        upperArrow.style.display = 'none';
        downerArrow.style.display = 'block';
        lefterArrow.style.display = 'none';
        righterArrow.style.display = 'none';
        gameArrow = arrowKeyDown;
    } else if (gameArrow == 3) {
        upperArrow.style.display = 'none';
        downerArrow.style.display = 'none';
        lefterArrow.style.display = 'block';
        righterArrow.style.display = 'none';
        gameArrow = arrowKeyLeft;
    } else if (gameArrow == 4) {
        upperArrow.style.display = 'none';
        downerArrow.style.display = 'none';
        lefterArrow.style.display = 'none';
        righterArrow.style.display = 'block';
        gameArrow = arrowKeyRight;
    }
}