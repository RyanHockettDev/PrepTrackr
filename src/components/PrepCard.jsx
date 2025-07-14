import { Card, Badge, ListGroup, Button } from 'react-bootstrap';


function PrepCard({prepItem, onEditClick, onDeleteClick}) {
    let diff = ""
    switch(prepItem.difficulty) {
        case 'Easy':
            diff = "success";
            break;
        case 'Medium':
            diff = "warning";
            break;
        case 'Hard':
            diff = "danger";
            break;
        default:
            diff = "success"
    }
    return (
        <Card className='h-100  border-dark'>
            <Card.Header className='d-flex justify-content-between align-items-center  border-dark'>Interview Prep Item - {prepItem.type}
                {/* checking for optional difficulty field and rendering padge with data if present */}
                {prepItem.difficulty && (
                    <h5 className='my-auto'><Badge bg={diff}>{prepItem.difficulty}</Badge></h5>
                )}
                <Button size="sm" variant="outline-info" onClick={onEditClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                    </svg>
                </Button>
                <Button size="sm" variant="outline-dark" onClick={onDeleteClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                    </svg>
                </Button>
            </Card.Header>
            
            <Card.Body>
                
                <Card.Title className='border-bottom py-2  border-dark'>{prepItem.title}</Card.Title>
                {/* check to ensure there are tags in the list to render */}
                {prepItem.tags?.length > 0 && (
                    <div className="my-1">Tags: 
                        {prepItem.tags.map((tag, index) => (
                        <Badge key={index} bg="secondary" className="mx-1">
                            {tag}
                        </Badge>
                        ))}
                    </div>
                )}
                
                <ListGroup>
                
                {prepItem.notes && (
                    <ListGroup.Item className='border-dark'>Notes: {prepItem.notes}</ListGroup.Item>
                )}
                {prepItem.question && (
                    <ListGroup.Item className='border-dark'>Question: {prepItem.question}</ListGroup.Item>
                )}
                {prepItem.answer && (
                    <ListGroup.Item className='border-dark'>Answer: {prepItem.answer}</ListGroup.Item>
                )}
                {prepItem.sessionLength && (
                    <ListGroup.Item className='border-dark'>Session Length: {prepItem.sessionLength}</ListGroup.Item>
                )}
                </ListGroup>
                {/* add related job ID link here later*/}
            </Card.Body>
            <Card.Footer className='border-dark'>
                <Card.Text>Created: {prepItem.createdAt}</Card.Text>
                <Card.Text>Updated: {prepItem.updatedAt}</Card.Text>
            </Card.Footer>
        </Card>
    )
}

export default PrepCard;