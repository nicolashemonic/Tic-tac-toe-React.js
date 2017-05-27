import { Difficulty, Player, Option, ITicTacToe } from "../models";

// Build options

export function buildOptions(difficulty: Difficulty) {
    var options: Option[] = [];
    for (let x = 1; x <= difficulty; x++) {
        for (let y = 1; y <= difficulty; y++) {
            options.push(new Option(`X${x}Y${y}`));
        }
    }
    return options;
}

// Build players

export function buildPlayers() {
    var players: Player[] = [];
    for (let id = 1; id <= 2; id++) {
        players.push(new Player(id));
    }
    return players;
}

// Build winner values

export function buildWinnerValues(state: ITicTacToe) {
    var linear: Option[] = [];
    var diag1: Option[] = [];
    var diag2: Option[] = [];
    var d = state.difficulty + 1;

    state.players.forEach((p) => {
        let options = state.options.filter(o => o.owner && o.owner.id === p.id);

        for (let dimension = 1; dimension <= state.difficulty; dimension++) {

            let y = options.filter(o => o.value.indexOf(`Y${dimension}`) > -1);
            linear = y.length == state.difficulty ? y : linear;

            let x = options.filter(o => o.value.indexOf(`X${dimension}`) > -1);
            linear = x.length == state.difficulty ? x : linear;

            diag1 = diag1.concat(options.filter(o => o.value.indexOf(`X${dimension}Y${dimension}`) > -1));
            diag2 = diag2.concat(options.filter(o => o.value.indexOf(`X${dimension}Y${d - dimension}`) > -1));
        }
        diag1 = diag1.length == state.difficulty ? diag1 : [];
        diag2 = diag2.length == state.difficulty ? diag2 : [];
    });
    return linear.concat(diag1, diag2).map(o => o.value);
}