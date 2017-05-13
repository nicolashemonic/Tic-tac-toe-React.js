export type Action =
    ISelectPiece
    | INextPlayer;

// Select Piece

interface ISelectPiece {
    type: "SELECT_PIECE",
    value: string;
}

export const selectPiece = (value: string): ISelectPiece => {
    return {
        type: "SELECT_PIECE",
        value: value
    }
};

// Next Player

interface INextPlayer {
    type: "NEXT_PLAYER";
}

export const nextPlayer = (): INextPlayer => {
    return {
        type: "NEXT_PLAYER"
    }
};