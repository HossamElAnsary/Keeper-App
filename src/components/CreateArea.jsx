import React, { useState } from "react";
import axios from 'axios';
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

 const handleSubmit = (event) => {

  async function postData() {
  await axios
  .post('http://localhost:5000/note', note)
  .then(() => console.log('Note Created'))
  .catch(err => {
    console.error(err);
  });
  }
  postData();
  
    // props.onAdd(note);
    setNote({title: "", content: ""});
    
    event.preventDefault();
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
      >
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
