import styled, { keyframes } from "styled-components";

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  box-shadow: 0px 0px 10px 1px #888888;
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
  background-color:black;
  color: white;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  margin: 0 10rem;
  /* justify-content: space-between; */
`;

export const MenuLink = styled.li`
  padding: 0.7rem 2rem;
  font-size: 1.2em;
  list-style-type: none;

  &:hover {
    cursor: pointer;
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
