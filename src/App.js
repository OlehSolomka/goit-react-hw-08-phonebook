import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/authentication';
import { useEffect, lazy, Suspense } from 'react';
import Header from 'components/Header';
import PublicRoute from 'components/PublicRoute';
import PrivateRoute from 'components/PrivateRoute';
import NotFoundPage from 'pages/NotFoundPage';
import Container from '@mui/material/Container';

const AppBar = lazy(() =>
  import('components/AppBar' /*webpackChunkName: "app-bar"*/)
);
const Modal = lazy(() =>
  import('components/Modal' /* webpackChunkName: "modal-page"*/)
);
const LoginPage = lazy(() =>
  import('pages/LoginPage' /* webpackChunkName: "login-page"*/)
);
const RegisterPage = lazy(() =>
  import('pages/RegisterPage' /* webpackChunkName: "register-page"*/)
);
const ContactPage = lazy(() =>
  import('pages/ContactPage' /*webpackChunkName: "contact-page"*/)
);
const FavContactsPage = lazy(() =>
  import('pages/FavContactsPage' /*webpackChunkName: "fav-contact-page"*/)
);

const App = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isFetchingUser = useSelector(authSelectors.getIsFetchingUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getUser());
  }, [dispatch]);

  return (
    <>
      <Container
        component="main"
        maxWidth="xs"
        sx={{ height: '100vh', position: 'relative' }}
      >
        <Suspense fallback={<div> </div>}>
          <Header />
          {isLoggedIn && <AppBar />}

          {!isFetchingUser && (
            <Switch>
              <PublicRoute path="/register" restricted>
                <Modal>
                  <RegisterPage />
                </Modal>
              </PublicRoute>
              <PublicRoute path="/login" restricted>
                <LoginPage />
              </PublicRoute>
              <PrivateRoute path="/contacts/favorite" redirectTo="/login" exact>
                <FavContactsPage />
              </PrivateRoute>
              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactPage />
              </PrivateRoute>
              <PublicRoute redirectTo="/login" redirect>
                <NotFoundPage />
              </PublicRoute>
            </Switch>
          )}
        </Suspense>
      </Container>
    </>
  );
};

export default App;
