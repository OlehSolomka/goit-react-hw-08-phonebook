import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from 'redux/authentication';
import { useSelector } from 'react-redux';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/contacts',
  redirect = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect || redirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
