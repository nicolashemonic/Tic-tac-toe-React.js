import * as React from "react";
import { connect } from "react-redux";
import Option from "./option";
import { nextPlayer, selectOption } from "../actions";
import { Option as OptionModel } from "../models";

const mapStateToProps = (state) => {
  return {
    state: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    play: (option: OptionModel) => {
      dispatch(selectOption(option));
      dispatch(nextPlayer());
    }
  };
};

class Board extends React.Component<any, any> {
  render() {
    return (
      <div className="board">
        {this.props.state.ticTacToe.options
          .map((o, k) => <Option play={() => this.props.play(o)} symbol={o.symbol} key={k} />)}
      </div>
    );
  }
}

const ConnectedBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default ConnectedBoard;