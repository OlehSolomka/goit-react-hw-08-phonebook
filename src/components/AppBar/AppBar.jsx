import Navigation from 'components/Navigation';
import UserMenuPage from 'pages/UserMenuPage';
import AppBarNew from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

const AppBar = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBarNew
        position="static"
        sx={{
          mt: 0.5,
          borderRadius: 2,
          border: 1.9,
          borderColor: 'info.main',
          bgcolor: '#fff',
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 5 }}>
            <Navigation />
          </Box>
          <UserMenuPage />
        </Toolbar>
      </AppBarNew>
    </Box>
  );
};

export default AppBar;
