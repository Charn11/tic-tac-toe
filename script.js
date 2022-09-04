//Module
const TicTacToeModule = ( () => {

    let startGame = document.getElementById('start-button');

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

        createObject();

        //change score player name on click of start button
        let scr1 = document.getElementById('scr1');
        scr1.innerText = createObject(1)+"(X): 0";
        let scr2 = document.getElementById('scr2');
        scr2.innerText = createObject(2)+"(O): 0";
    });
    
    //listens for XO player click in gameboard
    let playerMove = document.getElementsByClassName('grid-elm');
    let count = 0;
    document.addEventListener('click', e => {
        if(e.target.className=="grid-elm"&&e.target.innerText=="")
        {  
            if(count%2!=0)
            {
                e.target.innerText = "O";
                count++;
            }
            else
            {
                e.target.innerText = "X";
                count++;
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
            alert(createObject(1)+" wins");
            document.getElementById("scr1").innerText = createObject(1)+"(X): "+createObject(11);

        }
    }
  
})

const validate1 = document.getElementById('player1');
const validate2 = document.getElementById('player2');

//store player name in object
function createObject(flag)
{
    const player1 = playerFactory(validate1.value,0);
    const player2 = playerFactory(validate2.value,0);
    console.log(player2.playerName);
    console.log(player1.playerName);
    if(flag==1)
    {
        return player1.playerName;
    }
    else if(flag==11)
    {
        player1.score+=1;
        return player1.score;
    }
    else
    {
        return player2.playerName;
    }
}

const playerFactory = (playerName, score) => {
    return {playerName: playerName, score: score};
}
