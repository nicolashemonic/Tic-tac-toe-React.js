import * as React from "react";
import { connect } from "react-redux";
import Piece from "./piece";
import { nextPlayer, selectPiece } from "../actions";

const mapStateToProps = (state) => {
  return {
    state: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    play: (value: string) => {
      dispatch(selectPiece(value));
      dispatch(nextPlayer());
    }
  };
};

class Board extends React.Component<any, any> {
  renderPieces() {
    var pieces = [];

    this.props.state.ticTacToe.values.forEach((v, k) => {
      var symbol = "";

      this.props.state.ticTacToe.players.forEach((p, k) => {
        if (p.selectedValues.find(sV => sV === v)) {
          symbol = p.symbol;
        }
      });

      pieces.push(<Piece play={() => this.props.play(v)} symbol={symbol} key={k} />);
    });
    return pieces;
  }

  render() {
    return (
      <div className="board">
        {this.renderPieces()}
      </div>
    );
  }
}

const ConnectedBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default ConnectedBoard;