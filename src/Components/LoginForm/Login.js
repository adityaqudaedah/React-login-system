import React, { useState, useEffect } from "react";
import Container from "../Styled/Container.style";
import { FormInput, Logo } from "../Styled/Login.style";
import { Button } from "../Styled/Button.style";
import login_doodles from "../../Assets/login_doodles.svg";
import Check from "../Styled/Messages.style";
import checked from "../../Assets/check_icon.svg";
import { SignUpLink } from "../Styled/SignIn.style";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailIsValid, setEmailIsValid] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);
  const [isHaveAnAccount, setIsHaveAnAccount] = useState(false);
 
  
  //email on change
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value);
  };

  //password on change
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
    console.log(event.target.value);
  };

  //when form got submitted
  const formInputHandler = (event) => {
    event.preventDefault();

    props.onLogin(email, password);
    // console.log(
    //   `user email : ${email}\nuser password : ${password}\nFrom Login.js`
    // );
  };

  //email indicator that indicate email is valid or not
  const emailValidation = () => {
    setEmailIsValid(email.trim().includes("@"));
  };
  //password indicator that indicate password is valid or not
  const passwordValidation = () => {
    setPasswordIsValid(password.trim().length >= 6);
  };
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("check form validity");
      setFormIsValid(email.trim().includes("@") && password.trim().length >= 6);
    }, 500);
    return () => {
      console.log("clean up");
      clearTimeout(identifier);
    };
  }, [email, password]);

  return (
    <React.Fragment>
      <Container
        id="responsive"
        justify="center"
        align="center"
        margin="3rem 0"
      >
        <FormInput onSubmit={formInputHandler}>
          <h2>Login</h2>
          <p>
            do not have an account ?{" "}
            <SignUpLink onClick={() => setIsHaveAnAccount(!isHaveAnAccount)}>
              {isHaveAnAccount && "Sign In"}
              {!isHaveAnAccount && "Sign Up"}
            </SignUpLink>
          </p>

          <Container margin="1rem 0" align="flex-start" direction="column">
            <label htmlFor="">Email</label>
            <Container
              width="20rem"
              padding="0.5rem"
              border="1px solid"
              radius="6px"
            >
              <input
                type="email"
                onChange={emailChangeHandler}
                onBlur={emailValidation}
              />

              {emailIsValid && <Check src={checked} />}
              {!emailIsValid && <Check src={checked} display="none" />}
            </Container>
          </Container>

          <Container align="flex-start" direction="column">
            <label htmlFor="">Password</label>
            <Container
              width="20rem"
              padding="0.5rem"
              border="1px solid black"
              radius="6px"
            >
              <input
                type="password"
                onChange={passwordChangeHandler}
                onBlur={passwordValidation}
              />

              {passwordIsValid && <Check src={checked} />}
              {!passwordIsValid && <Check src={checked} display="none" />}
            </Container>
          </Container>

          <Container
            bg="black"
            color="white"
            margin="2rem 0"
            padding="0.7rem"
            border="1px solid black"
            radius="4px"
            justify="center"
          >
            <Button type="submit">
              {!isHaveAnAccount && "Sign In"}
              {isHaveAnAccount && "Sign Up"}
            </Button>
          </Container>
        </FormInput>

        <Logo width="30" src={login_doodles} />
      </Container>
    </React.Fragment>
  );
};

export default Login;
