import styled from 'styled-components';

const SnapContainer = styled.div`
  scroll-snap-type: x mandatory;
  display: flex;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;
  overflow: hidden;
`;

const SnapPage = styled.section`
  height: 100vh;
  min-width: 100vw;
  scroll-snap-align: center;
  padding: 2rem 1rem 1rem 1rem;
`;

export { SnapContainer, SnapPage };
