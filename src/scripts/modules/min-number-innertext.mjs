import {
  minNumber
} from './min-max-numbers.mjs'

export const populateMinNumberEl = () => {
  const minNumberEl = document.getElementById('min-number')
  minNumberEl.innerHTML = minNumber
}
