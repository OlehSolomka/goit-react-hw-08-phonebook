import Filter from 'components/Filter';
import AlphabetList from 'components/AlphabetList';
import AddButton from 'components/AddButton';
import { useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactSelectors, contactOperations } from 'redux/contacts';

export default function UserContactsPage() {
  const [filterQuery, setFilterQuery] = useState('');
  const contacts = useSelector(contactSelectors.getContacts);
  const isFetchingContacts = useSelector(contactSelectors.isFetchingContacts);
  const dispatch = useDispatch();

  const getFilterQuery = query => {
    setFilterQuery(query);
  };

  const onDeleteContact = id => {
    dispatch(contactOperations.deleteContact(id));
  };

  const getVisibleContacts = useMemo(() => {
    const normalizedFilter = filterQuery.toLowerCase();
    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  }, [contacts, filterQuery]);

  return (
    <>
      {!isFetchingContacts && (
        <>
          <Filter
            getQuery={getFilterQuery}
            visibleContacts={getVisibleContacts}
          />
          <AddButton />
          <AlphabetList
            contacts={getVisibleContacts}
            onDelete={onDeleteContact}
          />
        </>
      )}
    </>
  );
}
