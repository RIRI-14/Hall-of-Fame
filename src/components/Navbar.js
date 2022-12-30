import React , {useContext} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import mainLogo from'../images/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import profile from "../images/girl.png"
import { useLogin } from './LoginProvider';


const Navigation=() =>{

  return (
    <>
      <Navbar variant="dark" expand="lg" className="p-3">
        <Container>
        <Navbar.Brand href="#home">
            <img
              alt=""
              src={mainLogo}
              width="140"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            {/* Hall-Of-Fame */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" >
              <Nav.Link href="#home"></Nav.Link>
            </Nav>
            <Nav className="gap-2">
              <Nav.Link className="btn btn-black" href="#">
                LogOut
              </Nav.Link>

              <Nav.Link className="btn btn-black" href="#">
              <img
              alt=""
              src={profile}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

const Navigation2=() =>{

    return (
      <>
        <Navbar variant="dark" expand="lg" className="p-3">
          <Container>
          <Navbar.Brand href="#home">
              <img
                alt=""
                src={mainLogo}
                width="140"
                height="50"
                className="d-inline-block align-top"
              />{' '}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" >
                <Nav.Link href="#home"></Nav.Link>
              </Nav>
              <Nav className="gap-2">
                <Nav.Link className="btn btn-black" href="#">
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }

const NavBar =()=>{
    const {isLoggedIn} = useLogin()
    return isLoggedIn ? <Navigation/>: <Navigation2 />
}

export default NavBar;