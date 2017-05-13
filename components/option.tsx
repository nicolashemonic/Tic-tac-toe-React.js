import * as React from "react";

export default class Option extends React.Component<any, any> {
    boardOptionClassName() {
        var classNames = ["board__option"];
        if (this.props.isWinner) {
            classNames.push("board__option_winner");
        }
        return classNames.join(" ");
    }

    render() {
        return (
            <a className={this.boardOptionClassName()} onClick={() => this.props.play()}>
                <span className="board__option__symbol">{this.props.symbol}</span>
            </a>
        );
    }
}