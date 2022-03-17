import PropTypes from 'prop-types';
import ContactList from 'components/Contactlist';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';

export default function AlphabetList({ contacts, onDelete }) {
  function mapContactLettes() {
    return contacts.map(contact => contact.name[0].toUpperCase());
  }

  const sortedUniqueLetters = Array.from(new Set(mapContactLettes())).sort();

  return (
    <>
      <Grid item xs={12} md="auto">
        <List
          sx={{
            position: 'relative',
            overflow: 'auto',
            '& ul': { padding: 0 },
          }}
        >
          {sortedUniqueLetters.map(letter => {
            return (
              <ListItem
                key={letter}
                sx={{
                  alignItems: 'flex-start',
                }}
              >
                <ListSubheader
                  component="div"
                  sx={{
                    display: 'inline-block',
                    zIndex: '0',
                    paddingTop: 0.5,
                  }}
                >
                  {letter}
                </ListSubheader>
                <ContactList
                  letter={letter}
                  contacts={contacts}
                  onDelete={onDelete}
                />
              </ListItem>
            );
          })}
        </List>
      </Grid>
    </>
  );
}

AlphabetList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
