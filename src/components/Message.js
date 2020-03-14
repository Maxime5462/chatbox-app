import React from 'react'

const Message = ({ pseudo, message}) => {
    return (
        <p classNAme="user-message">
            {message}
        </p>
    )
}

export default Message