import React, { useState, useRef } from 'react'
import HomeStyle from '../../styles/Home.module.css'
import { FaCheck, FaPencilAlt, FaTrashAlt } from 'react-icons/fa'
import { IoCloseSharp } from 'react-icons/io5'
function ListItem(props) {
    const itemToBeUpdated = useRef(null);
    const focusInput = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [isClick, setClicked] = useState(true);

    const [inputValue, setInputValue] = useState(`${props.goalsList}`)

    const editItem = () => {
        setClicked(false)

    }

    const closeEdition = () => {
        setClicked(true);
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const displayButtonsOnMouseOver = (e) => {
        setIsHovered(true)
    }

    const removeClassOnMouseLeave = (e) => {
        setIsHovered(false)
    }

    return (
        <li onMouseOver={displayButtonsOnMouseOver}
            onMouseLeave={removeClassOnMouseLeave}
            className={isHovered && isClick && props.HomeStyle.isHovered}>
            <span >
                {
                    isClick ?
                        props.goalsList :
                        <>
                            <input
                                type="text"
                                onChange={handleChange}
                                autoFocus value={inputValue}
                                ref={focusInput}
                            />
                            <span className={HomeStyle.listButtons}>
                                <FaCheck />
                                <IoCloseSharp onClick={closeEdition} />
                            </span>
                        </>
                }
            </span>
            {
                isHovered && isClick ?
                    <span>
                        <FaPencilAlt onClick={editItem} /> <FaTrashAlt />
                    </span> : null
            }</li>
    )
}

export default ListItem 