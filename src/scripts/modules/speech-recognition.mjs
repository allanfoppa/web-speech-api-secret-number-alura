import {
  onSpeak
} from './on-speak.mjs'

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition

export const speechRecognition = () => {

  const recognition = new SpeechRecognition()

  recognition.lang = 'pt-Br'
  recognition.start()

  recognition.addEventListener('result', onSpeak)

  recognition.addEventListener('end', () => recognition.start())
}

