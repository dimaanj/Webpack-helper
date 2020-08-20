import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { forEach, reduce, debounce } from 'lodash';

const EVENT_NAME = 'input';
const ON_INPUT_VALIDATION_DELAY = 500;

const useValidation = () => {
  const [fields, setFields] = useState({});
  const [errorMsg, setErrorMsg] = useState('');

  const register = useCallback((node, validateFunc) => {
    const onInput = debounce((event, validate) => {
      const { value } = event.target;
      const { isValid } = validate(value);

      if (!isValid) {
        event.target.classList.add('invalid');
      } else {
        event.target.classList.remove('invalid');
        setErrorMsg('');
      }
    }, ON_INPUT_VALIDATION_DELAY);

    if (node !== null) {
      const listener = (e) => onInput(e, validateFunc);
      node.addEventListener(EVENT_NAME, listener, false);

      const { name, id } = node;
      setFields({
        ...fields,
        [name]: {
          id,
          listener,
          validate: validateFunc,
        },
      });
    }

    if (node === null) {
      forEach(fields, ({ id, listener }) => {
        const formElement = document.getElementById(id);
        formElement.removeEventListener('input', listener, false);
      });
    }
  }, []);

  const handleSubmit = (event, submitButton, onSubmit) => {
    event.preventDefault();

    const result = reduce(
      fields,
      (acc, { id, validate }) => {
        const formElement = document.getElementById(id);
        const { value, name } = formElement;
        const { isValid, message } = validate(value);

        if (!isValid) {
          formElement.classList.add('invalid');
          return {
            error: `${acc.error} ${message}`,
            values: { ...acc.values, [name]: value },
          };
        }

        return {
          values: { ...acc.values, [name]: value },
        };
      },
      { error: '', values: {} }
    );

    if (result.error) {
      setErrorMsg(result.error);
    } else {
      submitButton.current.classList.add('disabled');
      onSubmit(result.values);
    }
  };

  return { register, handleSubmit, errorMsg };
};

useValidation.propTypes = {
  inputRef: PropTypes.object.isRequired,
  validateFunc: PropTypes.func.isRequired,
  formRef: PropTypes.object.isRequired,
};

export { useValidation };
