import styled from 'styled-components';
import { Form as FormStyled } from 'formik';
import { ErrorMessage as ErrorStyled } from 'formik';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const Form = styled(FormStyled)`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 10px;

  label {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  p {
    margin: 0;
    padding: 0;
  }
`;

export const Button = styled.button`
  background-color: #ffffff;
  border-radius: 8px;
  :hover {
    background-color: #9999df;
  }
`;

export const ErrorMessage = styled(ErrorStyled)`
  color: red;
`;
