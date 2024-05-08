import React from 'react'
import { useState, useEffect } from 'react'
import NotesConatiner from '../container/NotesContainer'
import Sidebar from '../sidebar/Sidebar'
import NewNote from '../addNewNote/NewNote'
import './Home.css'
import NoteDetails from '../notesData/NoteDetails'

const Home = () => {

  const [newGroupDataList, setNewGroupDataList] = useState(JSON.parse(localStorage.getItem('groupList')) || [])
  const [allNotes, setAllNotes] = useState( JSON.parse(localStorage.getItem('allNotes')) || [])
  const [showNewNote, setShowNewNote] = useState(false);
  const [newOpacity, setNewOpacity] = useState(1)
  const [showNoteDetails, setShowNoteDetails] = useState(true)
  const [itemNotes , setItemNotes] = useState(0)

  const handleAddComponent = () => {
    setShowNewNote(true)
    setNewOpacity(0.4)
  }

  const handleNoteDetails = (group) => {
    setItemNotes(group)
    setShowNoteDetails(false)
    
  }
  const handleGroupCreate = (updatedGroupData) => {
    setNewGroupDataList([...newGroupDataList , updatedGroupData])
    setShowNewNote(false);
    setNewOpacity(1);
  };
  

  const handleItemNotes = (note , noteId) => {
    setAllNotes([...allNotes, { id: noteId, note }])
  }

  const handleSidebar = (val) => {
    setShowNoteDetails(val)
  }

  useEffect(() => {
    localStorage.setItem('groupList' , JSON.stringify(newGroupDataList))
    localStorage.setItem('allNotes', JSON.stringify(allNotes))
  }, [newGroupDataList , allNotes]);



  return (
    <div className='home-div'>
      <div className='side-bar' style={{ opacity: newOpacity }}>
        <Sidebar handleAddComponent={handleAddComponent} handleNoteDetails={handleNoteDetails} groupDataList={newGroupDataList}/>
      </div>
      <div className='notes-container' style={{ opacity: newOpacity }}>
        {showNoteDetails ? <NotesConatiner /> : 
        <NoteDetails itemNotes={itemNotes} handleItemNotes={handleItemNotes} notesList={allNotes} handleSidebar={handleSidebar}/>}
      </div>
      {showNewNote && <NewNote onGroupCreate={handleGroupCreate} />}

    </div>
  )
}

export default Home