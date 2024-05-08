import React from 'react'

const EachNoteDetails = ({ noteId, notesList }) => {

  return (
    <div className='each-note-div'>
      {notesList && notesList.map((noteData,index) => {
        if (noteData.id === noteId)
          return <div className='note-detail' key={index}><p>{noteData.note}</p></div>
      })}

    </div>
  )
}

export default EachNoteDetails
