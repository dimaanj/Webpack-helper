import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AMINATION_DURATION_IN_SECONDS = 0.5;
const AMINATION_DURATION_IN_MILISECONDS = 1;

const AnimatedContent = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: -50%;
  top: 50%;
  margin-left: -50%;
  opacity: 0;

  -webkit-transition-property: left opacity;
  -webkit-transition-duration: ${AMINATION_DURATION_IN_SECONDS}s;
  -webkit-transition-timing-function: ease;
  // -webkit-transition-delay: 0.3s;

  transition-property: left opacity;
  transition-duration: ${AMINATION_DURATION_IN_SECONDS}s;
  transition-timing-function: ease;
  // transition-delay: 0.3s;
`;

const RelativeContainer = styled.div`
  position: relative;
`;

const withAnimation = (Component) => {
  const enhance = ({ isMounted, ...props }) => {
    const animatedElement = useRef(null);
    const [shouldRender, setShouldRender] = useState(isMounted);

    useEffect(() => {
      animatedElement.current.style.left = '50%';
      animatedElement.current.style.opacity = '1';
      console.log(1);
    }, []);

    useEffect(() => {
      if (!isMounted) {
        animatedElement.current.style.left = '-50%';
        animatedElement.current.style.opacity = '0';

        setTimeout(() => {
          setShouldRender(false);
        }, AMINATION_DURATION_IN_MILISECONDS);
        console.log(2);
      }
    }, [isMounted]);

    return (
      <RelativeContainer>
        <AnimatedContent ref={animatedElement}>
          {shouldRender && <Component {...props} />}
        </AnimatedContent>
      </RelativeContainer>
    );
  };
  enhance.propTypes = {
    isMounted: PropTypes.bool,
  };
  enhance.defaultProps = {
    isMounted: true,
  };

  return enhance;
};

withAnimation.propTypes = {
  Component: PropTypes.element.isRequired,
};

export { withAnimation };
