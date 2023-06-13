import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import io from 'socket.io-client';
import { auth } from '../../../firebase/firebase.init';

const Chats = (props) => {
    const [socket, setSocket] = useState(null);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [user] = useAuthState(auth);
    const reciever = props.reciever;

    useEffect(() => {
        // Establish a WebSocket connection with the server
        const newSocket = io('http://localhost:5000');
        setSocket(newSocket);

        // Clean up the socket connection on unmount
        return () => newSocket.disconnect();
    }, []);

    useEffect(() => {
        // Receive new messages from the server
        if (socket) {
            socket.on('newMessage', newMessage => {
                setMessages(prevMessages => [...prevMessages, newMessage]);
            });
        }
    }, [socket]);

    const handleSendMessage = () => {
        if ( user && socket && message.trim() !== '') {
            const newMessage = {
                sender: user.email,
                recipient: 'Recipient',
                message: message,
                timestamp: new Date(),
            };

            // Send the message to the server
            socket.emit('newMessage', newMessage);

            // Update the local message list
            setMessages(prevMessages => [...prevMessages, newMessage]);

            // Clear the input field
            setMessage('');
        }
    };

    return (
        <div>
            <h1>Chat</h1>
            <div className="messages-container">
                {messages.map((msg, index) => (
                    <div key={index} className="message">
                        <p>
                            <strong>{msg.sender}:</strong> {msg.message}
                        </p>
                        <span>{msg.timestamp.toString()}</span>
                    </div>
                ))}
            </div>
            <div className="input-container">
                <input
                    type="text"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chats;