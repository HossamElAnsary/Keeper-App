import React, { useState , useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Register from "./Register";
import axios from "axios";


function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {

    async function fetchData() {
      await axios.get('http://localhost:5000/note').then((res) => {
      setNotes(res.data);
      });
    }
    fetchData();
  });
  
  // function addNote(newNote) {
  //   setNotes((prevNote) => {
  //     return [...prevNote, newNote];
  //   });
  // }

 async function deleteNote(id) {

    
   await axios.delete(`http://localhost:5000/note/${id}`).then(() => alert("Note Deleted"));
  
    // setNotes((prevNote) => {
    //   return prevNote.filter((note, index) => {
    //     return index !== id;
    //   });
    // });
  }

  return (
    <div>
      <Header />
      <Register />
      <CreateArea />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
