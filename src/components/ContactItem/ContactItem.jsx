import PropTypes from 'prop-types';
import { ListItem } from './ContactItem.styled';
import { Button } from 'components/ContactForm/ContactForm.styled';

export const ContactItem = ({ name, number, id, onDelete }) => {
  return (
    <ListItem>
      <p>
        {name}: {number}
      </p>
      <Button type="button" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </ListItem>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};
