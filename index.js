
function addStringToStorage(event) {
  let number = event.target.innerText
  //store number in an arrary
  numberStorage.push(number)
  console.log(numberStorage)
}
function clearNumberStorage() {
  numberStorage = []
}

/*Show Number in display
-[9,4,2] would display 942
*/
function renderDisplay() {
  let numbersDisplayed = numberStorage.join("")
  answerElement.innerText = numbersDisplayed
}

function handleNumberOrOperatorClick(event){
  addStringToStorage(event)
  renderDisplay()
}



let buttonContainer = document.querySelector(".numbers");
let answerElement = document.querySelector('#answer');



buttonContainer.addEventListener('click', handleNumberOrOperatorClick);


//CREATE ARRARY FOR NUMBERs STORED

let numberStorage = []

//Make Clear btn Clear the screen
function handleClear() {
  clearNumberStorage()
  renderDisplay()
}
//target the ClearBtn DOM Element
let clearButton = document.querySelector('.clear')

//then we add an eventListener for the click Event
clearButton.addEventListener('click', handleClear)
//then we will call a fuction that will clear the input.



let addButton = document.querySelector('.add')

addButton.addEventListener('click', handleNumberOrOperatorClick)

function solveProblem(){
  let numbers = numberStorage.filter(item => item !== '+')
  let solution = 0
  for (var i = 0; i < numbers.length; i++) {
    solution = solution + parseInt(numbers[i])
  }
  answerElement.innerText = solution
}

let equalsButton = document.querySelector('#equals')

equalsButton.addEventListener("click" , solveProblem)
