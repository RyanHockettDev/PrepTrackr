import React from 'react';
import { Container, Row, Col, Button, Navbar, Nav, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import JobFormModal from '../components/JobFormModal';
import PrepFormModal from '../components/PrepFormModal';
import JobCard from '../components/JobCard';
import PrepCard from '../components/PrepCard';






function Dashboard({jobs, setJobs, prepItems, setPrepItems, showJobModal, setShowJobModal, showPrepModal, setShowPrepModal, selectedJob, setSelectedJob, setSelectedPrepItem, selectedPrepItem}) {
    //Checking for empty jobs and prepItems state values, then setting variable to first item in array (sorted in app.jsx, or on save) to fill single dashboard cards 
    
    const recentJob = jobs && jobs.length > 0 ? jobs[0] : null;
    const recentPrepItem = prepItems.length > 0 ? prepItems[0] : null;
    

    // Setting state values for toggling the modal popover and selected job (null by default for adding a job, entire job  object if updating a job)
    


    // Handlers for the job modal actions
    const handleAddJobClick = () => {
        //clears selected job state value if a job has previously been edited
        setSelectedJob(null);
        setShowJobModal(true);
    }

    const handleEditJobClick = (job) => {
        setSelectedJob(job);
        setShowJobModal(true);
    }

    const handleDeleteJobClick = (job) => {
        setJobs((prevJobs) => {
            return prevJobs.filter(j => j.id !== job.id);
        
        })
    }
    
    const handleSaveJob = (job) => {
        setJobs((prevJobs) => {
            // Filters for all jobs but prop job by id
            const filtered = prevJobs.filter(j => j.id !== job.id);
            console.log(jobs)
            //sort function - jobs list 
            return [...filtered, job].sort((a,b) => new Date(b.updatedAt) - new Date(a.updatedAt))
        });
    };

    const handleCloseJobModal = () => {
        setShowJobModal(false);
    }

    // Handlers for the prep item modal actions

    const handleAddPrepItemClick = () => {
        //clears selected PrepItem state value if a PrepItem has previously been edited
        setSelectedPrepItem(null);
        setShowPrepModal(true);
    }

    const handleEditPrepItemClick = (prepItem) => {
        setSelectedPrepItem(prepItem);
        setShowPrepModal(true);
    }

    const handleDeletePrepItemClick = (prepItem) => {
        setPrepItems((prevPrepItems) => {
            return prevPrepItems.filter(j => j.id !== prepItem.id);
        
        })
    }
    
    const handleSavePrepItem = (prepItem) => {
        setPrepItems((prevPrepItems) => {
            // Filters for all PrepItems but prop PrepItem by id
            const filtered = prevPrepItems.filter(j => j.id !== prepItem.id);
            console.log(prepItems)
            //sort function - PrepItems list 
            return [...filtered, prepItem].sort((a,b) => new Date(b.updatedAt) - new Date(a.updatedAt))
        });
        setSelectedPrepItem(null);
    };

    const handleClosePrepItemModal = () => {
        setShowPrepModal(false);
    }


  return (
    <Container className="mt-4 fullPage">
      <Navbar expand="lg" className="border-bottom border-dark">
        <Container>
            <Nav.Link as={Link} to="/dash"><Navbar.Brand className='brand'>PrepTrackr</Navbar.Brand></Nav.Link>
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
        <Button className='my-4 greenBg' onClick={handleAddJobClick}>Add New Job App</Button>
        <div className='bold my-2 mx-auto'>Most recently updated Job App:</div>
          {recentJob && <JobCard job={recentJob} onEditClick={() => handleEditJobClick(recentJob)} onDeleteClick={() => handleDeleteJobClick(recentJob)}/>}
          {!recentJob &&
          <Card className='border-dark'>
            <Card.Header>No Job Applications Available</Card.Header>
            <Card.Body>It looks like you haven't added any job applications yet! Use the green button above to add your first job app.</Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
          }
        <Link to='/jobs'><Button className='tealBg my-4 w-100'>See All Jobs</Button></Link>
        </Col>

        {/* Latest Interview Prep */}
        <Col md={4} className="my-4 d-flex flex-column border-bottom">
        <Button className='my-4 greenBg' onClick={handleAddPrepItemClick}>Add New Interview Prep Item</Button>
        <div className='bold my-2 mx-auto'>Most recently updated Prep Item:</div>
          {recentPrepItem && <PrepCard prepItem={recentPrepItem} onEditClick={() => handleEditPrepItemClick(recentPrepItem)} 
          onDeleteClick={() => handleDeletePrepItemClick(recentPrepItem)}/>}
          {!recentPrepItem &&
          <Card className='border-dark'>
            <Card.Header>No Prep Items Available</Card.Header>
            <Card.Body>It looks like you haven't added any Interview Prep items yet! Use the green button above to add your first prep item.</Card.Body>
            <Card.Footer></Card.Footer>
          </Card>
          }
          <Link to='/prep'><Button className='tealBg my-4 w-100'>See All Prep Items</Button></Link>
        </Col>
      </Row>
      <JobFormModal
        show={showJobModal}
        onClose={handleCloseJobModal}
        onSubmit={handleSaveJob}
        job={selectedJob}
      />
      <PrepFormModal
        show={showPrepModal}
        onClose={handleClosePrepItemModal}
        onSubmit={handleSavePrepItem}
        prepItem={selectedPrepItem}
      />
    </Container>
  );
}

export default Dashboard;
