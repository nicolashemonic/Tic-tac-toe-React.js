import { Option, Player } from "../models";

export type Action =
    ISelectOption
    | INextPlayer;

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

// Next Player

interface INextPlayer {
    type: "NEXT_PLAYER";
}

export const nextPlayer = (): INextPlayer => {
    return {
        type: "NEXT_PLAYER"
    }
};