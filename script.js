const buttons = document.querySelectorAll('button')
const output = document.querySelector('.output')
const score = document.querySelector('.score')


buttons.forEach((button)=>{
    button.addEventListener('click', () => {
        //console.log(button.innerHTML)
        playhand(button.innerHTML)
    })
})

function playhand(buttonpress){
    userchoice = buttonpress
    pcchoice = getpcchoice()
    winner = whowins()
    const div = document.createElement('div')
    div.textContent = `${winner} - you:${userchoice} v pc:${pcchoice}`
    output.appendChild(div)
    updatescore(winner)
    console.log(userpoints,pcpoints)
}

let userpoints = 0
let pcpoints = 0
function updatescore(x){
    if( x == 'win'){
        userpoints++
    }
    if (x == 'lose'){
        pcpoints++
    }
    score.textContent = `user: ${userpoints} v pc: ${pcpoints}`
}

function resultsoutput (result){
    div.textContent = result
    output.appendChild('div')
}

function getpcchoice(){
    randomnumber = Math.floor(Math.random()*3)
    if (randomnumber === 0){
        return 'rock';
    } else if (randomnumber===1) {
        return 'paper';
    } else if (randomnumber === 2){
        return 'scissors';
    } else {
        console.log('pc picked a sausage.. something is wrong');
    }
}

function whowins(){
    if (userchoice === pcchoice){
            return 'tie'
    } else if (
        (userchoice == 'rock' && pcchoice == 'scissors')||
        (userchoice == 'paper' && pcchoice == 'rock')||
        (userchoice == 'scissors' && pcchoice == 'paper')){         
            return 'win'
    } else if(
        (userchoice == 'rock' && pcchoice == 'paper')||
        (userchoice == 'paper' && pcchoice == 'scissors')||
        (userchoice == 'scissors' && pcchoice == 'rock')) {
            return 'lose'
    } else {
        console.log('unexpected ending.. must be an error')
        return 'error'
    }
}

// function playrounds(){
//     for (i = 0; i < numberofrounds; i++) {
//         playhand()
//     }};