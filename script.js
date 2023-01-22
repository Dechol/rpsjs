//simple rps
//user hand
//pc hand
//compare hands
//display winner

//const button = document.querySelector('.rock')
//console.log(button.innerHTML)

console.log('Rock Paper Scissors? ')

playrounds()






//numberofrounds = 5
//z = 'rock'

//pc = getcomputerchoice();

function playhand(){
    userchoice = prompt('rock paper or scissors?')
    console.log('you pick',userchoice.toLowerCase())
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

function playrounds(){
    for (i = 0; i < 3; i++) {
        playhand()
    }
}


