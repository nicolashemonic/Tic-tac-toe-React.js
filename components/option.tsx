import * as React from "react";

export default class Option extends React.Component<any, any> {
    boardOptionClassName() {
        var classNames = ["board__option"];
        if (this.props.isWinner) {
            classNames.push("board__option_winner");
        }
        if (this.props.owner) {
            classNames.push(`board__option_player_${this.props.owner.id}`);
        }
        return classNames.join(" ");
    }

    render() {
        return (
            <a className={this.boardOptionClassName()} onClick={() => this.props.play()}></a>
        );
    }
}