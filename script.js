let number = createWholeNum();

let guess = document.querySelector('input').value
let input = document.querySelector('input')
let form = document.querySelector('form')

let gameStatus = document.querySelector('.game-status')

// generate number
function createWholeNum() {
   function createNumber(num) {
      if (!arr.includes(num)) {
         arr.push(num)
      } else {
         num = Math.floor(Math.random() * 10)
         createNumber(num)
      }
   }

   let arr = []

   arr.push(Math.floor(Math.random() * (10 - 1) + 1))

   let num1 = Math.floor(Math.random() * 10)
   createNumber(num1)

   let num2 = Math.floor(Math.random() * 10)
   createNumber(num2)

   let num3 = Math.floor(Math.random() * 10)
   createNumber(num3)

   return arr
}
// /generate number



// get guess
function getGuess() {
   guess = document.getElementById("myInput").value;
   }

   form.addEventListener('submit', e => {
   e.preventDefault();
   form.reset();

   // validate guess
   if (
         guess.length === 4 && 
         (
         (guess[0] !== guess[1] && guess[0] !== guess[2] && guess[0] !== guess[3]) && 
         (guess[1] !== guess[2] && guess[1] !== guess[3] && guess[1] !== guess[0]) && 
         (guess[2] !== guess[3] && guess[2] !== guess[0] && guess[2] !== guess[1]) &&
         (guess[3] !== guess[0] && guess[3] !== guess[1] && guess[3] !== guess[2])
         )
      ) 
   {
      document.querySelector('h2').style = 'none'
      check()
   } else {
      document.querySelector('h2').style.color = 'red'
   }
   // /validate guess
})
// /get guess



// check number
function check() {
   let guessArr = guess.split('')
   guessArr = guessArr.map(num => {
      return Number(num)
   })

   let cows = 0
   let bulls = 0

   for (let i = 0; i < guessArr.length; i++) {
      const element = guessArr[i];

      if (number.includes(element) &&
         guessArr.indexOf(element) !== number.indexOf(element)) {
         cows++
      } else if (number.includes(element) &&
               guessArr.indexOf(element) === number.indexOf(element)) {
         bulls++
      }
   }

   // status change
   if (bulls === 4) {
      // status win
      input.disabled = true

      gameStatus.innerHTML = `
         <h1>${guess} = ${bulls} bulls and ${cows} cows</h1>
         <h2>Gratz u won!!!</h2>
         <h3>Refresh the page to play again!</h3>
      `
      // /status win
   } else {
      gameStatus.innerHTML += `
         <p>${guess} = ${bulls} bulls and ${cows} cows</p>
      `
   }
   // /status change
}
// /check number