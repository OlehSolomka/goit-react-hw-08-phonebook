import TextFieldControll from './TextFieldControll.js';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { contactSelectors } from 'redux/contacts';

const Filter = ({ getQuery, visibleContacts }) => {
  const contacts = useSelector(contactSelectors.getContacts);
  const helperTextRequire = !visibleContacts.length;
  const helperTextNewUser = contacts.length === 0;
  const handleChange = e => {
    getQuery(e.target.value);
  };
  return (
    <>
      <TextFieldControll
        sx={{
          mb: 2,
          mt: 2,
        }}
        variant="outlined"
        label={'Search contact'}
        margin="dense"
        onChange={handleChange}
        size="small"
        fullWidth
        helperTextRequire={helperTextRequire}
        helperTextNewUser={helperTextNewUser}
      />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  getQuery: PropTypes.func.isRequired,
  visibleContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
