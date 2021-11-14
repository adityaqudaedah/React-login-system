import styled, { keyframes } from "styled-components";

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  box-shadow: 0px 0px 10px 1px #888888;
  /* background-color: rgba(255, 255, 255, .15);
  backdrop-filter:blur(15px); */
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

const sideBarAnimation = keyframes`
  from{
    margin-right:-50%;
  }
  to{
    margin-right : 0%;
  }
`;
export const SideBar = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.3em;
  padding: 8rem 0;
  height: 100vh;
  backdrop-filter: blur(5px);
  background-color: rgba(31, 29, 29, 0.15);
  width: 13rem;
  /* margin-right:-50%; */
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  animation: ${sideBarAnimation} 0.5s ease-in-out forwards;
`;

export const SideMenu = styled(MenuLinkLogout)`
  /* background-color : black; */
  border: none;
  border-radius: 0px;
  width: inherit;
`;
