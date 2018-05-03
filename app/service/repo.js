import axios from 'axios';

const getRepos = username => axios({
  method: 'get',
  url: `https://api.github.com/users/${username}/repos?type=all&sort=updated`
});

module.exports = {
  getRepos
};
