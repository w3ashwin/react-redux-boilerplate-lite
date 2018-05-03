import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from '../Form/index';

const mapStateToProps = state => ({ articles: state.articles });

const ConnectedList = ({ articles }) => (
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <Form />
      </div>
      <div className="col-lg-6">
        <ul className="list-group list-group-flush">
          {articles.map(el => (
            <li className="list-group-item" key={el.id}>
              {el.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const List = connect(mapStateToProps)(ConnectedList);

ConnectedList.defaultProps = {
  articles: []
};

ConnectedList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.string)
};

export default List;
