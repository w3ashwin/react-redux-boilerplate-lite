import { takeLatest } from 'redux-saga/effects';
import actionConstants from '../constants/repoAction';
import { fetchRepositories } from './repoSaga';

export default function* saga() {
  yield takeLatest(actionConstants.FETCH_REPOS, fetchRepositories);
}
