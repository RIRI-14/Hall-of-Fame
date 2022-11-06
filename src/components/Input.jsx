import styled from "styled-components";

export default function Input({ type, placeholder }) {
  return <StyledInput type = {type} placeholder = {placeholder} />;
}

const StyledInput = styled.input`
  background: #ffff;
  border-radius: 10px;
  width: 80%;
  height: 8rem;
  padding: 1rem;
  margin: 1.1rem;
  border: none;
  outline: none;
  color: #3c354e;
  font-size: 1rem;
  font-weight: bold;
  &:focus {
    display: inline-block;
    box-shadow: 0 0 0 0.2rem #b9abe0;
    backdrop-filter: blur(12rem);
    border-radius: 2rem;
  }
  &::placeholder {
    color: #0F0F0F;
    font-weight: 100;
    font-size: 1.25rem;
  }
`;