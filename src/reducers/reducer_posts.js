import { FETCH_POSTS, FETCH_POST, SELECT_POST, DESELECT_POST } from '../actions/index';

const INITIAL_STATE = { all: [], post: null, selectedPostIds: []};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_POST:
      return { ...state, post: action.payload.data };
    case FETCH_POSTS:
      return { ...state, all: action.payload.data };
    case SELECT_POST:
      let sIds = [ ...state.selectedPostIds, action.payload];
      return { ...state, selectedPostIds: sIds };
    case DESELECT_POST:
      let dSids = state.selectedPostIds.filter(id => id!=action.payload);
      return { ...state, selectedPostIds: dSids };
      return state;
    default:
      return state;
  }
}
