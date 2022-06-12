
export const userReceivedSpeaks = ({
  speaks
}) => {
  const minNumberEl = document.getElementById('user-speaks')
  minNumberEl.innerHTML = speaks
}
