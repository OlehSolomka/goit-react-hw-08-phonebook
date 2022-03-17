import { contactActions, contactSelectors } from 'redux/contacts';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import { Checkbox } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import StarIcon from '@mui/icons-material/Star';
import PropTypes from 'prop-types';

const Contactlist = ({ contacts, onDelete, letter }) => {
  const favContacts = useSelector(contactSelectors.getFavContacts);
  const dispatch = useDispatch();

  let idArray = [];

  (function (array) {
    for (let contact of favContacts) {
      array.push(contact.id);
    }
  })(idArray);

  const handleClick = (index, e, id) => {
    const checked = e.target.checked;

    if (checked) {
      dispatch(contactActions.setFavContacts(contacts[index]));
      return;
    }
    dispatch(contactActions.deletefavContacts(id));
  };

  return (
    <Grid item xs={12} md="auto">
      <List
        sx={{
          textTransform: 'capitalize',
        }}
      >
        {contacts.map((unit, index) => {
          if (letter === unit.name[0].toUpperCase()) {
            return (
              <ListItem
                key={unit.id}
                sx={{
                  justifyContent: 'space-between',
                  paddingLeft: 1,
                  paddingRight: 6,
                  paddingTop: 0.5,
                  paddingBottom: 0.5,
                }}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => {
                      onDelete(unit.id);
                    }}
                  >
                    <DeleteForeverIcon color="primary" />
                  </IconButton>
                }
              >
                <Checkbox
                  edge="start"
                  checked={idArray.includes(unit.id)}
                  icon={<StarBorderIcon />}
                  checkedIcon={<StarIcon />}
                  onClick={e => handleClick(index, e, unit.id)}
                />
                <ListItemText primary={unit.name} />
                <ListItemText
                  primary={unit.number}
                  sx={{
                    textAlign: 'right',
                  }}
                />
              </ListItem>
            );
          }
        })}
      </List>
    </Grid>
  );
};

export default Contactlist;

Contactlist.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
  letter: PropTypes.string.isRequired,
};
