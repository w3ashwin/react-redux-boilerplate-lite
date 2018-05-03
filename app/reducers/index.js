import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import demoReducer from './repoReducer';

export default combineReducers({
  articles: articleReducer,
  demo: demoReducer
});
