import React from "react";
import "./dashboard.css";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import List from '../components/List';
import Footer from '../components/Footer';
import girl from '../images/girl.png';
import { UserAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[300px] m-auto">
      <div className="Navbar">
        <List />
      </div>
      <div className="Main">
        <div className="personalInfo">
          <br></br>
          <h2>Personal Information</h2>
          <div className="personContainer">
            <img
              src={girl}
              alt="user"
              className="person"
            />
          </div>
          <div className="Info">
            <h4>Name</h4>
            <br></br>
            <h4>Year</h4>
            <br></br>
            <h4>Branch</h4>
            <br></br>
            <h4>Email ID</h4>
          </div>
        </div>
        <div className="achievements">
          <br></br>
          <h2>Achievements</h2>
          <br></br>
          <div className="card">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://assets.entrepreneur.com/content/3x2/2000/1661200766-shutterstock-1731355939.jpg"
                className="cardImage"
              />
              <Card.Body>
                <Card.Title className="cardTitle">Card Title</Card.Title>
                <Card.Text className="cardText">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Dashboard;
