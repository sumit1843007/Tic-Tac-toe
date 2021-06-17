// variable
let count = 0;
let winner = false;
let active = true;
let moves = [];
for (let i = 0; i < 9; i++) {
    moves[i] = i;
}

document.getElementById('myButton0').addEventListener('click', () => {
    change(0);
    checkWinner(0);
    count += 1;
    matchdraw();
    console.log(count);
});

document.getElementById('myButton1').addEventListener('click', () => {
    change(1);
    checkWinner(1);
    count += 1;
    matchdraw();
    console.log(count);
});

document.getElementById('myButton2').addEventListener('click', () => {
    change(2);
    checkWinner(2);
    count += 1;
    matchdraw();
    console.log(count);
});

document.getElementById('myButton3').addEventListener('click', () => {
    change(3);
    checkWinner(3);
    count += 1;
    matchdraw();
    console.log(count);
});

document.getElementById('myButton4').addEventListener('click', () => {
    change(4);
    checkWinner(4);
    count += 1;
    matchdraw();
    console.log(count);
});

document.getElementById('myButton5').addEventListener('click', () => {
    change(5);
    checkWinner(5);
    count += 1;
    matchdraw();
    console.log(count);
});

document.getElementById('myButton6').addEventListener('click', () => {
    change(6);
    checkWinner(6);
    count += 1;
    matchdraw();
    console.log(count);
});

document.getElementById('myButton7').addEventListener('click', () => {
    change(7);
    checkWinner(7);
    count += 1;
    matchdraw();
    console.log(count);
});

document.getElementById('myButton8').addEventListener('click', () => {
    change(8);
    checkWinner(8);
    count += 1;
    matchdraw();
    console.log(count);
});

function change(value) {
    if (active == true) {
        document.getElementById('myButton' + value).innerHTML = '✗';
        document.getElementById('myButton' + value).disabled = true;
        document.getElementById('status').innerHTML = 'O';
        document.getElementById('status').style.color = 'white';
        // document.getElementById('player').style.color = 'black';
        active = false;
    } else {
        document.getElementById('myButton' + value).innerHTML = 'O';
        document.getElementById('myButton' + value).style.color = '#F7F9F9 ';


        document.getElementById('myButton' + value).disabled = true;
        document.getElementById('status').innerHTML = 'X';
        document.getElementById('status').style.color = 'red';
        // document.getElementById('player').style.color = 'black';

        active = true;
    }
}

document.getElementById('div').addEventListener('click', () => {
    location.reload();
});

function checkWinner(value) {
    if (active == true) {
        moves[value] = 'O';
        console.log(moves);
        checkCombination();
        active == false;
    } else {
        moves[value] = 'X';
        active == true;
        checkCombination();
        console.log(moves);

    }
}

function checkCombination() {

    if (moves[0] === moves[1] && moves[1] === moves[2]) {
        document.getElementById('player').innerHTML = '';
        document.getElementById('status').innerHTML = `${moves[0]} `;
        if (active == true) {
            document.getElementById('status').style.color = 'white';
            document.getElementById('player').innerHTML = 'has won !!';
        } else {
            document.getElementById('status').style.color = 'red';
            document.getElementById('player').innerHTML = 'has won !!';
        }
        button_diable();

        if (winner == false) {
            winner = true;
        }
    }
    if (moves[3] == moves[4] && moves[4] == moves[5]) {
        document.getElementById('player').innerHTML = '';
        document.getElementById('status').innerHTML = `${moves[3]} `;
        if (active == true) {
            document.getElementById('status').style.color = 'white';
            document.getElementById('player').innerHTML = 'has won !!';
        } else {
            document.getElementById('status').style.color = 'red';
            document.getElementById('player').innerHTML = 'has won !!';
        }
        button_diable();

        if (winner == false) {
            winner = true;
        }

    }
    if (moves[6] == moves[7] && moves[7] == moves[8]) {
        document.getElementById('player').innerHTML = '';
        document.getElementById('status').innerHTML = `${moves[6]} `;
        if (active == true) {
            document.getElementById('status').style.color = 'white';
            document.getElementById('player').innerHTML = 'has won !!';
        } else {
            document.getElementById('status').style.color = 'red';
            document.getElementById('player').innerHTML = 'has won !!';
        }
        button_diable();

        if (winner == false) {
            winner = true;
        }

    }
    if (moves[0] == moves[3] && moves[3] == moves[6]) {
        document.getElementById('player').innerHTML = '';
        document.getElementById('status').innerHTML = `${moves[0]} `;
        if (active == true) {
            document.getElementById('status').style.color = 'white';
            document.getElementById('player').innerHTML = 'has won !!';
        } else {
            document.getElementById('status').style.color = 'red';
            document.getElementById('player').innerHTML = 'has won !!';
        }
        button_diable();

        if (winner == false) {
            winner = true;
        }

    }
    if (moves[1] == moves[4] && moves[4] == moves[7]) {
        document.getElementById('player').innerHTML = '';
        document.getElementById('status').innerHTML = `${moves[1]} `;
        if (active == true) {
            document.getElementById('status').style.color = 'white';
            document.getElementById('player').innerHTML = 'has won !!';
        } else {
            document.getElementById('status').style.color = 'red';
            document.getElementById('player').innerHTML = 'has won !!';
        }
        button_diable();

        if (winner == false) {
            winner = true;
        }

    }
    if (moves[2] == moves[5] && moves[5] == moves[8]) {
        document.getElementById('player').innerHTML = '';
        document.getElementById('status').innerHTML = `${moves[2]} `;
        if (active == true) {
            document.getElementById('status').style.color = 'white';
            document.getElementById('player').innerHTML = 'has won !!';
        } else {
            document.getElementById('status').style.color = 'red';
            document.getElementById('player').innerHTML = 'has won !!';
        }
        button_diable();
        if (winner == false) {
            winner = true;
        }


    }
    if (moves[0] == moves[4] && moves[4] == moves[8]) {
        document.getElementById('player').innerHTML = '';
        document.getElementById('status').innerHTML = `${moves[0]} `;
        if (active == true) {
            document.getElementById('status').style.color = 'white';
            document.getElementById('player').innerHTML = 'has won !!';
        } else {
            document.getElementById('status').style.color = 'red';
            document.getElementById('player').innerHTML = 'has won !!';
        }

        button_diable();
        if (winner == false) {
            winner = true;
        }
    }
    if (moves[2] == moves[4] && moves[4] == moves[6]) {
        document.getElementById('player').innerHTML = '';
        document.getElementById('status').innerHTML = `${moves[2]} `;
        if (active == true) {
            document.getElementById('status').style.color = 'white';
            document.getElementById('player').innerHTML = 'has won !!';
        } else {
            document.getElementById('status').style.color = 'red';
            document.getElementById('player').innerHTML = 'has won !!';
        }
        button_diable();
        if (winner == false) {
            winner = true;
        }


    }


}
function button_diable() {
    for (let a = 0; a < 9; a++) {
        document.getElementById('myButton' + a).disabled = true;
    }

}
function matchdraw() {
    if (count == 9 && winner == false) {
        document.getElementById('player').innerHTML = '';
        document.getElementById('status').innerHTML = 'Match Draw';
        // document.getElementById('status').style.color = 'red';
    }
}