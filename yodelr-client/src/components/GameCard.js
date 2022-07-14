import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";


function GameCard({games, onCardChange, value, setValue}){

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

    // function handleModalChange(e, modalToUpdate){
    //     console.log(modalToUpdate.id)
    //     fetch(`http://localhost:4200/reviews/` + modalToUpdate.id, {
    //       method: "PATCH",
    //       headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json"
    //       },
    //       body: JSON.stringify({
    //         review: editingValue,
    //       }),
    //     })
    //     .then(resp => resp.json())
    //     .then(review => console.log(review))
    //   }

    function handleModalChange(e, modalToUpdate) {
      console.log(modalToUpdate.id)
      fetch(`http://localhost:4200/reviews`, {
        method: "POST",
        headers: new Headers({
          Accept: "application/json",
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({
          game_id: modalToUpdate.id,
          review: editingValue
        }),
      })
      .then(resp => resp.json())
      .then(data => console.log(data))
    }

  return (
    <>
    <Card style={{ width: '18rem' }} onClick={(e) => onCardChange(e, games)}>
      <Card.Img variant="top" src={games.thumbnail} />
      <Card.Body>
        <Card.Title>{games.title}</Card.Title>
        <Card.Text>
          {games.short_description}
        </Card.Text>
                  <Button variant="primary" onClick={handleShow}>Review</Button>
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
      placeholder="Write review here"
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
          <Button variant="primary" onClick={(e) => handleModalChange(e, games)}>Submit</Button>
    </Modal.Footer>
    </Modal>
    </>
  );
}

export default GameCard;