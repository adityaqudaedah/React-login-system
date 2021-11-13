import React from "react";
import {
  NavBar,
  Banner,
  Menu,
  MenuLink,
  MenuLinkLogout,
} from "../Styled/Home.style";

import Card from "../Styled/Card.style";
import { HamburgerMenu, SquareBlock } from "../Styled/Home.style";

// import home_doodles from "../../Assets/home_doodles.svg";
const Home = (props) => {
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

        <HamburgerMenu>
          <SquareBlock />
          <SquareBlock />
          <SquareBlock />
        </HamburgerMenu>
      </NavBar>

      <>
        <Card>
          <h1>Welcome Back !</h1>
        </Card>
      </>
    </React.Fragment>
  );
};

export default Home;
