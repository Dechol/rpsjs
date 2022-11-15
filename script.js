//simple rps
//user hand
//pc hand
//print winner
//play rounds

console.log('hello world')

user = prompt('rock paper or scissors?')
console.log('you pick '+ user.toUpperCase())

x = Math.floor(Math.random()*3)
y = 5
z = 'rock'

//pc = getcomputerchoice();

function getpcchoice(){
    rx = Math.floor(Math.random()*3);
    if (rx === 0){
        console.log('computer picks ROCK');
        return 'rock';
    } else if (rx===1) {
        console.log('computer picks PAPER');
        return 'paper';
    } else if (rx === 2){
        console.log('computer picks Scissors');
        return 'scissors';
    } else {
        console.log('error');
    }
}

pc = getpcchoice()


function game(){
    if (user == pc){
        console.log('game is a TIE')
    }else if ((user == 'rock' && pc == 'scissors')||(user == 'paper' && pc == 'rock')||(user == 'scissors' && pc == 'paper')){
        console.log('You WIN')
    }else{
        console.log('you LOSE')
    }
}



function playround(){
    for (let i = 0; i < 5; i++) {
        game()
        
    }
}

playround()




for (let i = 0; i < 5; i++) {
    console.log(i)
}