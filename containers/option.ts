import { nextPlayer, selectOption, checkWinner } from "../actions";
import { Option as OptionModel, IState } from "../models";
import { Option, IOwnProps } from "../components/option";
import { connect } from "react-redux";

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