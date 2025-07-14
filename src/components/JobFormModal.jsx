import { Modal, Button, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function JobFormModal({ show, onClose, onSubmit, job }) {
  const [form, setForm] = useState({
    company: '',
    role: '',
    source: '',
    dateApplied: '',
    status: 'Applied',
    notes: '',
    location: '',
    salaryFloor: '',
    salaryCeiling: '',
    contactName: '',
    contactInfo: '',
  });

  // Load existing job into form (update mode) only re-renders on update to job prop
  useEffect(() => {
    if (job) setForm(job);
  }, [job]);

  //update form field values for submission when they change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //submission of form - current timestamp for updated at, but checks for previous createdAt value
  const handleSubmit = () => {
    const timestamp = new Date().toISOString();
    const newJob = {
      ...form,
      updatedAt: timestamp,
      createdAt: form.createdAt || timestamp,
      id: job?.id || Date.now(),
    };
    onSubmit(newJob);
    onClose();
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{job ? 'Edit Job' : 'Add New Job'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-2">
            <Form.Label>Company</Form.Label>
            <Form.Control
              name="company"
              value={form.company}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Role</Form.Label>
            <Form.Control
              name="role"
              value={form.role}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Source</Form.Label>
            <Form.Control
              placeholder="LinkedIn, Indeed, Company site.."
              name="source"
              value={form.source}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Date Applied</Form.Label>
            <Form.Control
              type="date"
              name="dateApplied"
              value={form.dateApplied}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Status</Form.Label>
            <Form.Select
              name="status"
              value={form.status}
              onChange={handleChange}
              required
            >
              <option>Applied</option>
              <option>Interviewing</option>
              <option>Offer</option>
              <option>Rejected</option>
              <option>Withdrawn</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              as="textarea"
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows={2}
              maxLength={250}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Locaiton</Form.Label>
            <Form.Control
              name="location"
              value={form.location}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Salary Range low</Form.Label>
            <Form.Control
              name="salaryFloor"
              value={form.salaryFloor}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Salary Range high</Form.Label>
            <Form.Control
              name="salaryCeiling"
              value={form.salaryCeiling}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Company Contact Name</Form.Label>
            <Form.Control
              name="contactName"
              value={form.contactName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Contact Info</Form.Label>
            <Form.Control
              placeholder='Email, phone, etc..'
              name="contactInfo"
              value={form.contactInfo}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Cancel</Button>
        <Button variant="primary" onClick={handleSubmit}>
          {job ? 'Update Job' : 'Add Job'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default JobFormModal;
