import React, { useState } from "react";
import {
  NavBar,
  Banner,
  Menu,
  MenuLink,
  MenuLinkLogout,
  SideBar,
  SideMenu,
} from "../Styled/Home.style";

import Card from "../Styled/Card.style";
import { HamburgerMenu, SquareBlock } from "../Styled/Home.style";
import { AiFillHome, AiOutlineLogout } from "react-icons/ai";

// import home_doodles from "../../Assets/home_doodles.svg";
const Home = (props) => {
  const [toggle, setToggle] = useState(false);

  //toggle handler
  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <React.Fragment>
      <NavBar>
        <Banner>
          <h1>DevLicious</h1>
        </Banner>

        <Menu>
          <MenuLink>Home</MenuLink>
          <MenuLinkLogout onClick={props.onLogout}>Logout</MenuLinkLogout>
        </Menu>

        <HamburgerMenu onClick={toggleHandler}>
          <SquareBlock />
          <SquareBlock />
          <SquareBlock />
        </HamburgerMenu>
      </NavBar>

      <>
        <Card>
          <h1>Welcome Back !</h1>
        </Card>
        {toggle && (
          <SideBar>
            <SideMenu onClick={()=> toggle ? setToggle(!toggle):''}>
              <AiFillHome /> Home
            </SideMenu>
            <SideMenu onClick={props.onLogout}>
              <AiOutlineLogout /> Logout
            </SideMenu>
          </SideBar>
        )}
      </>
    </React.Fragment>
  );
};

export default Home;
