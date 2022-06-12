
import {
  guessInnerHTML
} from './guess-inner-html.mjs'

import {
  minNumber,
  maxNumber,
} from './min-max-numbers.mjs'

export const validateUserInput = ({
  guess
}) => {

  let guessFormat = +guess

  // VERIFY IF guess IS A NUMBER
  if (isValidGuess ({
    number: guessFormat
  })) {
    Toastify({
      text: "Número inválido",
      duration: 3000,
      gravity: "bottom",
      position: "center",
      stopOnFocus: true,
      style: {
        color: "#0AA1DD",
        background: "#ffffff",
        fontWeight: "bold"
      },
    }).showToast()

    return
  }

  // VERIFY IF NUMBER IS BETWEEN minNumber AND maxNumber
  if (isBetweenRange ({
    number: guessFormat
  })) {
    Toastify({
      text: `Valor inválido, o número secreto está entre ${minNumber} e ${maxNumber}`,
      duration: 3000,
      gravity: "bottom",
      position: "center",
      stopOnFocus: true,
      style: {
        color: "#0AA1DD",
        background: "#ffffff",
        fontWeight: "bold"
      },
    }).showToast()

    return
  }

  var secretNumber = sessionStorage.getItem('secret-number')

  if (guessFormat === +secretNumber) {
    document.body.innerHTML = `
      <h2>Você acertou!!</h2>
      <h3>O número secreto era ${secretNumber}</h3>
      <button id="js-restart-game" class="restart-game-button">Jogar novamente</button>
    `

    return
  }

  guessInnerHTML ({
    userSpeaks: guessFormat
  })

}

const isValidGuess = ({ number }) => Number.isNaN(number)

const isBetweenRange = ({ number }) => number > maxNumber || number < minNumber


document.body.addEventListener('click', (e) => {
  if (e.target.id == 'js-restart-game')
    window.location.reload()
})


