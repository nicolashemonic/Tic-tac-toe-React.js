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

export default function getWinnerOptionValues(state) {
    var winnerOptionValues = [];

    state.players.forEach((p) => {
        let options = state.options.filter(o => o.symbol === p.symbol);

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