import React from 'react'
import NoteItem from './NoteItem'

function NoteList({ notes, onDeleteNote}) {
  return (
    <div className="notes-list">
      {notes.length > 0 ? (
        notes.map((note) => (
          <NoteItem key={note.id} note={note} onDeleteNote={onDeleteNote} />
        ))
      ): (
        <p className="notes-list__empty-message">Catatan kosong</p>
      )}
    </div>
  )
}

export default NoteList