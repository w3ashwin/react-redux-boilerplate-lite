import { call, put } from 'redux-saga/effects';
import { getRepos } from '../service/repo';
import { fetchReposSuccess, fetchReposError } from '../actions/Repos';
import ERRORS from '../globals/errorConstants';

function* fetchRepositories(action) {
  try {
    const repositories = yield call(getRepos, action.username);
    yield put(fetchReposSuccess(repositories));
  } catch (error) {
    if (error.name === ERRORS.NOT_FOUND.name) {
      yield put(fetchReposError('Username not identified in Github'));
    } else {
      yield put(fetchReposError(error.message));
    }
  }
}

module.exports = {
  fetchRepositories
};
