//item
import items from '/items.js'
var item = items[Math.floor(Math.random()*items.length)]

//UI
var guesses = []
var input = document.getElementById("guess-input")
var whichGuess = 0
var guessChecker = ["","","","","",""]

//calc darzle number
const original = new Date('11/27/2022')
var date = new Date()
var diff = date.getTime() - original.getTime();
const darzle = Math.ceil(diff / (1000 * 3600 * 24));

//colors
const red = "#E74C3C"
const green = "#27AE60"


input.addEventListener("focusout", function(){
  document.getElementById("recommended-words").classList.add("disappear")
})
//checking if input is edited
input.addEventListener("input", function () {
    input.style.borderColor = "#DBE7EC"
    input.style.color = "#3c4448"
    var width = input.offsetWidth*1.05;
    var height = input.offsetHeight
  
    var words = document.getElementById("recommended-words")
    words.style.width = `${width}px`
    words.style.bottom = `${height+5}px`
    words.classList.remove("hidden")
    words.classList.remove("disappear")
    while (words.firstChild) {
      words.removeChild(words.lastChild);
    }
    if(input.value != ""){
      if(words.classList.contains("hidden")) words.classList.remove("hidden")
      for(var i = 0; i < items.length; i++){
        if(input.value === items[i].name.substring(0,input.value.length)){
          const name = items[i].name
          const b = document.createElement("button")
          const br = document.createElement("br")
          b.classList.add("recommended-button")
          b.style.width = `${width}px`
          b.addEventListener("click", function(){
            input.style.borderColor = "#DBE7EC"
            input.style.color = "#3c4448"
            input.value = name
            input.focus()
            words.classList.add("hidden")
          })
          const node = document.createTextNode(name);
          b.appendChild(node)
          words.appendChild(b)
          words.appendChild(br)
        }
        if(words.childElementCount > 10) break;
      }
    }
    else{
      words.classList.add("hidden")
    }
    const p = document.createElement("button")
    p.classList.add("recommended-button")
    p.style.width = `${width}px`
    words.appendChild(p)
    if(words.childElementCount === 0){
      words.classList.add("hidden")
    }
})

document.getElementById("body").onload = function(){load()};
//on load
function load(){
  document.getElementById("recommended-words").style.width = `${input.offsetWidth*1.05}px`
  if(guesses.length>0){
    for(var guess of guesses){
      insertGuess(guess)
      whichGuess++
    }
  }
}


//add onclick events
document.getElementById("submit-guess").onclick = function(){submit()};
//player's guess
function submit(){
  //validity check
  var guess = {}
  var isvalid = false
  
  for(var i = 0; i < items.length; i++){
    if(items[i].name === input.value.toLowerCase()){
      guess = items[i]
      isvalid = true
      break;
    }
    else if(items[i].hasOwnProperty('nickname') && items[i].nickname.includes(input.value.toLowerCase()) && input.value.length > 2){
      guess = items[i]
      isvalid = true
      break;
    }
  }  
  //fill row with data
  if(isvalid === true){
    valid(guess)
  }
  //error message
  else{
    invalid()
  }
}
input.addEventListener("keypress",function(event){
  if(event.key === "Enter"){
    event.preventDefault();
    document.getElementById("submit-guess").click()
  }
})

function valid(guess){
  input.style.borderColor = "#DBE7EC"
  input.style.color = "#3c4448"
  guesses[guesses.length] = guess
  localStorage.setItem("guesses", JSON.stringify(guesses))
  if(insertGuess(guess)===true){
    input.classList.add("hidden")
    document.getElementById("mask").classList.remove("hidden")
    document.getElementById("mask").classList.add("fadeIn")
    document.getElementById("win-modal").classList.remove("hidden")
    document.getElementById("win-modal").classList.add("fadeInFull")
    for(var i = 0; i < guessChecker.length; i++){
      console.log(guessChecker[i])
      document.getElementById(`score-${i}`).innerHTML = guessChecker[i] 
    }
  }
}
function invalid(){
  input.style.borderColor = red
  input.style.color = red
}


function insertGuess(guess){
  input.value = ""
  document.getElementById("recommended-words").classList.add("hidden")
  var guessTotal = whichGuess*6
  const catagories = [{guess: guess.dungeon, item: item.dungeon, type: "dungeon"},{guess: guess.tier, item: item.tier, type: "tier"},{guess: guess.slot, item: item.slot, type: "slot"},{guess: guess.color, item: item.color, type: "color"}]

  //name
  if(guess.name === item.name){
      var style = document.getElementById(1+guessTotal)
      style.style.backgroundColor = green
      style.style.borderColor = green
      style.style.transition = "2s"
      style.style.transform = "rotateY(720deg)"
      style.classList.add(`nameTrue`)
      guessChecker[whichGuess] += ("🟩")
    }
    else{
      var style = document.getElementById(1+guessTotal)
      style.style.backgroundColor = red
      style.style.borderColor = red
      style.style.transform = "rotateY(180deg)"
      style.classList.add(`nameFalse`)
      guessChecker[whichGuess] += ("🟥")
    }

    //class
    if(guess.classes[0] === item.classes[0] || guess.classes[1] === item.classes[1]){
      var style = document.getElementById(2+guessTotal)
      style.style.backgroundColor = green
      style.style.borderColor = green
      style.style.transform = "rotateY(180deg)"
      style.classList.add(`classes`)
      guessChecker[whichGuess] += ("🟩")
    }
    else{
      var style = document.getElementById(2+guessTotal)
      style.style.backgroundColor = red
      style.style.borderColor = red
      style.style.transform = "rotateY(180deg)"
      style.classList.add(`classes`)
      guessChecker[whichGuess] += ("🟥")
    }
    
  for(var i = 0; i < 4; i++){
    if(catagories[i].guess === catagories[i].item){
      var style = document.getElementById(i+3+guessTotal)
      style.style.backgroundColor = green
      style.style.borderColor = green
      style.style.transform = "rotateY(180deg)"
      style.classList.add(`${catagories[i].type}`)
      console.log(catagories[i].type)
      guessChecker[whichGuess] += ("🟩")
    }
    else{
      var style = document.getElementById(i+3+guessTotal)
      style.style.backgroundColor = red
      style.style.borderColor = red
      style.style.transform = "rotateY(180deg)"
      style.classList.add(`${catagories[i].type}`)
      guessChecker[whichGuess] += ("🟥")
    }
  }  
  whichGuess++
  return guess.name === item.name? true:false
}

var lines = ["⬜⬜⬜⬜⬜⬜","⬜⬜⬜⬜⬜⬜","⬜⬜⬜⬜⬜⬜","⬜⬜⬜⬜⬜⬜","⬜⬜⬜⬜⬜⬜","⬜⬜⬜⬜⬜⬜"]

document.getElementById("exit-button").addEventListener("click", function(){
  document.getElementById("mask").classList.add("hidden")
  document.getElementById("mask").classList.add("fadeOut")
  document.getElementById("win-modal").classList.add("hidden")
  document.getElementById("win-modal").classList.add("fadeOut")
})
const resultPara = document.querySelector('.result');
document.getElementById("copy-button").addEventListener('click', async () => {
    for(var i = 0; i < guesses.length; i++){
      lines[i] = guessChecker[i]
    }
    var copyText = 
   `Completed Darzle ${darzle} ${whichGuess}/6 
    ${lines[0]}
    ${lines[1]}
    ${lines[2]}
    ${lines[3]}
    ${lines[4]}
    ${lines[5]}`
    navigator.clipboard.writeText(copyText)
    alert("Copied the text: " + copyText)
});
