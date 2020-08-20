import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContentWrapper = styled.div`
  height: 100vh;
  min-width: 100vw;
  padding: 2rem 1rem 1rem 1rem;
  opacity: 0;
  transition: opacity 0.7s ease;
`;

const AnimatedContent = ({ children }) => {
  const wrapperElement = useRef();
  const [content, setContent] = useState();

  useEffect(() => {
    wrapperElement.current.style.opacity = '0';
    setTimeout(() => {
      setContent(children);
      wrapperElement.current.style.opacity = '1';
    }, 700);
  }, [children]);

  useEffect(() => {
    setContent(children);
    setTimeout(() => {
      wrapperElement.current.style.opacity = '1';
    }, 700);
  }, []);

  console.log('render animated content');

  return <ContentWrapper ref={wrapperElement}>{content}</ContentWrapper>;
};
AnimatedContent.propTypes = {
  children: PropTypes.element.isRequired,
};

export { AnimatedContent };
