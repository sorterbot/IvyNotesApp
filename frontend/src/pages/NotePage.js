import React from 'react'
import notes from '../assets/data'
import { Link } from 'react-router-dom'
//import notes from '../assets/data'
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'


export const NotePage = ({match}) => {
    let noteid = match.params.id

    let note = notes[(noteid-1)]
    return (
        
            <div className='note'>
                <div className='note-header'>
                    <h3>
                        <Link to='/' >
                            <ArrowLeft />
                        </Link>
                    </h3>
                </div>

                <textarea value={note?.body}>
                </textarea>
            </div>
        
      )
    }