import { contactOperations, contactSelectors } from 'redux/contacts';
import { useDispatch, useSelector } from 'react-redux';
// import { LoadingButton } from '@mui/lab';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function AddContactFormPage() {
  const contacts = useSelector(contactSelectors.getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const contactItem = {
      name: `${form.get('firstName')} ${form.get('secondName')}`,
      number: form.get('phone'),
    };

    if (contacts.find(unit => unit.name === contactItem.name)) {
      e.currentTarget.reset();
      return alert(`${contactItem.name} is already in your contacts`);
    }

    dispatch(contactOperations.addContact(contactItem));

    e.currentTarget.reset();
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 4,
          marginBottom: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#1976d2' }}></Avatar>
        <Typography component="h1" variant="h5">
          Add New Contact
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                autoComplete="name"
                name="firstName"
                required
                id="name"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                autoComplete="name"
                name="secondName"
                required
                id="name"
                label="Second Name"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="phone"
                label="Phone Number"
                type="tel"
                id="phone"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            ADD
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
