import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-top: 8px;
  display: inline-block;
  border: 1px solid #a8adb7;
  border-radius: 6px;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: 400;
  transition: all 0.3s ease;

  :focus {
    outline: none;
    border: solid 1px #4285f4;
  }
`;

const Label = styled.section`
  font-size: 22px;
  font-weight: 400;
`;

const FormInput = React.forwardRef(({ title, id, ...restProps }, ref) => {
  return (
    <section>
      <Label fieldFor={id}>{title}</Label>
      <StyledInput ref={ref} id={id} {...restProps} />
    </section>
  );
});

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export { FormInput };
