import { Action } from "../actions"
import { Option, Player } from "../models";

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
    currentPlayer: new Player(1, "X"),
    players: [
        new Player(1, "X"),
        new Player(2, "O")
    ]
};

const ticTacToe = (state = defaultState, action: Action) => {
  switch (action.type) {
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
    case "NEXT_PLAYER":
      return {
          ...state,
          currentPlayer: state.currentPlayer.id < state.players.length 
            ? state.players[state.currentPlayer.id] // id + 1 - 1
            : state.players[0]
      }
    default:
      return state;
  }
};

export default ticTacToe;