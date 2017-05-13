import { Option, Player } from "../models";

export type Action =
    INextPlayer
    | ISelectOption
    | ICheckWinner;

// Next Player

interface INextPlayer {
    type: "NEXT_PLAYER";
}

export const nextPlayer = (): INextPlayer => {
    return {
        type: "NEXT_PLAYER"
    }
};

// Select Option

interface ISelectOption {
    type: "SELECT_OPTION";
    option: Option;
}

export const selectOption = (option: Option): ISelectOption => {
    return {
        type: "SELECT_OPTION",
        option: option
    }
};

// Check Winner

interface ICheckWinner {
    type: "CHECK_WINNER"
}

export const checkWinner = (): ICheckWinner => {
    return {
        type: "CHECK_WINNER"
    }
}