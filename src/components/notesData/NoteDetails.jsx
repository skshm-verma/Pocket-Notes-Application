import React, { useState } from 'react'
import EachNoteDetails from './EachNoteDetails'
import BackArrow from '../../../public/assets/BackArrow.png'
import SubmitArrow from '../../../public/assets/SubmitArrow.png'
import DisabledArrow from '../../../public/assets/DisabledArrow.png'
import './NoteDetails.css'


const NoteDetails = ({ itemNotes, handleItemNotes, notesList, handleSidebar }) => {


  const [note, setNote] = useState('')


  const handleAllNotes = () => {
    setNote('')
    handleItemNotes(note, itemNotes.id)
  }

  const showSidebar = () => {
    handleSidebar(true)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && note.trim().length !== 0) {
      handleAllNotes()
    }
  }

  const isSubmitDisabled = note.trim().length !== 0;

  return (
    <div className='notes-details-div'>
      <div className='header'>
        {window.innerWidth < 820 && (
          <img
            src={BackArrow}
            alt='ArrowButton'
            className='arrow-btn'
            onClick={showSidebar}
          />
        )}
        <span className='note-logo' style={{ backgroundColor: itemNotes.colorChoice, border: `1px solid ${itemNotes.colorChoice}` }}>{itemNotes.shortHandName}</span>
        <p>{itemNotes.text}</p>
      </div>
      <div className='notes-details-container'>
        <EachNoteDetails noteId={itemNotes.id} notesList={notesList} />
      </div>
      <div className='footer'>
        <div className='input-area-div'>
          <textarea
            className='text-area-style'
            value={note}
            onInput={e => { setNote(e.target.value) }}
            onKeyDown={handleKeyDown}
          >
          </textarea>
          {isSubmitDisabled ? <img
            src={SubmitArrow}
            alt="EnabledArrowButton"
            className='submit-btn'
            onClick={handleAllNotes}
          /> :  <img
          src={DisabledArrow}
          alt="DisabledArrowButton"
          className='disable-btn'
        />}
        </div>
      </div>
    </div>
  )
}

export default NoteDetails
