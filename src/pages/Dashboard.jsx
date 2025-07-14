import React from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav, ListGroup } from 'react-bootstrap';
import JobCard from '../components/JobCard'






function Dashboard({jobs, prepItems}) {
    const job = jobs.length > 0 ? jobs[0] : null;
  return (
    <Container className="mt-4 fullPage">
      <Navbar expand="lg" className="border-bottom">
        <Container>
            <Navbar.Brand href="/" className='brand'>PrepTrackr</Navbar.Brand>
            <Nav>
            <Navbar.Brand>Username</Navbar.Brand>
            <Nav.Link href="/me">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-wrench" viewBox="0 0 16 16">
                <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11z"/>
                </svg>
            </Nav.Link>
            </Nav>
        </Container>
      </Navbar>
      <Row className='d-flex justify-content-around border-bottom'>
        {/* Latest Job Application */}
        <Col md={4} className="my-4 d-flex flex-column border-bottom">
        <Button className='my-4 greenBg'>Add New Job App</Button>
        <div className='bold my-2 mx-auto'>Most recently updated Job App:</div>
          {job && <JobCard job={job} />}
        <Button className='tealBg my-4'>See All Jobs</Button>
        </Col>

        {/* Latest Interview Prep */}
        <Col md={4} className="my-4 d-flex flex-column border-bottom">
        <Button className='my-4 greenBg'>Add New Prep Item</Button>
        <div className='bold my-2 mx-auto'>Most recently updated Prep Item:</div>
          <Card className='h-100'>
            <Card.Header>Lastest Interview Prep</Card.Header>
            <Card.Body>
              <Card.Title className='border-bottom py-2'>Subject: React.js</Card.Title>
              <ListGroup>
                <ListGroup.Item></ListGroup.Item>
                <ListGroup.Item></ListGroup.Item>
                <ListGroup.Item></ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Button className='tealBg my-4'>See All Prep Items</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
