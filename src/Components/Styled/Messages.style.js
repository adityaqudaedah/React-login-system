import styled, { keyframes } from "styled-components";

const checkAnimation = keyframes`
    from{
        
    }
    to{
        transform : rotate(360deg)
    }
`;

const Check = styled.img`
  width: 1rem;
  display : ${(props)=>props.display};
  animation: ${checkAnimation} ease-in 0.2s 2 forwards;
`;

export default Check;
