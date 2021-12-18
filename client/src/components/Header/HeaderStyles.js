import styled from 'styled-components';

export const Container = styled.header`
  margin: 2rem auto;
  max-width: 128rem;
  padding: 0 2.4rem;
  width: 90%;

  @media (min-width: 768px) {
    width: 85%;
  }

  @media (min-width: 992px) {
    width: 80%;
  }
`;

export const Content = styled.div`
  background-color: #4db6ac;
  color: #fff;
  padding: 1rem 0 2rem 0;
  text-align: center;

  h1 {
    font-size: 4rem;
    line-height: 4rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.6rem;
    font-style: italic;
    margin: 0;
  }
`;
