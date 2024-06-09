import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const PopChat = (props) => {
  const [message, setMessage] = useState('');
  const [messagesList, setMessagesList] = useState([]);
  const [chatOpen, setChatOpen] = useState(false);

  const toggle = () => {
    setChatOpen(!chatOpen);
  };

  const handleMessageAdd = () => {
    if (message.trim() !== '') {
      setMessagesList([...messagesList, message]);
      setMessage('');
    }
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/user/conversation/662fdceddf4421c27f0df569`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token2")}`,
            },
          }
        );
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const responseData = await response.json();
        // Assuming responseData is an array of messages
        if (Array.isArray(responseData)) {
          setMessagesList(responseData);
        } else {
          // If responseData is not an array, handle it accordingly
          console.error("Invalid response format. Expected array.");
        }
        console.log("Responseee:", responseData);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
  
    fetchServices();
  }, []);
  

  return (
    <div id='chatCon'>
      <div className={chatOpen ? 'chat-box show' : 'chat-box hide'}>
        <div className='header'>Chat with me</div>
        <div className='msg-area'>
          {
            message?.map((msg, index) => (
              <p key={msg._id}>
                <span>{msg}</span>
              </p>
            ))
          }
          {/* {messagesList.map((msg, index) => (
            <p key={index}>
              <span>{msg}</span>
            </p>
          ))} */}
        </div>
        <div className='footer'>
          <input
            placeholder='enter message'
            type='text'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={handleMessageAdd}>Add Message</button>
        </div>
      </div>
      <div className='pop'>
        <p>
          <img
            onClick={toggle}
            src='https://p7.hiclipart.com/preview/151/758/442/iphone-imessage-messages-logo-computer-icons-message.jpg'
            alt=''
          />
        </p>
      </div>
    </div>
  );
};

export default PopChat;
