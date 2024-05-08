import React from 'react'
import HomeImg from '../../../public/assets/HomeImg.png'
import LockImg from '../../../public/assets/LockImg.png'
import './NotesContainer.css'

const NotesConatiner = () => {
  return (
    <div className='note-container-div'>
        <img src={HomeImg} alt="homeImage" className='container-img'/>
        <h2>Pocket Notes</h2>
        <p>Send and receive messages without keeping your phone online.<br/> Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
       <div className='encryption-style'>
        <img height='16px' width='16px' src={LockImg} alt="lockImage" />
        <p>end-to-end encrypted</p>
       </div>
    </div>
  )
}

export default NotesConatiner
