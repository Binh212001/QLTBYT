import { authApi } from '../../apis/authApi';
import * as Type from '../constant/constant';

export const LoginStart = (data) => {
  return async (dispatch) => {
    return authApi
      .Login(data)
      .then((res) => dispatch(LoginSuccess(res)))
      .catch((err) => {
        dispatch(LoginFail());
      });
  };
};

export const RegisterStart = (data) => {
  return async (dispatch) => {
    return authApi
      .Register(data)
      .then((res) => dispatch(LoginSuccess(res)))
      .catch((err) => {
        dispatch(RegisterFail());
      });
  };
};

export const LoginSuccess = (user) => {
  return { type: Type.LOGIN_SUCCESS, payload: user };
};

export const LoginFail = () => {
  return { type: Type.LOGIN_FAIL };
};

export const Logout = () => {
  return { type: Type.LOGOUT };
};

export const RegisterFail = () => {
  return { type: Type.REGISTER_FAIL };
};
