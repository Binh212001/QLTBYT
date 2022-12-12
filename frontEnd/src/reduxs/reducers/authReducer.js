import * as Type from '../constant/constant';

const innitialState = {
  user: null || JSON.parse(localStorage.getItem('user')),
  token: '' || localStorage.getItem('token'),
  message: '',
  isLogin: false,
};

const authRDC = (state = innitialState, { type, payload }) => {
  switch (type) {
    case Type.LOGIN_SUCCESS:
      if (payload.user._id) {
        localStorage.setItem('user', JSON.stringify(payload.user));
        localStorage.setItem('token', payload.token);

        return {
          ...state,
          user: payload.user,
          token: payload.token,
          isLogin: true,
        };
      } else {
        return { ...state };
      }

    case Type.LOGIN_FAIL:
      return { ...state, message: 'Tai khoan hoac mat khau khong chinh xac' };

    case Type.REGISTER_FAIL:
      return { ...state, message: 'Đăng kí thất bại' };

    case Type.LOGOUT:
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      return { ...state, user: null, token: '', isLogin: false };
    default:
      return state;
  }
};

export default authRDC;
