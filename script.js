let sum = 0
let card = []
let sum_El = document.getElementById("sum_el")
let card_el = document.getElementById("card_el")
let msg_el = document.getElementById("message_el")
let div_el = document.getElementById("div_elmt")
let isAlive = false
let gotblackJack = false
let coin_el = document.getElementById("coin_el")
let player = { name: "John", coin: 50 };

player.name = prompt('Enter Your Name :');
coin_el.textContent = player.name + ": $" + player.coin

function genRandomNum() {
  let RandNumber = Math.floor(Math.random() * 11) + 1
  return RandNumber
}
function chngStyle() {
  //div_el.innerHTML
}
function credit_msg() {
  if (player.coin > 0) {
    coin_el.textContent = player.name + " $:" + player.coin

  }
  else {
    coin_el.textContent = "Your Are Out of Coins, Reload to Restart"
  }
}
function messageGen() {
  if (sum == 21) {
    msg_el.textContent = "You Got BlackJack"
    gotblackJack = true
  }
  else if (sum > 21) {
    msg_el.textContent = "You Lose Start a New game"
    isAlive = false
  }
  else {
    msg_el.textContent = "Draw a new card"
  }
  sum_El.textContent = "Sum :" + sum
  card_el.textContent = "Your Cards :  " + card
}

function startGame() {
  if (player.coin > 0) {
    card = []
    isAlive = true
    gotblackJack = false
    card[0] = genRandomNum()
    card[1] = genRandomNum()
    player.coin = player.coin - 5
    sum = card[0] + card[1]
    coin_el.textContent = player.name + ": $" + player.coin
    if (gotblackJack == true) {
      chngStyle()
      messageGen()
      credit_msg()
    }
    else {
      messageGen()
      credit_msg()
    }
  }

  function newCard() {
    if (isAlive === true && gotblackJack === false) {
      card.push(genRandomNum())
      sum = 0
      for (let i = 0; i < card.length; i++) {
        sum += card[i]
      }
      messageGen()
    }
  }
