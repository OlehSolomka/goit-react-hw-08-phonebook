import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactOperations } from 'redux/contacts';
import { authSelectors } from 'redux/authentication';
import { useRouteMatch } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';
import UserContactsPage from 'pages/UserContactsPage';
import Modal from 'components/Modal';

const AddContactFormPage = lazy(() =>
  import('pages/AddContactFormPage' /* webpackChunkName: "add-contact-page" */)
);

const ContactPage = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const { path } = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    isLoggedIn && dispatch(contactOperations.getContacts());
  }, [dispatch, isLoggedIn]);

  return (
    <>
      {isLoggedIn && (
        <>
          <UserContactsPage />
          <Suspense fallback={<div> </div>}>
            <PrivateRoute path={`${path}/add`}>
              <Modal>
                <AddContactFormPage />
              </Modal>
            </PrivateRoute>
          </Suspense>
        </>
      )}
    </>
  );
};
export default ContactPage;
