let profile = document.getElementById("gameProfile").value

function loginCred() {
  document.getElementById("login").innerHTML = `Welcome aboard, master ${profile}`;
  console.log(profile)
}

let rand = Math.floor(Math.random() * 100) + 1;
let answer = document.getElementById("gameAnswer")
let a = ['Try again HARDER','Too bad! Muahahahaha','I could have guessed it better','Try my lucky number: 69!','HAHAHAHAHA!','Nope :|','Ahh haa! Just kidding',"It's either too high or too low Teehee","Don't give up","Close....Yet so far"]
let x=0
let i=0
let playGameNow = document.getElementById('playGame')



function playGame() {
  let x=Math.floor(Math.random()*10)

  if (answer.value <= 0) {
    document.getElementById('gameStatus2').innerHTML = "Don't be silly. Enter from 1 to 100 please"
    document.getElementById('gameStatus').innerHTML = null
    i=i-1
  }
  else if (rand < answer.value) {
    document.getElementById('gameStatus2').innerHTML = `Too highhh`
    document.getElementById('gameStatus').innerHTML = `${a[x]}`
  }
  else if (rand > answer.value) {
    document.getElementById('gameStatus2').innerHTML = `Too lowwww`
    document.getElementById('gameStatus').innerHTML = `${a[x]}`
  }
  else if (rand == answer.value) {
    document.getElementById('gameStatus').innerHTML = `Wow`
    document.getElementById('gameStatus2').innerHTML = `Correct`
  }
  i++
  document.getElementById('counts').innerHTML=`You've tried ${i} time(s)`
}
  console.log(i)
  let history = []
  history.push(answer)
  playGameNow.addEventListener('click',playGame)
  document.getElementById('gameHistory').innerHTML=`History: ${history}`
