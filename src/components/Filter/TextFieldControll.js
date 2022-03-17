import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import PropTypes from 'prop-types';

export default function TextFieldControll({ helperTextRequire, ...props }) {
  return helperTextRequire ? (
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
  ) : (
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
TextFieldControll.propTypes = {
  helperTextRequire: PropTypes.bool.isRequired,
};
