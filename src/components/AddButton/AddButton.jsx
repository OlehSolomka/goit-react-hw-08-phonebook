import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

export default function AddButton() {
  return (
    <Link to="/contacts/add" style={{ textDecoration: 'none' }}>
      <Button
        variant="outlined"
        aria-label="add"
        startIcon={<AddIcon />}
        sx={{
          width: '100%',
        }}
      >
        Add new contact
      </Button>
    </Link>
  );
}
