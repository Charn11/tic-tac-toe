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
})();


