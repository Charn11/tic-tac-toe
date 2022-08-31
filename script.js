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
            grid_elm.setAttribute('id',i+1);
            document.getElementById('grid-cont').appendChild(grid_elm);
        }

        //store player name in object
        const player1 = playerFactory(validate1.value,0);
        const player2 = playerFactory(validate2.value,0);
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
    const validate1 = document.getElementById('player1');
    const validate2 = document.getElementById('player2');
    const form = document.getElementById('playerNames')
    form.addEventListener('input', e => {
        if(validate1.value!=""&&validate2.value!="")
        {
            startGame.disabled = false;
        }
    })

    //gameplay logic
    let b1 = document.getElementById('1'), b2 = document.getElementById('2'), b3 = document.getElementById('3'), 
    b4 = document.getElementById('4'), b5 = document.getElementById('5'), b6 = document.getElementById('6'), 
    b7 = document.getElementById('7'), b8 = document.getElementById('8'), b9 = document.getElementById('9');

})();

const playerFactory = (playerName, score) => {
    return {playerName: playerName, score: score};
}
