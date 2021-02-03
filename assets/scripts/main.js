const audioEnd = {
    "radio-air-horn" : "air-horn.mp3",
    "radio-car-horn" : "car-horn.mp3",
    "radio-party-horn" : "party-horn.mp3"
};

const imageEnd = {
    "radio-air-horn" : "air-horn.svg",
    "radio-car-horn" : "car.svg",
    "radio-party-horn" : "party-horn.svg"
};

const iconEnd = {
    zero : "volume-level-0.svg",
    one : "volume-level-1.svg",
    two : "volume-level-2.svg",
    three : "volume-level-3.svg",

};

function changeVolume(source) {
    let iconPath = "./assets/media/icons/"
    let volume;

    if (source == null) {
        volume = document.getElementById("volume-slider").value;
    } else {
        volume = source.srcElement.value;
    }

    if (volume == 0) {
        document.getElementById("honk-btn").disabled = true;
        document.getElementById("volume-image").src = iconPath + iconEnd.zero;
    } else if (volume <= 33) {
        document.getElementById("volume-image").src = iconPath + iconEnd.one;
    } else if (volume <= 66) {
        document.getElementById("volume-image").src = iconPath + iconEnd.two;
    } else {
        document.getElementById("volume-image").src = iconPath + iconEnd.three;
    }

    document.getElementById("volume-number").value = volume;
    document.getElementById("volume-slider").value = volume;

    document.getElementById('horn-sound').volume = volume / 100;
}

function changeAudio() {
    let audioPath = "./assets/media/audio/";
    let imagePath = "./assets/media/images/";
    let audioChoice = document.getElementById("audio-selection");
    let items = audioChoice.getElementsByTagName('input');
    for (let i = 0; i < items.length; i++) {
        let choice = items[i];
        if (choice.checked === true) {
            document.getElementById('horn-sound').src = audioPath + audioEnd[choice.id];
            document.getElementById('sound-image').src = imagePath + imageEnd[choice.id];
        }
    }
}

// initialize the audio and volume values
changeAudio();
changeVolume()

document.getElementById("audio-selection").addEventListener("change", changeAudio);
document.getElementById("volume-number").addEventListener("change", changeVolume);
document.getElementById("volume-slider").addEventListener("change", changeVolume);

// Function to run when form submitted
document.getElementById("party-horn-form").addEventListener("submit", function(evt) {
    evt.preventDefault();
    document.getElementById('horn-sound').play();
});