//Module
const TicTacToeModule = ( () => {

    let startGame = document.getElementById('start-button');

    const validate1 = document.getElementById('player1');
    const validate2 = document.getElementById('player2');

    startGame.addEventListener('click', e => {
        let grid_container = document.createElement('div');
        grid_container.setAttribute('id','grid-cont');
        document.getElementById('board-selector').appendChild(grid_container);
        document.getElementById('input-container').remove();
        for(let i=0; i<9; i++)
        {
            let grid_elm = document.createElement('div');
            grid_elm.setAttribute('class','grid-elm');
            grid_elm.setAttribute('id',"b"+(i+1));
            document.getElementById('grid-cont').appendChild(grid_elm);
        }

        let round = document.createElement('div');
        round.setAttribute('id','round');
        document.getElementById('board-selector').appendChild(round);
        round.innerText = "Round 1";
        
        //store player name in object
        player1 = playerFactory(validate1.value,0);
        player2 = playerFactory(validate2.value,0);
        console.log(player2.playerName);
        console.log(player1.playerName);

        //change score player name on click of start button
        let scr1 = document.getElementById('scr1');
        scr1.innerText = player1.playerName+"(X): 0";
        let scr2 = document.getElementById('scr2');
        scr2.innerText = player2.playerName+"(O): 0";
    });
    
    //listens for XO player click in gameboard
    let playerMove = document.getElementsByClassName('grid-elm');
    document.addEventListener('click', e => {
        if(e.target.className=="grid-elm"&&e.target.innerText=="")
        {  
            if(resetCount%2!=0)
            {
                e.target.innerText = "O";
                resetCount++;
            }
            else
            {
                e.target.innerText = "X";
                resetCount++;
            }
        }
    })

    //validate submit button
    const form = document.getElementById('playerNames')
    form.addEventListener('input', e => {
        if(validate1.value!=""&&validate2.value!="")
        {
            startGame.disabled = false;
        }
    })

})();

let player1, player2;
let stage = 1;
let resetCount = 0;
//gameplay logic
let b1 = document.getElementById('b1'), b2 = document.getElementById('b2'), b3 = document.getElementById('b3'), 
b4 = document.getElementById('b4'), b5 = document.getElementById('b5'), b6 = document.getElementById('b6'), 
b7 = document.getElementById('b7'), b8 = document.getElementById('b8'), b9 = document.getElementById('b9');

document.addEventListener('click', e=> {
  
    let classList = document.getElementsByClassName("grid-elm");
    let s = [];
    for(let i=0; i<classList.length; i++)
    {
        s[i]=classList[i].innerText;
        if((s[0]=="X"&&s[1]=="X"&&s[2]=="X")||(s[0]=="X"&&s[3]=="X"&&s[6]=="X")||(s[0]=="X"&&s[4]=="X"&&s[8]=="X"))
        {
            alert(player1.playerName);
            document.getElementById("round").innerText = "Round "+stage;
            resetBoard();
            break;
        }
    }
  
})

function resetBoard()
{
    let reset = document.getElementsByClassName("grid-elm");
    for(let i=0; i<reset.length;i++)
    {
        reset[i].innerText = "";
        resetCount = 0;
    }
}


const playerFactory = (playerName, score) => {
    const returnName = () => 
    {
        alert(this.playerName);
    }
    return {playerName, score, returnName};
}
