import { Difficulty, Player, Option } from "../models";

// Build options

export function getOptions(difficulty: Difficulty) {
    var options = [];
    for (let x = 1; x <= difficulty; x++) {
        for (let y = 1; y <=difficulty; y++) {
            options.push(new Option(`X${x}Y${y}`));
        }
    }
    return options;
}

// Build players

export function getPlayers() {
    var players = [];
    for(let id = 1; id <= 2; id++) {
        players.push(new Player(id));
    }
    return players;
}

// Build winning combination

function winnerOptionValuesLine(options, line, difficulty) {
    var winnerOptionValues = [];
    for (let i = 1; i <= difficulty; i++) {
        if (options.find(o => o.value === `X${line}Y${i}`)) {
            winnerOptionValues.push(`X${line}Y${i}`);
        }
    };
    return winnerOptionValues;
}

function winnerOptionValuesCol(options, col, difficulty) {
    var winnerOptionValues = [];
    for (let i = 1; i <= difficulty; i++) {
        if (options.find(o => o.value === `X${i}Y${col}`)) {
            winnerOptionValues.push(`X${i}Y${col}`);
        }
    };
    return winnerOptionValues;
}

function winnerOptionValuesDiagLeft(options, difficulty) {
    var winnerOptionValues = [];
    for (let i = 1; i <= difficulty; i++) {
        if (options.find(o => o.value === `X${i}Y${i}`)) {
            winnerOptionValues.push(`X${i}Y${i}`);
        }
    };
    return winnerOptionValues;
}

function winnerOptionValuesDiagRight(options, difficulty) {
    var winnerOptionValues = [];
    var y = difficulty + 1;
    for (let i = 1; i <= difficulty; i++) {
        if (options.find(o => o.value === `X${i}Y${y - i}`)) {
            winnerOptionValues.push(`X${i}Y${y - i}`);
        }
    };
    return winnerOptionValues;
}

export function getWinnerOptionValues(state) {
    var winnerOptionValues = [];

    state.players.forEach((p) => {
        let options = state.options.filter(o => o.owner && o.owner.id === p.id);

        for (let i = 1; i <= state.difficulty; i++) {
            if (winnerOptionValues.length < state.difficulty) {
                winnerOptionValues = winnerOptionValuesLine(options, i, state.difficulty);
            }
            if (winnerOptionValues.length < state.difficulty) {
                winnerOptionValues = winnerOptionValuesCol(options, i, state.difficulty);
            }
        }
        if (winnerOptionValues.length < state.difficulty) {
            winnerOptionValues = winnerOptionValuesDiagLeft(options, state.difficulty);
        }
        if (winnerOptionValues.length < state.difficulty) {
            winnerOptionValues = winnerOptionValuesDiagRight(options, state.difficulty);
        }
    });

    return winnerOptionValues.length === state.difficulty ? winnerOptionValues : [];
}