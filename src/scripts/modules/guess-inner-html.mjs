
export const guessInnerHTML = ({
  userSpeaks
}) => {

  const minNumberEl = document.getElementById('guess')

  var secretNumber = sessionStorage.getItem('secret-number')

  const statment = secretNumber < userSpeaks

  const higherOrLower = statment ? 'menor' : 'maior'
  const higherOrLowerIcon = statment ? 'down' : 'up'

  minNumberEl.innerHTML = `
    <div>Você disse:</div>
    <span id="user-speaks" class="secret-number-box">${userSpeaks}</span>
    <div>
      O número secreto é ${higherOrLower}
      <i class="fa-solid fa-${higherOrLowerIcon}-long"></i>
    </div>
  `

}
