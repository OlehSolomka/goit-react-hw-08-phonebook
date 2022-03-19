import PropTypes from 'prop-types';
import { useMemo } from 'react';
import ContactList from 'components/Contactlist';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';

export default function AlphabetList({ contacts, onDelete }) {
  const contactLetters = useMemo(() => {
    return contacts.map(contact => contact.name[0].toUpperCase());
  }, [contacts]);

  const sortedUniqueLetters = Array.from(new Set(contactLetters)).sort();

  return (
    <>
      <Grid item xs={12} md="auto">
        <List
          sx={{
            overflow: 'auto',
            '& ul': { padding: 0 },
          }}
        >
          {sortedUniqueLetters.map(letter => {
            return (
              <ListItem
                key={letter}
                sx={{
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}
              >
                <ListSubheader
                  component="div"
                  sx={{
                    zIndex: '0',
                    paddingTop: 0.5,
                    width: '38px',
                    paddingLeft: '12px',
                    paddingRight: '12px',
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
