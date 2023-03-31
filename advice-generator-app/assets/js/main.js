// Get references to the HTML elements
const slipId = document.getElementById('slip-id')
const slipAdvice = document.getElementById('slip-advice')
const button = document.getElementById('button')

// Fetch data from the API and populate the initial advice
fetch('https://api.adviceslip.com/advice')
  .then((response) => response.json())
  .then((data) => {
    slipId.textContent = data.slip.id
    slipAdvice.textContent = data.slip.advice
  })
  .catch((error) => console.log(error))

// Add event listener to the button to generate a new advice
button.addEventListener('click', () => {
  // Fetch a random advice from the API
  fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then((data) => {
      slipId.textContent = data.slip.id
      slipAdvice.textContent = data.slip.advice
    })
    .catch((error) => console.log(error))
})
