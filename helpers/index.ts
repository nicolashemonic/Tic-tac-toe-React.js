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

// Build winner option values

export function getWinnerOptionValues(state) {
    var linear = [];
    var diagLeft = [];
    var diagRight = [];
    var d = state.difficulty + 1;

    state.players.forEach((p) => {
        let options: any[] = state.options.filter(o => o.owner && o.owner.id === p.id);

        for (let dimension = 1; dimension <= state.difficulty; dimension++) {
            
            let y = options.filter(o => o.value.indexOf(`Y${dimension}`) > -1);
            linear = y.length == state.difficulty ? y : linear;

            let x = options.filter(o => o.value.indexOf(`X${dimension}`) > -1);
            linear = x.length == state.difficulty ? x : linear;

            diagLeft = diagLeft.concat(options.filter(o => o.value.indexOf(`X${dimension}Y${dimension}`) > -1));
            diagRight = diagRight.concat(options.filter(o => o.value.indexOf(`X${dimension}Y${d - dimension}`) > -1));
        }
    });
    
    if (linear.length === state.difficulty) {
        return linear.map(o => o.value);
    }
    if (diagLeft.length === state.difficulty) {
        return diagLeft.map(o => o.value);
    }
    if (diagRight.length === state.difficulty) {
        return diagRight.map(o => o.value);
    }
    return [];
}