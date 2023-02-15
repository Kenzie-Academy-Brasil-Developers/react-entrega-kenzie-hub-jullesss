import styled from "styled-components";

export const Nav = styled.nav`
  margin: 0 auto;
  margin-top: 48px;
  margin-bottom: 38px;
  height: 40px;
  width: 370px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    width: 70%;
  }
  @media (max-width: 450px) {
    width: 300px;
  }

  #nav-home {
    max-width: 100%;
    width: 900px;
    height: 72px;
    border-bottom: 1px solid var(--gray-3);
  }
`;
