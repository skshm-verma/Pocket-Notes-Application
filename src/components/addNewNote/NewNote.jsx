import React, { useEffect, useState } from 'react'
import './NewNote.css'

const NewNote = ({ onGroupCreate, handleHomeScreen }) => {
    const Colors = ['#B38BFA', '#FF79F2', '#43E6FC', '#F19576', '#0047FF', '#6691FF']

    const [selectedColor, setSelectedColor] = useState(null)
    const [nameValidate, setNameValidate] = useState(false)
    const [colorValidate, setColorValidate] = useState(false)

    const [grpName, setGrpName] = useState({
        id: null,
        text: '',
        colorChoice: '',
        shortHandName: '',
        data: '',
        time: ''
    })

    function getInitials(name) {
        if (!name || typeof name !== 'string') {
            return '';
        }

        return name.trim().split(/\s+/)
            .map(word => word[0].toUpperCase())
            .join('');
    }

    const handleShowNewNote = () => {
        handleHomeScreen()
    }

    const handleGroupNameChange = (event) => {
        // setNameValidate(true)
        setGrpName({ ...grpName, text: event.target.value })
    };

    const handleColorSelect = (color) => {
        // setColorValidate(false)
        setSelectedColor(color);
        setGrpName({ ...grpName, colorChoice: color })
    };


    const handleCreateGroup = () => {

        const trimmedName = grpName.text.trim();
        setNameValidate(!trimmedName);
        setColorValidate(!grpName.colorChoice);

        if (trimmedName !== '' && grpName.colorChoice !== '') {
            onGroupCreate({
                ...grpName,
                id: Math.floor((Math.random() * 9999) + 1000),
                shortHandName: getInitials(trimmedName),
            });
            setNameValidate(false);
            setColorValidate(false);
        }
    };


    return (
        <div className='whole-page' onDoubleClick={handleShowNewNote}>
            {/* Added the functionality that on doubleClicking the New Note Component is disappered and we come back to home screen*/}
            <div className='new-div-style' >
                <h2>Create New Group</h2>
                <div className='input-conatiner' style={{ width: '100%' }}>
                    <div>
                        <span>Group Name</span>
                        <input
                            type="text"
                            placeholder='Enter group name'
                            className='input-label'
                            onInput={handleGroupNameChange}
                        />
                    </div>
                    {nameValidate && (<span style={{ color: 'red', fontSize: '0.7rem', display: 'block', marginTop: '0.5rem' }}>Group name required</span>)}
                </div>

                <div className='input-conatiner' style={{ width: '100%' }}>
                    <div style={{display: 'flex'}}>
                        <span style={{display: 'block' }}>Choose Color</span>
                        <div style={{ display: 'block' }}>
                            <ul style={{ display: 'flex' }}>
                                {Colors.map((color, index) => (
                                    <li
                                        key={index}
                                        className={`color-list ${color === selectedColor ? 'selected' : ''}`}
                                        style={{ backgroundColor: color }}
                                        onClick={() => handleColorSelect(color)}
                                    >
                                    </li>

                                ))}
                            </ul>
                        </div>
                    </div>
                    {colorValidate && (<span style={{ color: 'red', fontSize: '0.7rem', display: 'block' , marginTop: '0.5rem'}}>Color required</span>)}
                </div>


                <div className='btn' onClick={handleCreateGroup}><button type='submit'>Create</button></div>
            </div>
        </div>
    )
}

export default NewNote


/**       How to use debounce with the initials
 
        //const [debouncedShortName, setDebouncedShortName] = useState('');
        // Update debouncedShortName with a delay
        // const timeoutId = setTimeout(() => {
        //   setDebouncedShortName(getInitials(event.target.value));
        //  }, 2000); // Adjust delay (in milliseconds) as needed
  
        // Cleanup function to clear timeout if component unmounts
        //   return () => clearTimeout(timeoutId);
 **/