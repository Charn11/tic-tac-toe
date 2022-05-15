const TicTacToeModule = ( () => {

    let startGame = document.getElementById('start-button');

    startGame.addEventListener('click', e => {
        const gridBar = document.createElement('div');
        gridBar.setAttribute('class','bars');
        gridBar.setAttribute('id','gridBar');
        document.getElementById('board-selector').appendChild(gridBar);
        startGame.remove();
    });

})();

