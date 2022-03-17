import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from 'redux/authentication';
import { useSelector } from 'react-redux';

export default function PrivateRoute({
  children,
  redirectTo = '/login',
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
