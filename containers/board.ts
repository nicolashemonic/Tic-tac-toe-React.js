import { resetGame, setDifficulty } from "../actions";
import { Difficulty, IState } from "../models";
import { connect } from "react-redux";
import { Board, IOwnProps } from "../components/board";

export interface IMapStateToProps {
  state: IState
}

const mapStateToProps = (state: IState): IMapStateToProps => {
  return {
    state: state
  };
};

export interface IMapDispatchToProps {
  resetGame();
  changeDifficulty(difficulty: Difficulty);
}

const mapDispatchToProps = (dispatch): IMapDispatchToProps => {
  return {
    resetGame: () => {
      dispatch(resetGame());
    },
    changeDifficulty: (difficulty) => {
      dispatch(resetGame());
      dispatch(setDifficulty(difficulty));
    }
  };
};

export default connect<IMapStateToProps, IMapDispatchToProps, IOwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(Board);