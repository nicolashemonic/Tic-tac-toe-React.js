import { Action } from "../actions"
import { Option, Player, Difficulty } from "../models";
import { getOptions, getPlayers, getWinnerOptionValues } from "../helpers";

const defaultState = {
    difficulty: Difficulty.Easy,
    options: getOptions(Difficulty.Easy),
    players: getPlayers(),
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
                            owner: {
                                ...state.currentPlayer
                            }
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
        case "RESET_GAME":
            return {
                ...state,
                difficulty: Difficulty.Easy,
                options: getOptions(Difficulty.Easy),
                players: getPlayers(),
                currentPlayer: null,
                playerWinner: null
            }
        case "SET_DIFFICULTY":
            return {
                ...state,
                difficulty: action.difficulty,
                options: getOptions(action.difficulty)
            }
        default:
            return state;
    }
};

export default ticTacToe;