import styled from "styled-components";
import { FaGoogle } from "react-icons/fa";
import Input from "./components/Input";
import Button from "./components/Button";
import Icon from "./components/Icon";

function App() {
 const 
      GoogleBackground = "rgba(400, 400, 400, 0.15)";
 return (
  <MainContainer>
    <WelcomeText>
      LOGIN
    </WelcomeText>
    <InputContainer>
        <Input type="text" placeholder="Email ID" />
        <Input type="password" placeholder="Password" />
    </InputContainer>
    <ButtonContainer>
       <Button content="Login"/>
    </ButtonContainer>
    <ForgotPassword>Forgot Password?</ForgotPassword>
    <LoginWith>-Or log in with-</LoginWith>
      <IconsContainer>
        <Icon color={GoogleBackground}>
          <FaGoogle />
        </Icon>
      </IconsContainer>
  </MainContainer>
 )
}

const MainContainer = styled.div`

  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 40vw;
  background: rgba(400, 400, 400, 0.22);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
  backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #030030;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`;

const WelcomeText = styled.h1`
  margin: 2rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0.2rem 0.5rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
  margin: 3.5rem 0 1rem 0;
  text-transform: none;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1.3rem 0 3rem 0;
  width: 80%;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
  height: 1rem;
  color: #ffff;
  text-transform: none;
  margin: 0 1rem 0 0;
`;

export default App;