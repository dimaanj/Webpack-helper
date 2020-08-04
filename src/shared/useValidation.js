import { useState, useCallback, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { pickBy, forEach, get, map } from 'lodash';

const useValidation = () => {
  const [fields, setFields] = useState({});

  useEffect(() => {
    return () => {
      forEach(fields, ({ id, listener }) => {
        const formElement = document.getElementById(id);
        formElement.removeEventListener('input', listener, false);
      });
    };
  }, []);

  const errors = useMemo(() => {
    const invalidFields = pickBy(fields, ({ isValid }) => !isValid);
    return map(invalidFields, 'message');
  }, [fields, setFields]);

  const register = useCallback((node, validateFunc) => {
    if (node !== null) {
      console.log(3);
      // const handleEvent = (event) => onInput(event, validateFunc);
      node.addEventListener(
        'input',
        (event) => {
          const { value, id, name } = event.target;
          const start = performance.now();
          const { isValid, message } = validateFunc(value);
          console.log('performance', performance.now() - start);
          // console.log(4);
          const obj = {
            ...fields,
            [`${name}`]: {
              ...fields[`${name}`],
              id,
              name,
              value,
              message,
              isValid,
              validate: validateFunc,
            },
          };

          setFields(obj);
        },
        false
      );
    }
  }, []);

  const handleSubmit = (event, onSubmit) => {
    event.preventDefault();

    // const invalidFields = pickBy(fields, ({ validate, value }) => !validate(value).isValid);
    // if (isEmpty(invalidFields)) {
    //   onSubmit();
    // } else {
    //   console.log(invalidFields);
    //   setFields({
    //     ...fields,
    //     ...invalidFields,
    //   });
    // }
  };

  const isValid = (fieldName) => {
    const { isValid = true } = get(fields, fieldName, {});
    return isValid;
  };

  return { register, handleSubmit, isValid, errors };
};

useValidation.propTypes = {
  inputRef: PropTypes.object.isRequired,
  validateFunc: PropTypes.func.isRequired,
  formRef: PropTypes.object.isRequired,
};

export { useValidation };
