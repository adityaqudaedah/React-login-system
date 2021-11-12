import styled from "styled-components";

export const FormInput = styled.form`
 
    & h2{
        margin:0.5rem 0;
    }

    & label {
        margin : 0.2rem 0;
        font-size : 0.9em;
        color : #2e2e2e;
    }

    & input{
        width: inherit;
        border: none;
    }

    & input{
        outline:none;
    }
`

export const Logo = styled.img`
    width : ${(props)=>props.width}rem;
    height: 50%;
`