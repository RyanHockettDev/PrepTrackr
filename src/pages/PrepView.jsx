import { Container, Row, Col, Button, Navbar, Nav } from 'react-bootstrap';
import PrepCard from '../components/PrepCard';
import PrepFormModal from '../components/PrepFormModal';
import { Link } from 'react-router-dom';

function PrepView({prepItems, setPrepItems, showPrepModal, setShowPrepModal, selectedPrepItem, setSelectedPrepItem}){

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
            <Button className='greenBg' onClick={handleAddPrepItemClick}>Add New Prep Item</Button>
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
          {prepItems.map((prepItem) => (
            <Col key={prepItem.id} md={6} lg={4} className="my-4">
              <PrepCard 
                prepItem={job} 
                onEditClick={() => handleEditPrepItemClick(job)} 
                onDeleteClick={() => handleDeletePrepItemClick(job)} 
              />
            </Col>
          ))}
      </Row>
      <PrepFormModal
        show={showPrepModal}
        onClose={handleClosePrepItemModal}
        onSubmit={handleSavePrepItem}
        prepItem={selectedPrepItem}
      />
    </Container>)
}

export default PrepView