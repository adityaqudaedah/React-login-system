import styled, { keyframes } from "styled-components";

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  box-shadow: 0px 0px 10px 1px #888888;
  width: 100vw;
`;

export const Banner = styled.div`
  font-size: 1em;
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 3rem;
  border-radius: 12px;
  background-color: black;
  color: white;

  @media only screen and (max-width: 812px) {
    font-size: 70%;
    margin-left: 0.5rem;
  }
`;
export const HamburgerMenu = styled.div`

  display: none;

  @media only screen and (max-width: 578px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 30px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const SquareBlock = styled.span`
  width: 30px;
  height: 2px;
  border-radius: 4px;
  /* border: 1px solid black; */
  margin: 3px auto;
  background-color: black;
`;
export const Menu = styled.ul`
  display: flex;
  align-items: center;
  margin: 0 10rem;

  /* justify-content: space-between; */
  @media only screen and (max-width: 578px) {
    display: none;
  }
`;

export const MenuLink = styled.li`
  padding: 0.7rem 2rem;
  font-size: 1.2em;
  list-style-type: none;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 812px) {
    font-size: 80%;
  }
`;

const logoutAnimation = keyframes`
    
    to{
        background-color : black;
        color : white;
    }
`;

export const MenuLinkLogout = styled(MenuLink)`
  border-radius: 50px;
  border: 1px solid black;

  &:hover {
    animation: ${logoutAnimation} 0.3s ease-in forwards;
  }
`;
