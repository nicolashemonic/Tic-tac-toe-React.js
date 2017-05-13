import * as React from "react";
import { connect } from "react-redux";
import Option from "./option";
import { nextPlayer, selectOption, checkWinner } from "../actions";
import { Option as OptionModel } from "../models";

const mapStateToProps = (state) => {
  return {
    state: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    play: (option: OptionModel) => {
      dispatch(nextPlayer());
      dispatch(selectOption(option));
      dispatch(checkWinner());
    }
  };
};

class Board extends React.Component<any, any> {
  play(option) {
    if (this.props.state.ticTacToe.playerWinner) {
      return;
    }
    this.props.play(option);
  }

  render() {
    return (
      <div>
        {this.props.state.ticTacToe.playerWinner &&
          <h1>{`Bravo! Player ${this.props.state.ticTacToe.playerWinner.id} won!`}</h1>
        }
        <div className="board">
          {this.props.state.ticTacToe.options
            .map((o, k) => <Option play={() => this.play(o)} symbol={o.symbol} isWinner={o.isWinner} key={k} />)}
        </div>
      </div>
    );
  }
}

const ConnectedBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default ConnectedBoard;