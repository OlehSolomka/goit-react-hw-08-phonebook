import { Link } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';
import { Button } from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import StarIcon from '@mui/icons-material/Star';

const Navigation = () => {
  return (
    <>
      <PrivateRoute path="/contacts" exact>
        <Link to="/contacts/favorite" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            aria-label="favorite"
            size="small"
            color="primary"
            startIcon={<StarIcon />}
          >
            Favorite
          </Button>
        </Link>
      </PrivateRoute>
      <PrivateRoute path="/contacts/add">
        <Link to="/contacts/favorite" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            aria-label="favorite"
            size="small"
            color="primary"
            startIcon={<StarIcon />}
          >
            Favorite
          </Button>
        </Link>
      </PrivateRoute>
      <PrivateRoute path="/contacts/favorite">
        <Link to="/contacts" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            aria-label="contacts"
            size="small"
            color="primary"
            startIcon={<ContactPhoneIcon />}
          >
            Contacts
          </Button>
        </Link>
      </PrivateRoute>
    </>
  );
};
export default Navigation;
