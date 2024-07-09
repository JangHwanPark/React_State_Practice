import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {io} from "socket.io-client";

const socket = io("http://localhost:5000")

function App() {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("receiveMessage", message => {
      setChat(prevChat => [...prevChat, message]);
    });

    socket.on("welcome", message => {
      setChat((prevChat) => [...prevChat, message]);
    });

    socket.on("disConn", message => {
      setChat((prevChat) => [...prevChat, message]);
    });

    return () => {
      socket.off("receiveMessage");
      socket.off("welcome");
      socket.off("disConn");
    };
  }, []);

  const handleLogin = () => {
    if (username.trim()) {
      socket.emit('enterRoom', username);
      setIsLoggedIn(true);
    }
  };

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('sendMessage', `${username}: ${message}`);
      setMessage('');
    }
  }

  const handleLogOut = () => {
    if (username.trim()) {
      socket.emit('disConn', `${username}`);
      setIsLoggedIn(false);
      setUsername('');
      setChat([]);
    }
  }

  console.log(chat)
  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="이름을 입력하세요"
          />
          <button onClick={handleLogin}>Enter Chat</button>
        </div>
      ) : (
        <div>
          <div>
            {chat.map((msg, index) => (
              <div key={index}>{msg}</div>
            ))}
          </div>

          <div>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
            />
            <button onClick={sendMessage}>전송</button>
          </div>
          <button onClick={handleLogOut}>종료하기</button>
        </div>
      )}
    </div>
  )
}

export default App