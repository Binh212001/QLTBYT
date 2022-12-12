import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute({ children, ...rest }) {
  let { isLogin, user } = useSelector((state) => state.auth);

  // const user = localStorage.getItem('user');

  return user && isLogin ? <Outlet /> : <Navigate to='/auth' />;
}

export default PrivateRoute;
