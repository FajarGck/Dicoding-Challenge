// File: App.js
import React, { useState } from 'react';
import Form from './Form';
import NoteList from './NoteList';
import { getInitialData, showFormattedDate } from '../utils';
import '../styles/style.css'

const App = () => {
const initialData = getInitialData();
const [notes, setNotes] = useState(initialData);

const handleAddNote = (newNote) => {
  const timestamp = +new Date();
  const newNoteData = {
    ...newNote,
    id: timestamp,
    archived: false,
    createdAt: showFormattedDate(timestamp),
  };
  setNotes([...notes, newNoteData]);
}

const handleDeleteNote = (id) => {
  const updateNotes = notes.filter((note) => note.id !== id);
  setNotes(updateNotes);
}

  return (
    <div className="note-app">
      <div className="note-app__header">
        <h1>Aplikasi Catatan Pribadi</h1>
      </div>

      <div className="note-app__body">
        <Form onAddNote={handleAddNote}/>
        <NoteList notes={notes} onDeleteNote={handleDeleteNote}/>
      </div>
    </div>
  );
};

export default App;
