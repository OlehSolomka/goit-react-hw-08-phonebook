import { TextField } from '@mui/material';
import { useMemo } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PropTypes from 'prop-types';

export default function TextFieldControll({
  helperTextRequire,
  helperTextNewUser,
  ...props
}) {
  const helperText = useMemo(() => {
    if (helperTextNewUser) {
      return 'newUser';
    }
    return helperTextRequire;
  }, [helperTextNewUser, helperTextRequire]);

  switch (helperText) {
    case 'newUser':
      return (
        <TextField
          {...props}
          helperText="You don`t have any contacts yet"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonSearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />
      );
    case true:
      return (
        <TextField
          {...props}
          helperText="No contact found with this name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonSearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />
      );
    default:
      return (
        <TextField
          {...props}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonSearchIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />
      );
  }
}
TextFieldControll.propTypes = {
  helperTextRequire: PropTypes.bool.isRequired,
  helperTextNewUser: PropTypes.bool.isRequired,
};
