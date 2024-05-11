import React, { useState , useRef} from 'react'
import './NewNote.css'

const NewNote = ({ onGroupCreate, handleHomeScreen }) => {
    const Colors = ['#B38BFA', '#FF79F2', '#43E6FC', '#F19576', '#0047FF', '#6691FF']

    const [selectedColor, setSelectedColor] = useState(null)
    const [nameValidate, setNameValidate] = useState(false)
    const [colorValidate, setColorValidate] = useState(false)

    const newDivRef = useRef(null)

    const [grpName, setGrpName] = useState({
        id: null,
        text: '',
        colorChoice: '',
        shortHandName: '',
        date: '',
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
        if (!newDivRef.current.contains(event.target)) {
            handleHomeScreen();
        }
    }

    const handleGroupNameChange = (event) => {
        setGrpName({ ...grpName, text: event.target.value })
    };

    const handleColorSelect = (color) => {
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
        <div className='whole-page' onClick={handleShowNewNote}>
            <div className='new-div-style' ref={newDivRef} >
                <h2>Create New Group</h2>
                <div className='input-conatiner'>
                    <div style={{display : 'flex' , alignItems : 'center'}}>
                        <span style={{display:'block'}}>Group Name</span>
                        <input
                            type="text"
                            placeholder='Enter group name'
                            className='input-label'
                            onInput={handleGroupNameChange}
                        />
                    </div>
                    {nameValidate && (<span className='validate-style'>Group name required</span>)}
                </div>

                <div className='input-conatiner'>
                    <div style={{display: 'flex', alignItems : 'center'}}>
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
                    {colorValidate && (<span className='validate-style'>Color required</span>)}
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