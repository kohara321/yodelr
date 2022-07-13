import React, { useState } from "react";
import "./CreateForm.css";
import Button from 'react-bootstrap/Button';
function CreateForm() {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [description, setDescription] = useState("");
  const [review, setReview] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:4200/reviewed", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        title: title,
        thumbnail: thumbnail,
        short_description: description
      }),
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));
    setTitle("");
    setThumbnail("");
    setDescription("");
    setReview("");
  }
  console.log(title)
  console.log(thumbnail)
  console.log(description)
  console.log(review)
  return (
    <div className="container">
      <form id="form" onSubmit={handleSubmit}>
        <h1 id="form-header">Create a review</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label className="form-label">Title</label>
            <input
              className="form-input"
              type="text"
              id="title"
              name="title"
              placeholder="Add title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="field">
            <label className="form-label">Logo</label>
            <input
              className="form-input"
              type="text"
              id="thumbnail"
              name="thumbnail"
              placeholder="Add Logo URL"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
            />
          </div>
          <div className="field">
            <label className="form-label">Description</label>
            <input
              className="form-input"
              type="text"
              id="description"
              name="description"
              placeholder="Add description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            </div>
            <div className="field">
            <label className="form-label">Review</label>
            <input
              className="form-input"
              type="text"
              id="review"
              name="review"
              placeholder="Add review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
            </div>
            <Button variant="primary" id="form-btn">Submit</Button>{' '}
        </div>
      </form>
    </div>
  );
}
export default CreateForm;