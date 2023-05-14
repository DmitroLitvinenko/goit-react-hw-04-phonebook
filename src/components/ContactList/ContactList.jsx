import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { List, ListContainer } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ListContainer>
      <List>
        {contacts.map(({ id, name, number }) => (
          <ContactItem
            key={id}
            name={name}
            number={number}
            onDelete={() => onDeleteContact(id)}
          />
        ))}
      </List>
    </ListContainer>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
