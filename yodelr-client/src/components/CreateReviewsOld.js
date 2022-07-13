import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react"

function CreateReviews() {
  const [title, setTitle] = useState("");
  function handleTitleChange(e) {
    //setTitle = e.target.value
    setTitle(e.target.value)
  } 
  return (
    <Form onSubmit={handleTitleChange}>
      <Form.Group className="mb-3" controlId="createReview">
        <Form.Label>Create a review</Form.Label>
        <Form.Control type="text" placeholder="Enter title of game" value={title} onSubmit={e => setTitle(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="thumbnail">
        <Form.Control type="url" placeholder="Logo URL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="description">
        <Form.Control type="text" placeholder="Short description" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="publisher">
        <Form.Control type="text" placeholder="Publisher name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="developer">
        <Form.Control type="text" placeholder="Developer name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="release">
        <Form.Control type="date" placeholder="Date of release" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="website">
        <Form.Control type="text" placeholder="Game website URL" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
  // console.log("value is:", e.target.value);
}

export default CreateReviews;