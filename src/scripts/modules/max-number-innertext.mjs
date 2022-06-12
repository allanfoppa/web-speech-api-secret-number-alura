import {
  maxNumber
} from './min-max-numbers.mjs'

export const populateMaxNumberEl = () => {
  const maxNumberEl = document.getElementById('max-number')
  maxNumberEl.innerHTML = maxNumber
}
