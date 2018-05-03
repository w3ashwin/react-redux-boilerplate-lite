import actions from '../constants/repoAction';

export const fetchRepos = username => ({
  type: actions.FETCH_REPOS,
  username
});

export const fetchReposSuccess = repositories => ({
  type: actions.FETCH_REPOS_SUCCESS,
  repositories
});

export const fetchReposError = error => ({
  type: actions.FETCH_REPOS_ERROR,
  error
});
