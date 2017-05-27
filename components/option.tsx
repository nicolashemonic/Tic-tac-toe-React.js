import * as React from "react";
import { Option as OptionModel } from "../models";
import { IMapDispatchToProps, IMapStateToProps } from "../containers/option";

export interface IOwnProps {
    option: OptionModel;
}

interface IProps extends IOwnProps, IMapDispatchToProps, IMapStateToProps {}

interface IState { }

export class Option extends React.Component<IProps, IState> {

    boardOptionClassName() {
        var classNames = ["board__option"];

        if (this.props.option.isWinner) {
            classNames.push("board__option_winner");
        }
        if (this.props.option.owner) {
            classNames.push(`board__option_player_${this.props.option.owner.id}`);
        }
        return classNames.join(" ");
    }

    onSelectOption() {
        if (this.props.state.ticTacToe.playerWinner || this.props.option.owner) {
            return;
        }
        this.props.play(this.props.option);
    }

    render() {
        return (
            <a className={this.boardOptionClassName()} onClick={() => this.onSelectOption()}></a>
        );
    }
}