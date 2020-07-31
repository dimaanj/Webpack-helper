import { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import PropTypes from 'prop-types';

const DEBOUNCE_DELAY = 500;

const useValidation = ({ ref, validateFunc }) => {
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const validate = () => {
      const { value } = ref.current;
      const { isValid, message } = validateFunc(value);
      setIsValid(isValid);
      setMessage(message);
    };

    validate();

    ref.current.addEventListener('input', debounce(validate, DEBOUNCE_DELAY));
    return () => {
      ref.current.removeEventListener('input', debounce(validate, DEBOUNCE_DELAY));
    };
  }, []);

  return { isValid, message };
};

useValidation.propTypes = {
  inputRef: PropTypes.object.isRequired,
  validateFunc: PropTypes.func.isRequired,
  formRef: PropTypes.object.isRequired,
};

export { useValidation };
