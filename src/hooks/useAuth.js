import {useReducer, useMemo} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from '../redusers/auth-reduser';

const initialState = {
  userName: null,
  token: null,
  authFailure: false,
  isRouteToAuthPage: false,
};

const account = {
  userName: 'marat',
  password: '123qwe',
  tokenBase: '112ihg23gh34',
};

const useAuth = () => {
  const [authState, dispatch] = useReducer(authReducer, initialState);
  const {userName, password, tokenBase} = account;

  const equalsUserNameAndPass = (user, pass) => {
    if (user === userName && pass === password) {
      return tokenBase;
    }
    return null;
  };

  const authContext = useMemo(
    () => ({
      signIn: async (user, pass) => {
        const userToken = equalsUserNameAndPass(user, pass);
        if (userToken !== null) {
          try {
            await AsyncStorage.setItem('token', userToken);
          } catch (error) {
            console.log(error);
          }

          dispatch({type: 'LOGIN', userName: userName, token: userToken});
        } else {
          dispatch({type: 'AUTH_FAILURE'});
        }
        return userToken;
      },

      signOut: async () => {
        try {
          await AsyncStorage.removeItem('token');
        } catch (error) {
          console.log(error);
        }
        dispatch({type: 'LOGOUT'});
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return [authContext, authState];
};

export default useAuth;
