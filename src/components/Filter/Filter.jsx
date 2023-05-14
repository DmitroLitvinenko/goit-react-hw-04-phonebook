import PropTypes from 'prop-types';

export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <div>
      <label>
        Find contacts by name:
        <input type="text" value={filter} onChange={onChangeFilter} />
      </label>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};
