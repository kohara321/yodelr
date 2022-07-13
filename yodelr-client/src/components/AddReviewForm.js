import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function AddReviewForm() {
  return (
    <Form>
      <Form.Group as={Row} className="mb-1 g-1 p-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Add Review:
        </Form.Label>
        <Col xs={8}>
          <Form.Control type="text" placeholder="Write review here" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3 p-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Submit</Button>
        </Col>
      </Form.Group>
    </Form>

    
  );
}

export default AddReviewForm;