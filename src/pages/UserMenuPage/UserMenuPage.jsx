import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/authentication';
import { contactActions } from 'redux/contacts';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const UserMenuPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(authSelectors.getUser);

  const handleLogOut = () => {
    dispatch(authOperations.logOut());
    dispatch(contactActions.clearContacts([]));
    dispatch(contactActions.clearFavContacts());
  };

  return (
    <Box sx={{ display: 'inline-flex', flexDirection: 'column' }}>
      <Box>
        <Typography
          variant="body2"
          color="text.primary"
          sx={{
            textTransform: 'capitalize',
            fontSize: '14px',
            letterSpacing: '0.05em',
            lineHeight: 1,
          }}
        >
          {user.name}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <AccountCircleIcon fontSize="large" color="primary" />
        <IconButton
          aria-label="logout"
          size="small"
          color="primary"
          onClick={handleLogOut}
          sx={{
            marginLeft: 1,
          }}
        >
          <LogoutIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default UserMenuPage;
