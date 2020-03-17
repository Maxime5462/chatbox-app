import React from "react";

const Message = ({ pseudo, message, isUser }) => {
  if (isUser(pseudo)) {
    return <p classNAme="user-message"><strong>{pseudo}:</strong>{message}</p>;
  } else {
    return (
      <p classNAme="not-user-message">
        <strong>{pseudo}:</strong>{message}
      </p>
    );
  }
};

export default Message;
