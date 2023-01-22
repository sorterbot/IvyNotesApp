import React from 'react'
import { Link } from 'react-router-dom'

function ListItem({note}) {
  return (
    <div>
        <Link to={`/note/${note.id}`}>
            <p>{note.body}</p>
        </Link>
    </div>
  )
}

export default ListItem