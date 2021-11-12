import styled from "styled-components";
const Container = styled.div`
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  padding: ${(props) => props.padding};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.radius};
  

  @media only screen and (max-width: 812px) {
    ${(props) => props.id && `flex-direction : column-reverse
    `}
  }
`;
export default Container;
