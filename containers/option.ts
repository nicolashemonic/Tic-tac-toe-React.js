import { nextPlayer, selectOption, checkWinner } from "../actions";
import { Option as OptionModel, Difficulty, IState } from "../models";
import { connect } from "react-redux";
import { Option, IOwnProps } from "../components/option";

export interface IMapStateToProps {
  state: IState
}

const mapStateToProps = (state: IState): IMapStateToProps => {
  return {
    state: state
  };
};

export interface IMapDispatchToProps {
  play(option: OptionModel);
}

const mapDispatchToProps = (dispatch): IMapDispatchToProps => {
  return {
    play: (option) => {
      dispatch(nextPlayer());
      dispatch(selectOption(option));
      dispatch(checkWinner());
    }
  };
};

export default connect<IMapStateToProps, IMapDispatchToProps, IOwnProps>(
  mapStateToProps,
  mapDispatchToProps
)(Option);