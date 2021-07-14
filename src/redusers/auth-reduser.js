const authReducer = (state, action) => {
  switch (action.type) {
    case 'RETRIVE_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'LOGIN':
      return {
        ...state,
        userName: action.userName,
        token: action.token,
        authFailure: false,
      };
    case 'LOGOUT':
      return {
        ...state,
        token: null,
        userName: null,
        authFailure: false,
      };
    case 'AUTH_FAILURE':
      return {
        ...state,
        authFailure: true,
      };
    default:
      return state;
  }
};

export default authReducer;
