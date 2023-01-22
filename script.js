//simple rps
//user hand
//pc hand
//compare hands
//display winner

//const button = document.querySelector('.rock')
//console.log(button.innerHTML)

console.log('Rock Paper Scissors? ')

userchoice = prompt('rock paper or scissors?')

console.log('you pick',userchoice.toLowerCase())

pcchoice = getpcchoice()

playround();


//numberofrounds = 5
//z = 'rock'

//pc = getcomputerchoice();

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

function playround(){
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

// //function playround(){
//     for (let i = 0; i < 5; i++) {
//         game()
        
//     }
// }

//playround()




// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }