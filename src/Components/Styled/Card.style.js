import styled from "styled-components";

const Card = styled.div`
  margin: 1rem auto;
  display: flex;
  font-size: 1.5em;
  margin: 3rem auto;
  width: 50%;
  padding: 1rem 2rem;
  box-shadow: 0px 0px 10px 1px #888888;
  border-radius: 12px;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 812px) {
    font-size: 1.2em;
  }

  @media only screen and (max-width: 468px) {
    font-size: 0.5em;
  }
`;

export default Card;
