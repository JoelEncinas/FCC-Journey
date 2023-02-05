const doc = $(document);

// keys
const qBtn = $("#heater-1");
const wBtn = $("#heater-2");
const eBtn = $("#heater-3");
const aBtn = $("#heater-4");
const sBtn = $("#clap");
const dBtn = $("#open-hh");
const zBtn = $("#kick-n-hat");
const xBtn = $("#kick");
const cBtn = $("#closed-hh");

// audios
const qClip = $("#Q");
const wClip = $("#W");
const eClip = $("#E");
const aClip = $("#A");
const sClip = $("#S");
const dClip = $("#D");
const zClip = $("#Z");
const xClip = $("#X");
const cClip = $("#C");

// display
const display = $("#display");

// sound names
sounds = [
  "heater-1",
  "heater-2",
  "heater-3",
  "heater-4",
  "clap",
  "open-hh",
  "kick n hat",
  "kick",
  "closed-hh",
];

// play audio
function playAudio(clip) {
  if (clip[0].paused) {
    clip[0].play();
  } else {
    clip[0].currentTime = 0;
  }
}

// simulate bootstrap click animation
function simulateClick(button) {
  button
    .addClass("clicked")
    .delay(150)
    .queue(function (next) {
      $(this).removeClass("clicked");
      next();
    });
}

// display sound name
function displaySoundName(button) {
  switch (button) {
    case qBtn:
      display.text(sounds[0]);
      break;
    case wBtn:
      display.text(sounds[1]);
      break;
    case eBtn:
      display.text(sounds[2]);
      break;
    case aBtn:
      display.text(sounds[3]);
      break;
    case sBtn:
      display.text(sounds[4]);
      break;
    case dBtn:
      display.text(sounds[5]);
      break;
    case zBtn:
      display.text(sounds[6]);
      break;
    case xBtn:
      display.text(sounds[7]);
      break;
    case cBtn:
      display.text(sounds[8]);
      break;
    default:
      console.log("A different key was pressed");
      break;
  }
}

// when document loads initialize logic
doc.ready(function () {
  // add event listeners for click
  qBtn.click(function () {
    displaySoundName(qBtn);
    playAudio(qClip);
  });
  wBtn.click(function () {
    displaySoundName(wBtn);
    playAudio(wClip);
  });
  eBtn.click(function () {
    displaySoundName(eBtn);
    playAudio(eClip);
  });
  aBtn.click(function () {
    displaySoundName(aBtn);
    playAudio(aClip);
  });
  sBtn.click(function () {
    displaySoundName(sBtn);
    playAudio(sClip);
  });
  dBtn.click(function () {
    displaySoundName(dBtn);
    playAudio(dClip);
  });
  zBtn.click(function () {
    displaySoundName(zBtn);
    playAudio(zClip);
  });
  xBtn.click(function () {
    displaySoundName(xBtn);
    playAudio(xClip);
  });
  cBtn.click(function () {
    displaySoundName(cBtn);
    playAudio(cClip);
  });

  // add event listeners for keypress
  doc.keydown(function (event) {
    switch (event.which) {
      case 81:
        simulateClick(qBtn);
        displaySoundName(qBtn);
        playAudio(qClip);
        break;
      case 87:
        simulateClick(wBtn);
        displaySoundName(wBtn);
        playAudio(wClip);
        break;
      case 69:
        simulateClick(eBtn);
        displaySoundName(eBtn);
        playAudio(eClip);
        break;
      case 65:
        simulateClick(aBtn);
        displaySoundName(aBtn);
        playAudio(aClip);
        break;
      case 83:
        simulateClick(sBtn);
        displaySoundName(sBtn);
        playAudio(sClip);
        break;
      case 68:
        simulateClick(dBtn);
        displaySoundName(dBtn);
        playAudio(dClip);
        break;
      case 90:
        simulateClick(zBtn);
        displaySoundName(zBtn);
        playAudio(zClip);
        break;
      case 88:
        simulateClick(xBtn);
        displaySoundName(xBtn);
        playAudio(xClip);
        break;
      case 67:
        simulateClick(cBtn);
        displaySoundName(cBtn);
        playAudio(cClip);
        break;
      default:
        console.log("A different key was pressed");
        break;
    }
  });
});
