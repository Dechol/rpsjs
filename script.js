//simple rps
//user hand
//pc hand
//compare hands
//display winner
//playrounds

//choose number of rounds
//link game to DOM
//show output 

//let rockbutton = document.querySelector('.rock')
const buttons = document.querySelectorAll('button')

buttons.forEach((button)=>{
    button.addEventListener('click', () => {
        console.log(button.innerHTML)
        playhand(button.innerHTML)
    })
})

// rockbutton.addEventListener('click', () =>{
//     alert('hellow world')
// })

//let numberofrounds = 3

console.log('Rock Paper Scissors? ')

//playrounds();

function playhand(x){
    userchoice = x
    //userchoice = prompt('rock paper or scissors?')
    console.log('you pick',userchoice)
    pcchoice = getpcchoice()
    whowins();
}

function getpcchoice(){
    randomnumber = Math.floor(Math.random()*3)
    if (randomnumber === 0){
        console.log('computer picks rock');
        return 'rock';
    } else if (randomnumber===1) {
        console.log('computer picks paper');
        return 'paper';
    } else if (randomnumber === 2){
        console.log('computer picks scissors');
        return 'scissors';
    } else {
        console.log('error');
    }
}

function whowins(){
    if (userchoice === pcchoice){
            console.log('TIE')
    } else if (
        (userchoice == 'rock' && pcchoice == 'scissors')||
        (userchoice == 'paper' && pcchoice == 'rock')||
        (userchoice == 'scissors' && pcchoice == 'paper')){
            console.log('WIN')
    } else if(
        (userchoice == 'rock' && pcchoice == 'paper')||
        (userchoice == 'paper' && pcchoice == 'scissors')||
        (userchoice == 'scissors' && pcchoice == 'rock')) {
            console.log('LOSE')   
    } else {
        console.log('unexpected ending.. must be an error')
    }
}

// function playrounds(){
//     for (i = 0; i < numberofrounds; i++) {
//         playhand()
//     }};