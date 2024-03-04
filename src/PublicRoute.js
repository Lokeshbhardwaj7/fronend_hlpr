import { Navigate } from 'react-router-dom';
import { useAppSelector } from 'store';

function PublicRoute(props) {
  const { children } = props;
  const userAuthData = useAppSelector((state) => state.authorization);

  return userAuthData?.userData ? (
    userAuthData?.userData?.data?.user_type == 1 ? (
      <Navigate to="/sellers" />
    ) : (
      <Navigate to="/dashboard" />
    )
  ) : (
    children
  );
}

export default PublicRoute;
