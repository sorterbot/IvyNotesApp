import React from 'react'
import notes from '../assets/data'
import ListItem from '../components/ListItem'

export const NotesListPage = () => {
  return (
    <div>
        <div className='notes-list'>
            {notes.map(note => (
                <ListItem  key={note.id} note={note} />
            ))}
        </div>
    </div>
  )
}
