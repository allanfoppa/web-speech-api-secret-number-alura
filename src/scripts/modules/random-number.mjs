import {
  maxNumber
} from './min-max-numbers.mjs'

export const randomNumber = () => parseInt(Math.random() * maxNumber + 1)
