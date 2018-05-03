import { fromJS } from 'immutable';
import { FETCH_REPOS, FETCH_REPOS_SUCCESS, FETCH_REPOS_ERROR } from '../constants/repoAction';

const initialState = fromJS({
  username: '',
  list: [],
  loading: false,
  error: ''
});

const demoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPOS:
      return state
        .set('username', action.username)
        .set('loading', true);
    case FETCH_REPOS_SUCCESS:
      return state
        .set('list', action.repositories)
        .set('loading', false);
    case FETCH_REPOS_ERROR:
      return state
        .set('loading', false)
        .set('list', [])
        .set('error', action.error);
    default:
      return state;
  }
};

export default demoReducer;
