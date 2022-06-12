
import {
  validateUserInput
} from './validate-user-input.mjs'

export const onSpeak = (e) => {

  let userInput = e.results[0][0].transcript

  // TEMP
  console.log('[User input]', userInput)

  validateUserInput ({
    guess: userInput
  })
}
