import * as React from "react";

export default class Option extends React.Component<any, any> {
    render() {
        return (
            <a className="board__option" onClick={() => this.props.play()}>
                <span className="board__option__symbol">{this.props.symbol}</span>
            </a>
        );
    }
}