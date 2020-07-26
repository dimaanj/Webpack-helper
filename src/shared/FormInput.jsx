import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({
  value, fieldFor, type, title, onChange,
}) => (
  <section>
    <label htmlFor={fieldFor}>{title}</label>
    <input value={value} id={fieldFor} type={type} onChange={(e) => onChange(e.current.target)} />
  </section>
);

FormInput.propTypes = {
  value: PropTypes.string.isRequired,
  fieldFor: PropTypes.string.isRequired,
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
FormInput.defaultProps = {
  type: 'text',
};

export default FormInput;
