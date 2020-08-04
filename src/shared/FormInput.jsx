import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-top: 8px;
  margin-bottom: 24px;
  display: inline-block;
  border: 2px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: 400;
  transition: all 0.3s ease;

  :focus {
    outline: none;
    border: solid 2px #4285f4;
  }

  :invalid {
    color: #db4437;
  }
`;

const Label = styled.section`
  font-size: 22px;
  font-weight: 400;
`;

const FormInput = React.forwardRef(({ title, id, onChange, ...restProps }, ref) => {
  return (
    <section>
      <Label fieldFor={id}>{title}</Label>
      <StyledInput
        ref={ref}
        onChange={(event) => onChange(event.target.value)}
        id={id}
        {...restProps}
      />
    </section>
  );
});

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export { FormInput };
