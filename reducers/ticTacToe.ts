import { Action } from "../actions"
import { Option, Player } from "../models";
import getWinnerOptionValues from "../helpers/winnerOptions";

const defaultState = {
    difficulty: 3,
    options: [
        new Option("X1Y1"),
        new Option("X1Y2"),
        new Option("X1Y3"),
        new Option("X2Y1"),
        new Option("X2Y2"),
        new Option("X2Y3"),
        new Option("X3Y1"),
        new Option("X3Y2"),
        new Option("X3Y3")
    ],
    players: [
        new Player(1, "X"),
        new Player(2, "O")
    ],
    currentPlayer: null,
    playerWinner: null
};

const ticTacToe = (state = defaultState, action: Action) => {
    switch (action.type) {
        case "NEXT_PLAYER":
            return {
                ...state,
                currentPlayer: state.currentPlayer && state.currentPlayer.id < state.players.length
                    ? state.players[state.currentPlayer.id] // id + 1 - 1
                    : state.players[0]
            }
        case "SELECT_OPTION":
            return {
                ...state,
                options: state.options.map((option) => {
                    if (option.value === action.option.value) {
                        return {
                            ...option,
                            symbol: state.currentPlayer.symbol
                        }
                    }
                    return {
                        ...option
                    }
                })
            }
        case "CHECK_WINNER":
            let winnerOptionValues = getWinnerOptionValues(state);
            if (winnerOptionValues.length) {
                return {
                    ...state,
                    options: state.options.map((option) => {
                        return {
                            ...option,
                            isWinner: winnerOptionValues.filter(v => v === option.value).length === 1
                        }
                    }),
                    playerWinner: state.currentPlayer
                }
            }
            return {
                ...state
            }
        default:
            return state;
    }
};

export default ticTacToe;