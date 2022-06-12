import { randomNumber } from './modules/random-number.mjs'
import { populateMinNumberEl } from './modules/min-number-innertext.mjs'
import { populateMaxNumberEl } from './modules/max-number-innertext.mjs'
import { speechRecognition } from './modules/speech-recognition.mjs'

document.addEventListener("DOMContentLoaded", function(event) {

  // CREATE A SECRET RANDOM NUMBER
  sessionStorage.setItem('secret-number', randomNumber())

  // START MICROFONE
  speechRecognition()

  // POPULATE MIN NUMBER TEXT
  populateMinNumberEl()

  // POPULATE MAX NUMBER TEXT
  populateMaxNumberEl()
})
