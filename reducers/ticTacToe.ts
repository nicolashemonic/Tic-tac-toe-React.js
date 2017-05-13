import { Action } from "../actions"

const defaultState = {
    difficulty: 3,
    values: ["X1Y1", "X1Y2", "X1Y3", "X2Y1", "X2Y2", "X2Y3", "X3Y1", "X3Y2", "X3Y3"],
    currentPlayer: 1,
    players: [
        {
            id: 1,
            symbol: "X",
            selectedValues: []
        },
        {
            id: 2,
            symbol: "0",
            selectedValues: []
        }
    ]
};

const ticTacToe = (state = defaultState, action: Action) => {
  switch (action.type) {
    case 'SELECT_PIECE':
        return {
            ...state,
            values: state.values.slice(),
            players: state.players.map((p) => {
                if (p.id === state.currentPlayer) {
                    let selectedValues = p.selectedValues.slice();
                    selectedValues.push(action.value);
                    return {
                        ...p,
                        selectedValues: selectedValues
                    }
                }
                return {
                    ...p,
                    selectedValues: p.selectedValues.slice()
                }
            })
        }
    case 'NEXT_PLAYER':
      return {
          ...state,
          values: state.values.slice(),
          currentPlayer: state.currentPlayer < state.players.length 
            ? state.currentPlayer + 1
            : 1
      }
    default:
      return state;
  }
};

export default ticTacToe;