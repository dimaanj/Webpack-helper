import styled from 'styled-components';

const SubmitButton = styled.button`
  width: 100%;
  padding: 8px;
  margin-top: 12px;
  font-size: 22px;
  font-weight: 400;
  border-radius: 6px;
  background-color: #4285f4;
  border: 2px solid #4285f4;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  :focus {
    outline: none;
    background-color: #0f9d58;
    border: 2px solid #0f9d58;
  }
`;

export { SubmitButton };
