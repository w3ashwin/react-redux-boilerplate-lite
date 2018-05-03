import React from 'react';
import PropTypes from 'prop-types';

const Loader = props => {
  const { body } = document;
  if (props.loading) {
    body.classList.add('modal-open');
  } else {
    body.classList.remove('modal-open');
  }
  return (
    <div>
      {
        props.loading &&
          <div className="loadingOverlay">
            <div className="loader" style={props.styles}>
              <div className="loaderOne" />
              <div className="loaderTwo" />
              <div className="loaderThree" />
            </div>
          </div>
      }
    </div>);
};

Loader.propTypes = {
  loading: PropTypes.bool,
  styles: PropTypes.any
};

Loader.defaultProps = {
  loading: false,
  styles: {}
};

export default Loader;
