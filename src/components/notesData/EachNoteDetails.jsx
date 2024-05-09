import React from 'react'

const EachNoteDetails = ({ noteId, notesList }) => {

  return (
    <div className='each-note-div'>
      {notesList && notesList.map((noteData, index) => {
        if (noteData.id === noteId)
          return <div className='note-detail' key={index}>
            <p>{noteData.note}</p>
            <span className='date-n-time'>
              <span>{noteData.data}</span>
              <span className='spanDot'></span>
              <span>{noteData.time}</span>
            </span>
          </div>
      })}

    </div>
  )
}

export default EachNoteDetails
