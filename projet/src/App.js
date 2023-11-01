import React from 'react';
import Button from 'react-bootstrap/Button';
import {Container, Navbar, Nav, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return(

    <React.Fragment>
        <div className='App'>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>Mon Application</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Accueil</Nav.Link>
                        <Nav.Link href="#link">À propos</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container>
             <h1>Cartes</h1>
             <Card>
                <Card.Body>
                    <Card.Title>Carte 1</Card.Title>
                    <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing</Card.Text>
                    <Button variant="primary">Cliquez ici</Button>
                </Card.Body>
            </Card>

          <Card>
            <Card.Body>
              <Card.Title>Carte 2</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing</Card.Text>
              <Button variant="secondary">Cliquez ici</Button>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>Carte 3</Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing</Card.Text>
              <Button variant="success">Cliquez ici</Button>
            </Card.Body>
          </Card>
        </Container>

        
        </div>
    </React.Fragment>
  );

}

export default App;