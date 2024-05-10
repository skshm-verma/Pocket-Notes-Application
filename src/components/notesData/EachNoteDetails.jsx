import React from 'react'

const EachNoteDetails = ({ noteId, notesList }) => {

  const requiredNotes = (notesList) => {
    const arr = []
    notesList.map((noteData) => {
      if (noteData.id === noteId) {
        arr.unshift(noteData)
      }
    })
    return arr
  }


  const notes = requiredNotes(notesList)

  return (
    <div className='each-note-div'>
      {/* {notesList && notesList.map((noteData, index) => {
        if (noteData.id === noteId)
          return <div className='note-detail' key={index}>
            <p>{noteData.note}</p>
            <span className='date-n-time'>
              <span>{noteData.data}</span>
              <span className='spanDot'></span>
              <span>{noteData.time}</span>
            </span>
          </div>
      })} */}

      {notes && notes.map((data, index) => {
        return <div className='note-detail' key={index}>
          <p>{data.note}</p>
          <span className='date-n-time'>
            <span>{data.date}</span>
            <span className='spanDot'></span>
            <span>{data.time}</span>
          </span>
        </div>
      })}

    </div>
  )
}

export default EachNoteDetails
