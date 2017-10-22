import {
  ADD_ACTION
} from './actions';
import {Action, AssociativeArray, INotifierStore} from "./types";

const initialState: INotifierStore = {
  score: 100,
  studentActions: [],
};

function createReducer() {

  const behaviors: AssociativeArray = {
    [ADD_ACTION]: (state: INotifierStore, action: Action) => {
      return {
        score: state.score - action.payload.fee,
        studentActions: state.studentActions.length > 4
          ? state.studentActions.slice(0, -1).concat(action.payload)
          : state.studentActions.concat(action.payload)
      } as INotifierStore;
    }
  };

  return (state: INotifierStore = initialState, action: Action) => {
    const behavior = behaviors[action.type];
    return behavior ? behavior(state, action) : state
  };
}

export default createReducer;