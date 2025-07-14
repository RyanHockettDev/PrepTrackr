import { Container, Card, Badge, ListGroup } from 'react-bootstrap';


function JobCard({job}) {
    let status = ""
    switch(job.status) {
        case 'Applied':
            status = "primary";
            break;
        case 'Interviewing':
            status = "warning";
            break;
        case 'Offer':
            status = "success";
            break;
        case 'Rejected':
            status = "danger";
            break;
        case 'Withdrawn':
            status = "info";
            break;
        default:
            status = "primary"
    }
    return (
        <Card className='h-100'>
            <Card.Header className='d-flex justify-content-between align-items-center'>Job Application<h5 className='my-auto'><Badge bg={status}>{job.status}</Badge></h5></Card.Header>
            
            <Card.Body>
                
                <Card.Title className='border-bottom py-2'>Company: {job.company}</Card.Title>
                
                
                <ListGroup>
                <ListGroup.Item>Role: {job.role}</ListGroup.Item>
                <ListGroup.Item>Source: {job.source}</ListGroup.Item>
                <ListGroup.Item>Date Applied: {job.dateApplied}</ListGroup.Item>
                {job.notes && (
                    <ListGroup.Item className='notes'>Notes: {job.notes}</ListGroup.Item>
                )}
                {job.location && (
                    <ListGroup.Item>Location: {job.location}</ListGroup.Item>
                )}
                {job.salaryFloor && job.salaryCeiling && (
                    <ListGroup.Item>Salary Range: ${job.salaryFloor} - {job.salaryCeiling}</ListGroup.Item>
                )}
                
                {job.contactName && (
                    <ListGroup.Item>Contact: {job.contactName}</ListGroup.Item>
                )}
                {job.contactInfo && (
                    <ListGroup.Item>Contact info: {job.contactInfo}</ListGroup.Item>
                )}
                </ListGroup>
            </Card.Body>
            <Card.Footer>
                <Card.Text>Created: {job.createdAt}</Card.Text>
                <Card.Text>Updated: {job.updatedAt}</Card.Text>
            </Card.Footer>
        </Card>
    )
}

export default JobCard;