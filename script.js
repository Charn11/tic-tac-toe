// Initialize Module
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
        
        let restart = document.createElement('button');
        restart.setAttribute('id','restart');
        restart.innerText = "Restart";
        document.getElementById('board-selector').appendChild(restart);

        //restart listener
        restart.addEventListener("click", e => {
            let resetGrid = document.getElementsByClassName("grid-elm");
            resetCount = 0;
            for(let i=0; i<resetGrid.length;i++)
            {
                resetGrid[i].innerText = "";
            }
        })

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
        if(e.target.className=="grid-elm"&&e.target.innerText==""&&gameCount==0)
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
let gameCount = 0;

//Gameplay Module
const Gameplay = ( () => {
    document.addEventListener('click', e=> {
    
        let classList = document.getElementsByClassName("grid-elm");
        let s = [];
        for(let i=0; i<classList.length; i++)
        {
            s[i]=classList[i].innerText;
            if((s[0]=="X"&&s[1]=="X"&&s[2]=="X")||(s[0]=="X"&&s[3]=="X"&&s[6]=="X")||(s[0]=="X"&&s[4]=="X"&&s[8]=="X")||
            (s[1]=="X"&&s[4]=="X"&&s[7]=="X")||(s[2]=="X"&&s[4]=="X"&&s[6]=="X")||(s[2]=="X"&&s[5]=="X"&&s[8]=="X")||
            (s[3]=="X"&&s[4]=="X"&&s[5]=="X")||(s[6]=="X"&&s[7]=="X"&&s[8]=="X"))
            {
                document.body.style.pointerEvents = "none"
                gameCount = 1;
                player1.score++;
                document.getElementById("scr1").innerText = player1.playerName+"(X): "+player1.score;
                let nextRound = document.createElement('div');
                nextRound.setAttribute('id','next');
                nextRound.innerText = player1.playerName+" wins!";
                document.getElementById('board-selector').appendChild(nextRound);
                document.getElementById('restart').remove();
                addButtons();
                break;
            }
            else if((s[0]=="O"&&s[1]=="O"&&s[2]=="O")||(s[0]=="O"&&s[3]=="O"&&s[6]=="O")||(s[0]=="O"&&s[4]=="O"&&s[8]=="O")||
            (s[1]=="O"&&s[4]=="O"&&s[7]=="O")||(s[2]=="O"&&s[4]=="O"&&s[6]=="O")||(s[2]=="O"&&s[5]=="O"&&s[8]=="O")||
            (s[3]=="O"&&s[4]=="O"&&s[5]=="O")||(s[6]=="O"&&s[7]=="O"&&s[8]=="O"))
            {
                gameCount = 1;
                player2.score++;
                document.getElementById("scr2").innerText = player2.playerName+"(O): "+player2.score;
                let nextRound = document.createElement('div');
                nextRound.setAttribute('id','next');
                nextRound.innerText = player2.playerName+" wins!";
                document.getElementById('board-selector').appendChild(nextRound);
                document.getElementById('restart').remove();
                addButtons();
                break;
            }
        }
    })

    /*function logic(a)
    {
        if(a==1)
        {
            player1.score++;
            document.getElementById("scr1").innerText = player1.playerName+"(X): "+player1.score;
            let nextRound = document.createElement('div');
            nextRound.setAttribute('id','next');
            nextRound.innerText = player1.playerName+" wins!";
            document.getElementById('board-selector').appendChild(nextRound);
            document.getElementById('restart').remove();
            document.body.style.pointerEvents = "none"
            addButtons();
        }
        else if(a==2){
            player2.score++;
            document.getElementById("scr2").innerText = player2.playerName+"(O): "+player2.score;
            let nextRound = document.createElement('div');
            nextRound.setAttribute('id','next');
            nextRound.innerText = player2.playerName+" wins!";
            document.getElementById('board-selector').appendChild(nextRound);
            document.getElementById('restart').remove();
            addButtons();
        }
    }*/

    function addButtons(){
        let nextButton = document.createElement('button');
        let resetButton = document.createElement('button');
        nextButton.setAttribute('id','nxtButton');
        resetButton.setAttribute('id','resetButton');
        nextButton.innerText = "Next round";
        resetButton.innerText = "Reset";
        document.getElementById('board-selector').appendChild(nextButton);
        document.getElementById('board-selector').appendChild(resetButton);
        nextButton.addEventListener('click', e=> {
            stage++;
            document.getElementById("round").innerText = "Round "+stage;
            addRestartButton();
            resetBoard();
            })
        resetButton.addEventListener('click', e => {
        location.reload();
            })
    }

    function addRestartButton()
    {
        let restart = document.createElement('button');
        restart.setAttribute('id','restart');
        restart.innerText = "Restart";
        document.getElementById('board-selector').appendChild(restart);
        restart.addEventListener("click", e => {
            let resetGrid = document.getElementsByClassName("grid-elm");
            resetCount = 0;
            for(let i=0; i<resetGrid.length;i++)
            {
                resetGrid[i].innerText = "";
            }
        })
    }

    function resetBoard()
    {
    let resetGrid = document.getElementsByClassName("grid-elm");
    resetCount = 0;
    for(let i=0; i<resetGrid.length;i++)
        {
            resetGrid[i].innerText = "";
        }
        document.getElementById('nxtButton').remove();
        document.getElementById('resetButton').remove();
        document.getElementById('next').remove();
        gameCount = 0;
    }
}) ();

//factory
const playerFactory = (playerName, score) => {
    return {playerName, score};
}
