import styled from "styled-components";

export default function Button({ content }) {
  return <StyledButton>{content}</StyledButton>;
}

const StyledButton = styled.button`
  background: #030030;
  letter-spacing: 0.05rem;
  font-size: 1.5rem;
  width: 28%;
  height: 2.5rem;
  border: none;
  margin: 0.7rem;
  color: #D1D1D1;
  border-radius: 0.8rem;
  cursor: pointer;
`;
