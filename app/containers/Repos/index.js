import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchRepos } from '../../actions/Repos';

class Repos extends React.Component {
  handleChange = (event) => {
    this.props.getRepositories(event.target.value);
  };

  renderList = () => this.props.list.map(repo => (
    <p> {repo.url} </p>
  ));

  render() {
    const { username } = this.props;
    return (
      <div>
        <label htmlFor="title">Git username</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={username}
          onChange={this.handleChange}
        />
        {this.props.error !== '' && this.props.error}
        {this.props.list && this.renderList()}
      </div>
    );
  }
}

Repos.propTypes = {
  username: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  getRepositories: PropTypes.func.isRequired,
  error: PropTypes.string,
};

Repos.defaultProps = {
  error: '',
};

const mapDispatchToProps = dispatch => ({
  getRepositories: username => dispatch(fetchRepos(username)),
});

const mapStateToProps = state => ({
  username: state.demo.get('username'),
  list: state.demo.get('list'),
  error: state.demo.get('error'),
});

export default connect(mapStateToProps, mapDispatchToProps)(Repos);

