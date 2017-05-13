import * as React from "react";

export default class Piece extends React.Component<any, any> {
    render() {
        return <a className="board__piece" onClick={() => this.props.play()}>
            <span className="board__piece__symbol">{this.props.symbol}</span>
        </a>;
    }
}