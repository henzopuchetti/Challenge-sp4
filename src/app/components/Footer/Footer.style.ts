import styled from 'styled-components';


export const FooterContainer = styled.footer`
  width: 100%;
  height: 200px;
  background-color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: white;
  margin-top: 50px

`;

export const Logo = styled.img`
  width: 250px;
`;

export const FooterLista = styled.ul`
  list-style-type: none;
  text-align: center;
  display: flex;
  flex-direction: row;

  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterItem = styled.li`
  display: inline;
  margin: 0 10px;
`;

export const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
