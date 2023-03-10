import React from 'react'
import notes from '../assets/data'
import ListItem from '../components/ListItem'

export const NotesListPage = () => {
  return (
    <div className='notes'> 
        
        <div className="notes-header">
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">{notes.length}</p>
        </div>

        <div className='notes-list'>
            {notes.map(note => (
                <ListItem  key={note.id} note={note} />
            ))}
        </div>
    </div>
  )
}
