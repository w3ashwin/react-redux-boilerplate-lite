const ERRORS = {
  SERVER_ERROR: {
    name: 'SERVER_ERROR',
    message: 'Unexpected server error.'
  },
  UNAUTHORISED_ERROR: {
    name: 'UNAUTHORISED_ERROR',
    message: 'You are unauthorised to access this information.'
  },
  FORBIDDEN_ERROR: {
    name: 'FORBIDDEN_ERROR',
    message: 'You are forbidden to access this information.'
  },
  CLIENT_ERROR: {
    name: 'CLIENT_ERROR',
    message: 'Something went wrong. Please try again.'
  },
  NOT_FOUND: {
    name: 'NOT_FOUND',
    message: 'Requested content not found'
  }
};

export default ERRORS;
