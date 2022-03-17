import { Typography } from '@mui/material';

export default function Header() {
  return (
    <Typography
      variant="h3"
      component="h1"
      align="center"
      noWrap
      sx={{
        display: 'block',
        backgroundColor: 'primary.main',
        color: 'white',
        borderRadius: 2,
        pt: 1,
        pb: 1,
      }}
    >
      Phonebook
    </Typography>
  );
}
