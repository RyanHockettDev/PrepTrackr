import { Modal, Button, Form, Badge } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function PrepFormModal({ show, onClose, onSubmit, prepItem }) {
  const [form, setForm] = useState({
    title: '',
    type: '',
    difficulty: '',
    tags: [],
    notes: '',
    question: '',
    answer: '',
  });

  // Load existing prepItem into form (update mode) only re-renders on update to prepItem prop
  useEffect(() => {
  if (prepItem) {
    setForm(prepItem); // Edit mode
  } else {
    // Add mode: clear the form
    setForm({
        title: '',
        type: '',
        difficulty: '',
        tags: [],
        notes: '',
        question: '',
        answer: '',
});
  }
}, [prepItem]);

  //update form field values for submission when they change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  



  //unique tag handlers
    const [tags, setTags] = useState([]);
    const [tagInput, setTagInput] = useState('');
    
    //sets state variable tagInput to form value
    const handleTagInputChange = (e) => {
        setTagInput(e.target.value);
    };

    // triggered by pressing enter to add a tag
    const handleAddTag = () => {
        const trimmed = tagInput.trim(); //remove whitespace
        if (trimmed && !tags.includes(trimmed)) { //prevents duplicate tags (case sensitive)
            setTags([...tags, trimmed])
            setTagInput('') //clears tag input for next tag
        }
    };

    const handleRemoveTag = (tagToRemove) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAddTag();
        }
    }

    //submission of form - current timestamp for updated at, but checks for previous createdAt value
  const handleSubmit = () => {
    if (!prepItem) {
        setForm({
            title: '',
            type: '',
            difficulty: '',
            tags: [],
            notes: '',
            question: '',
            answer: '',
        });
    }
    if (!form.title || !form.type) {
        alert("Title and Type are required!");
        return;
    } else {
    const timestamp = new Date().toISOString();
    const newPrepItem = {
      ...form,
      tags,
      updatedAt: timestamp,
      createdAt: form.createdAt || timestamp,
      id: prepItem?.id || Date.now(),
    };
    onSubmit(newPrepItem);
    onClose();
  }};

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{prepItem ? 'Edit prepItem' : 'Add New prepItem'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-2">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              value={form.title}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Type</Form.Label>
            <Form.Select
              name="type"
              value={form.type}
              onChange={handleChange}
              required
            > <option>Select</option>
              <option>Question</option>
              <option>Concept</option>
              <option>Session</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Difficulty</Form.Label>
            <Form.Select
              name="status"
              value={form.status}
              onChange={handleChange}>
              <option>Select</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
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
            <Form.Label>Question</Form.Label>
            <Form.Control
              name="question"
              value={form.question}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Answer</Form.Label>
            <Form.Control
              name="answer"
              value={form.answer}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Tags</Form.Label>
            <div className="d-flex gap-2 mb-2">
                <Form.Control
                type="text"
                value={tagInput}
                onChange={handleTagInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Add a tag and press Enter"
                />
                <Button variant="outline-secondary" onClick={handleAddTag}>Add</Button>
            </div>
            <div className="d-flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                <Badge bg="info" key={index}>
                    {tag}{' '}
                    <span
                    onClick={() => handleRemoveTag(tag)}
                    style={{ cursor: 'pointer', marginLeft: '0.5rem' }}
                    >
                    &times;
                    </span>
                </Badge>
                ))}
            </div>
        </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>Cancel</Button>
        <Button variant="primary" onClick={handleSubmit}>
          {prepItem ? 'Update prepItem' : 'Add prepItem'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default PrepFormModal;
