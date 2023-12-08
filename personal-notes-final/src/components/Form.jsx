import React, { useState } from 'react'

function Form({ onAddNote }) {
   const [ newNote, setNewNote ] = useState({ title: '', body: ''});

   const handleAddNote = () => {
    if (newNote.title && newNote.body) {
        onAddNote(newNote);
        setNewNote({ title: newNote.title, body: newNote.body })
    }
   };


  return (
    <div className="note-input">
          <h2>Tambah Catatan Baru</h2>
          <form>
            <label className="note-input__title">
              Judul:
              <input
                type="text"
                value={newNote.title}
                onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                placeholder="Judul catatan"
              />
            </label>
            <label className="note-input__body">
              Isi Catatan:
              <textarea
                value={newNote.body}
                onChange={(e) => setNewNote({ ...newNote, body: e.target.value })}
                placeholder="Isi catatan"
              />
            </label>
            <button type="button" onClick={handleAddNote}>
              Tambah Catatan
            </button>
          </form>
        </div>
  )
}

export default Form
