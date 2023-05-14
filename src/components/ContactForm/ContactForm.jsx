import PropTypes from 'prop-types';
import { Field, Formik } from 'formik';
import * as yup from 'yup';
import { Form, Button, ErrorMessage } from './ContactForm.styled';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Required!'),
  number: yup
    .string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required!'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            <p>Name</p>
            <Field type="text" name="name" />
          </label>
          <ErrorMessage component="p" name="name" />

          <label>
            <p>Number</p>
            <Field type="tel" name="number" />
          </label>
          <ErrorMessage component="p" name="number" />
          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </>
  );
};

ContactForm.propTypes = {
  initialValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  }),
  validationSchema: PropTypes.object,
  onSubmit: PropTypes.func,
};
