const TicTacToeModule = ( () => {

    let startGame = document.getElementById('start-button');

    startGame.addEventListener('click', e => {
        let grid_container = document.createElement('div');
        grid_container.setAttribute('class','grid-cont');
        grid_container.setAttribute('id','grid_container');
        document.getElementById('board-selector').appendChild(grid_container);
        let gridBar = document.createElement('div');
        gridBar.setAttribute('class','bars');
        document.getElementById('grid_container').appendChild(gridBar);
        startGame.remove();
    });

})();

