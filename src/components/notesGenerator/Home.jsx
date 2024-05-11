import React from 'react'
import { useState, useEffect } from 'react'
import NotesConatiner from '../container/NotesContainer'
import Sidebar from '../sidebar/Sidebar'
import NewNote from '../addNewNote/NewNote'
import NoteDetails from '../notesData/NoteDetails'
import moment from 'moment';
import './Home.css'


const Home = () => {

  const [newGroupDataList, setNewGroupDataList] = useState(JSON.parse(localStorage.getItem('groupList')) || [])
  const [allNotes, setAllNotes] = useState( JSON.parse(localStorage.getItem('allNotes')) || [])
  const [showNewNote, setShowNewNote] = useState(false);
  const [newOpacity, setNewOpacity] = useState(1)
  const [showNoteDetails, setShowNoteDetails] = useState(true)
  const [itemNotes , setItemNotes] = useState(0)

  const handleAddComponent = () => {
    setShowNewNote(true)
    setNewOpacity(0.3)
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
    setAllNotes([...allNotes, { id: noteId, note , date : moment().format("Do MMM YYYY") , time : moment().format("h:mm a")}])
  }

  const handleSidebar = (val) => {
    setShowNoteDetails(val)
  }

  const handleHomeScreen = () =>{
    setShowNewNote(false)
    setNewOpacity(1);
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
      {showNewNote && <NewNote onGroupCreate={handleGroupCreate} handleHomeScreen={handleHomeScreen}/>}

    </div>
  )
}

export default Home