import * as React from "react";
import { connect } from "react-redux";
import Option from "./option";
import { nextPlayer, selectOption, checkWinner, resetGame, setDifficulty } from "../actions";
import { Option as OptionModel, Difficulty } from "../models";

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
    },
    reset: () => {
      dispatch(resetGame());
    },
    changeDifficulty: (difficulty: Difficulty) => {
      dispatch(resetGame());
      dispatch(setDifficulty(difficulty));
    }
  };
};

class Board extends React.Component<any, any> {
  play(option) {
    if (this.props.state.ticTacToe.playerWinner || option.owner) {
      return;
    }
    this.props.play(option);
  }

  boardClassName() {
    var classNames = ["board"];
    switch (this.props.state.ticTacToe.difficulty) {
      case Difficulty.Easy:
        classNames.push("board_difficulty_easy");
        break;
      case Difficulty.Medium:
        classNames.push("board_difficulty_medium");
        break;
      case Difficulty.Hard:
        classNames.push("board_difficulty_hard");
        break;
    }
    return classNames.join(" ");
  }

  onChangeDifficulty(difficulty) {
    this.props.changeDifficulty(parseInt(difficulty))
  }

  onReset() {
    this.props.reset();
  }

  render() {
    return (
      <div>
        <p>
          <label>Difficulty:</label>
          <select onChange={(e) => this.onChangeDifficulty(e.currentTarget.value)}>
            <option value="3">Easy</option>
            <option value="4">Medium</option>
            <option value="5">Hard</option>
          </select>
        </p>

        <p><a onClick={() => this.onReset()}>Reset game</a></p>

        <div className={this.boardClassName()}>
          {this.props.state.ticTacToe.options
            .map((o, k) => <Option play={() => this.play(o)} owner={o.owner} isWinner={o.isWinner} key={k} />)}
        </div>

        {this.props.state.ticTacToe.playerWinner &&
          <h1>{`Bravo! Player ${this.props.state.ticTacToe.playerWinner.id} won!`}</h1>
        }
      </div>
    );
  }
}

const ConnectedBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default ConnectedBoard;