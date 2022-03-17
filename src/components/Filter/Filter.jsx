import TextFieldControll from './TextFieldControll.js';
import PropTypes from 'prop-types';

const Filter = ({ getQuery, visibleContacts }) => {
  const helperTextRequire = !visibleContacts.length;

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
      />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  getQuery: PropTypes.func.isRequired,
  visibleContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
