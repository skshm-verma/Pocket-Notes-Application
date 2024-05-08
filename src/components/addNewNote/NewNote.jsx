import React, { useState } from 'react'
import './NewNote.css'

const NewNote = ({onGroupCreate}) => {
    const Colors = ['#B38BFA', '#FF79F2', '#43E6FC', '#F19576', '#0047FF', '#6691FF']

    const [selectedColor, setSelectedColor] = useState(null);

    const [grpName, setGrpName] = useState({
        id: null,
        text: '',
        colorChoice: '',
        shortHandName: 'abc'
      })

      function getInitials(name) {
        if (!name || typeof name !== 'string') {
          return '';
        }

        return name.trim().split(/\s+/) 
                   .map(word => word[0].toUpperCase()) 
                   .join('');
      }

    const handleGroupNameChange = (event) => {
        setGrpName({...grpName , text : event.target.value})
    };

    const handleColorSelect = (color) => {
        setSelectedColor(color);
        setGrpName({...grpName ,colorChoice : color})
    };
     

    const handleCreateGroup = () => {
        onGroupCreate({ ...grpName,id: Math.floor((Math.random()*9999)+1000) , shortHandName: getInitials(grpName.text)})
        };
    

    return (
        <div className='whole-page' >
            <div className='new-div-style'>

                <h2>Create New Group</h2>

                <div
                    className='input-conatiner'>
                    <span>Group Name</span>
                    <input
                        type="text"
                        placeholder='Enter group name'
                        className='input-label'
                        onInput={handleGroupNameChange}
                    />
                </div>

                <div className='input-conatiner' style={{ display: 'flex', width: '100%' }}><span>Choose Color</span>
                    <div>
                        <ul style={{ display: 'flex' }}>
                            {Colors.map((color, index) => (
                                <li 
                                key={index} 
                                className={`color-list ${color === selectedColor ? 'selected' : ''}`} 
                                style={{ backgroundColor: color}}
                                onClick={() => handleColorSelect(color)}
                                >
                                </li>

                            ))}
                        </ul>
                    </div>
                </div>

                <div className='btn' onClick={handleCreateGroup}><button type='submit'>Create</button></div>
            </div>

        </div>
    )
}

export default NewNote


/**       How to use debouncing for the initials
 
        //const [debouncedShortName, setDebouncedShortName] = useState('');
        // Update debouncedShortName with a delay
        // const timeoutId = setTimeout(() => {
        //   setDebouncedShortName(getInitials(event.target.value));
        //  }, 2000); // Adjust delay (in milliseconds) as needed
  
        // Cleanup function to clear timeout if component unmounts
        //   return () => clearTimeout(timeoutId);
 **/