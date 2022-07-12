import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react"

function CreateReviews() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="createReview">
        <Form.Label>Create a review</Form.Label>
        <Form.Control type="text" placeholder="Enter title of game" />
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
}

export default CreateReviews;