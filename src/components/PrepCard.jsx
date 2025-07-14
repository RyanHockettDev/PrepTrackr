import { Container, Card, Badge, ListGroup } from 'react-bootstrap';


function PrepCard({prepItem}) {
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
        <Card className='h-100'>
            <Card.Header className='d-flex justify-content-between align-items-center'>Interview Prep Item - {prepItem.type}
                {/* checking for optional difficulty field and rendering padge with data if present */}
                {prepItem.difficulty && (
                    <h5 className='my-auto'><Badge bg={diff}>{prepItem.difficulty}</Badge></h5>
                )}
            </Card.Header>
            
            <Card.Body>
                
                <Card.Title className='border-bottom py-2'>{prepItem.title}</Card.Title>
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
                    <ListGroup.Item className='notes'>Notes: {prepItem.notes}</ListGroup.Item>
                )}
                {prepItem.question && (
                    <ListGroup.Item>Question: {prepItem.question}</ListGroup.Item>
                )}
                {prepItem.answer && (
                    <ListGroup.Item>Answer: {prepItem.answer}</ListGroup.Item>
                )}
                {prepItem.sessionLength && (
                    <ListGroup.Item>Session Length: {prepItem.sessionLength}</ListGroup.Item>
                )}
                </ListGroup>
                {/* add related job ID link here later*/}
            </Card.Body>
            <Card.Footer>
                <Card.Text>Created: {prepItem.createdAt}</Card.Text>
                <Card.Text>Updated: {prepItem.updatedAt}</Card.Text>
            </Card.Footer>
        </Card>
    )
}

export default PrepCard;