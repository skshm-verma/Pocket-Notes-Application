import React from 'react'
import Plus from '../../../public/assets/plus.png'
import './Sidebar.css'

const Sidebar = ({ handleAddComponent, handleNoteDetails, groupDataList }) => {

    const handleItemClick = (group) => {
        handleNoteDetails(group)
    }

    return (
        <div className='side-container'>
            <h2 className='side-heading'>Pocket Notes</h2>
            <div  className='scrolling'>
                {groupDataList.length > 0 && (
                    <div className='group-list'>
                        {groupDataList.map((group) => (
                            <div className='each-group-item' key={group.id} onClick={() => handleItemClick(group)}>
                                <div
                                    className='group-name-logo'
                                    style={{ backgroundColor: group.colorChoice, border: `1px solid ${group.colorChoice}` }}>
                                    {group.shortHandName}</div>
                                <p className='each-group-name'>{group.text}</p>
                            </div>
                        ))}
                    </div>
                )
                }
            </div>

            <div className='img-container' onClick={handleAddComponent}><img width="24" height="24" src={Plus} alt="plus-icon" /></div>
        </div >
    )
}

export default Sidebar