import { contactSelectors, contactActions } from 'redux/contacts';
import { useSelector, useDispatch } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import stringAvatar from 'service/avatar-service';

export default function FavContactsPage() {
  const dispatch = useDispatch();
  const favContacts = useSelector(contactSelectors.getFavContacts);

  const handleDeleteFavorite = id => {
    dispatch(contactActions.deletefavContacts(id));
  };

  return (
    <Grid item xs={12} md="auto">
      <List>
        {favContacts.map(({ name, number, id }) => {
          return (
            <ListItem
              sx={{
                paddingLeft: 1,
                paddingRight: 6,
                paddingTop: 1,
                paddingBottom: 1,
              }}
              key={id}
              divider
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDeleteFavorite(id)}
                >
                  <DeleteIcon color="primary" />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar {...stringAvatar(`${name.toUpperCase()}`)} />
              </ListItemAvatar>
              <ListItemText primary={name} />
              <ListItemText
                primary={number}
                sx={{
                  textAlign: 'right',
                }}
              />
            </ListItem>
          );
        })}
      </List>
    </Grid>
  );
}
