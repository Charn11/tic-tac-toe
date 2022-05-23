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
    
})();


