console.log('Welcome to tic tac toe');

let music = new Audio('music.mp3');
let turnc = new Audio('ting.mp3');
let gameover = new Audio('gameover.mp3');

let turn = 'X';

let isgameover = false;

//function to change the turn
const changeTurn = ()=>{
    return turn === 'X'? '0':'X'
    
}

//function to check win

const checkwin = ()=>{
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]  
    
    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== '')){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + 'Won'
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px';
        }
    })
};

//Game logic
// music.play()

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach((element) =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            turnc.play()
            checkwin();
            if(!isgameover){
                document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn;

            }
        }
    })
});

//add on click to reset

reset.addEventListener('click', ()=>{
    
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ''
    }) 
    turn = 'X';
    isgameover = false;
    document.getElementsByClassName('info')[0].innerText = 'Turn for ' + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0px';
})



