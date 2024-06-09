import React, { useEffect, useState } from 'react';
import axios from 'axios';
import icon from "./105070500.png";
import { Image } from 'react-bootstrap';
export const PopChat = (props) => {
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);
  const [messagesList, setMessagesList] = useState([]);
  const [chatOpen, setChatOpen] = useState(false);
  const token = localStorage.getItem("token2");
  
  console.log(props.conversationId);

  const toggle = () => {
    setChatOpen(!chatOpen);
  };

  const handleMessageAdd = async () => {
    try {
      const formData = new FormData();
      formData.append('conversationId', props.conversationId);
      formData.append('message', message);
      if (image) {
        formData.append('media', image);
      }

      // Send the new message to the server
      const response = await axios.post(
        'http://localhost:8000/user/conversation',
        formData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      // Update the local state with the new message
      setMessagesList([...messagesList, response.data]);
      setMessage(''); // Clear the input field after sending the message
      setImage(null); // Clear the selected image after sending the message
    } catch (error) {
      console.error('Error adding message:', error.message);
    }
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/user/conversation/${props.conversationId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        
        const responseData = response.data;
        setMessagesList(responseData); // Assuming responseData is an array of messages
        console.log('Response:', responseData);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };
  
    fetchServices();
  }, [token]);

  return (
    <div id='chatCon'>
      <div className={chatOpen ? 'chat-box show' : 'chat-box hide'}>
        <div className='header' style={{ backgroundColor: "#235f80" }}>Chat with me</div>
        <div className='container-message'>
          {messagesList.map((msg) => (
            <p key={msg._id}>
              <span>{msg.message}</span>
              {msg?.media && <Image src={msg.image} width={200} height={120} />}
            </p>
          ))}
        </div>
        <div className='footer'>
          <input
            placeholder='enter message'
            type='text'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
           <input
            type='file'
            id='file-input'
            style={{ display: 'none' }}
            onChange={(e) => setImage(e.target.files[0])}
          />
                    <button className='file-input-button' onClick={() => document.getElementById('file-input').click()}>
            Choose File
          </button>
          <button onClick={handleMessageAdd}>send</button>
        </div>
      </div>
      <div className='pop'>
        <p>
          <img
            onClick={toggle}
            src={icon} alt=''
          />
        </p>
      </div>
    </div>
  );
};

export default PopChat;
