import React, { useState, useEffect } from "react";
import LoginForm from "./Components/LoginForm/Login";
import GlobalStyle from "./Components/Styled/GlobalStyle";
import Home from "./Components/Home/Home";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  //checker whether user log in or not
  const onLoginHandler = (email, password) => {
    if (email && password) {
      setIsLogin(!isLogin);
      localStorage.setItem("isLogin", "1");
      // console.log(
      //   `user email : ${email}\nuser password : ${password}\nFrom App.js`
      // );
    }
  }

  //logout handler 
  const onLogoutHandler = () => {
    setIsLogin(!isLogin)
    localStorage.setItem('isLogin', '0')
    console.log('logged out');
  }
    useEffect(() => {
     localStorage.getItem('isLogin') && setIsLogin(true)
    }, [])
    ;

  return (
    <div>
      <GlobalStyle />
      {isLogin && <Home logoutHandler onLogout={onLogoutHandler}/>}
      {!isLogin &&  <LoginForm onLogin={onLoginHandler} />}
     
      
    </div>
  );
};

export default App;
