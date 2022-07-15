import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';


function ReviewCard({games, onDeleteClick,value,setValue}){

      //used for modal
      const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  
      //used for inline editor
      const [editingValue, setEditingValue] = useState(value);
      const onChange = (event) => setEditingValue(event.target.value);

      const onKeyDown = (event) => {
          if (event.key === "Enter" || event.key === "Escape") {
          event.target.blur();
          }
      }
      const onBlur = (event) => {
          if (event.target.value.trim() === "") {
          setEditingValue(value);
          } else {
          setValue(event.target.value)
          }
      }
  
      function handleModalClick(e, modalToUpdate){
          console.log(modalToUpdate)
          fetch(`http://localhost:4200/reviews/` + modalToUpdate.game.reviews[0].id, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify({
              review: editingValue
            }),
          })
          .then(resp => resp.json())
          .then(review => console.log(review))
        }

        //deletes data from :reviews table
        function handleBackendDelete(dataToDelete){
          console.log(dataToDelete)
          fetch(`http://localhost:4200/reviews/` + dataToDelete.game.reviews[0].id, {
            method: "DELETE",
          })
          .then(resp => resp.json())
          .then(() => console.log("Deleted..."))
        }
  
  const reviewInfo = (games.game.reviews[0].review)


  return (
    <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={games.thumbnail} />
      <Card.Body>
        <Card.Title>{games.title}</Card.Title>
        <Card.Text>
          {reviewInfo}
        </Card.Text>
        <Button variant="primary" onClick={() => {onDeleteClick(games); handleBackendDelete(games)}}>Delete</Button>
        <Button variant="primary" style={{marginLeft: 8}} onClick={handleShow}>Edit</Button>
      </Card.Body>
    </Card>

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
    >
    <Modal.Header closeButton>
        <Modal.Title>{games.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <input
      type="text"
      id="modal-text"
      placeholder="Write new review..."
      aria-label="Field name"
      value={editingValue}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    />
    </Modal.Body>
    <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => {handleModalClick(e, games); handleClose()}}>Submit</Button>
    </Modal.Footer>
    </Modal>
    </>
  );
}

export default ReviewCard;