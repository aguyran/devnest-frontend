import "./App.css";

import { useState } from "react";
import Toast from "react-bootstrap/Toast";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
  Button,
  ToastContainer,
  Card,
  Alert,
} from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import VeriCarousel from "./VeriCarousel";
function App() {
  const [isDisabled, setDisabled] = useState(false);
  const [isAlert, setAlert] = useState(false);
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>Soap's</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>
                  <Link to="/" className="temp1">
                    Main
                  </Link>
                </Nav.Link>

                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item>
                    {" "}
                    <Link to="/Toast" className="temp">
                      Toast
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    {" "}
                    <Link to="/Carousel" className="temp">
                      Carousel
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    {" "}
                    <Link to="/About" className="temp">
                      About
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <ToastContainer position="bottom-end">
          <Toast onClose={() => setDisabled(!isDisabled)} show={isDisabled}>
            <Toast.Header>
              <img
                width="40"
                src="https://www.devsnest.in/static/media/logo.f1b45387.jpg"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Welcome</strong>
              <small>Hello</small>
            </Toast.Header>
            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
          </Toast>
        </ToastContainer>
        <Switch>
          <Route exact path="/">
            Welcome to bootstrap components Select a component from dropdown
            list
          </Route>
          <Route exact path="/Toast">
            <div>Click to toggle a toast</div>
            <>
              <Button
                variant="primary"
                size="lg"
                active
                onClick={() => setDisabled(!isDisabled)}
              >
                Toggle Toast
              </Button>{" "}
            </>
          </Route>
          <Route path="/Carousel">
            <VeriCarousel></VeriCarousel>
          </Route>
          <Route path="/about">
            {isAlert ? (
              <Alert
                variant="danger"
                onClose={() => setAlert(false)}
                dismissible
              >
                <Alert.Heading>:( Your Pc Encountered an error</Alert.Heading>
                <p>LULW your windows is crashing sad life !</p>
              </Alert>
            ) : (
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://i.pinimg.com/originals/6e/cb/2a/6ecb2abced73e345736baaf114412f9d.gif
              "
                />
                <Card.Body>
                  <Card.Title>I am Soap</Card.Title>
                  <Card.Text>Tell me Why I never wanna hear you say </Card.Text>
                  <Button variant="primary" onClick={() => setAlert(true)}>
                    Click to show alert
                  </Button>
                </Card.Body>
              </Card>
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
