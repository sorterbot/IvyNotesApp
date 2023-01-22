import React from 'react'
import notes from '../assets/data'
//import notes from '../assets/data'


export const NotePage = ({match}) => {
    let noteid = match.params.id

    let note = notes[(noteid-1)]
    return (
        <div>
            <div className='note-page'>
                <p>{note.id}</p>
                <p>{note.body}</p>
            </div>
        </div>
      )
    }