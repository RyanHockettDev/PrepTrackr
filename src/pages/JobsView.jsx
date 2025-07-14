import { Container, Row, Col, Button, Navbar, Nav } from 'react-bootstrap';
import JobCard from '../components/JobCard';
import JobFormModal from '../components/JobFormModal';
import { Link } from 'react-router-dom';

function JobsView({jobs, setJobs, showJobModal, setShowJobModal, selectedJob, setSelectedJob}){

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
            //sort function - jobs list 
            return [...filtered, job].sort((a,b) => new Date(b.updatedAt) - new Date(a.updatedAt))
        });
    };

    const handleCloseJobModal = () => {
        setShowJobModal(false);
    }
    
    return (
    <Container className="mt-4 fullPage">
      <Navbar expand="lg" className="border-bottom border-dark">
        <Container>
            <Nav.Link as={Link} to="/dash"><Navbar.Brand className='brand'>PrepTrackr</Navbar.Brand></Nav.Link>
            <Button className='greenBg' onClick={handleAddJobClick}>Add New Job App</Button>
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
          {jobs.map((job) => (
            <Col key={job.id} md={6} lg={4} className="my-4">
              <JobCard 
                job={job} 
                onEditClick={() => handleEditJobClick(job)} 
                onDeleteClick={() => handleDeleteJobClick(job)} 
              />
            </Col>
          ))}
      </Row>
      <JobFormModal
        show={showJobModal}
        onClose={handleCloseJobModal}
        onSubmit={handleSaveJob}
        job={selectedJob}
      />
    </Container>)
}

export default JobsView