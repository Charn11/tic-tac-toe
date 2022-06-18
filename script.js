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
            grid_elm.setAttribute('class','grid-elm')
            document.getElementById('grid-cont').appendChild(grid_elm);
        }

        //store player name in object
        const player1 = playerFactory(validate1.value,0);
        const player2 = playerFactory(validate2.value,0);
        console.log(player2.playerName);
        console.log(player1.playerName);
    });

    //listens for XO player click in gameboard
    let playerMove = document.getElementsByClassName('grid-elm');
    let count = 0;
    document.addEventListener('click', e => {
        if(e.target.className=="grid-elm")
        {
            if(count%2!=0)
            {
                e.target.innerText = "X";
                count++;
            }
            else
            {
                e.target.innerText = "O";
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
})();

const playerFactory = (playerName, score) => {
    return {playerName: playerName, score: score};
}
