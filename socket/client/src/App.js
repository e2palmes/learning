import io from 'socket.io-client';
import React, { useEffect, useState } from 'react';
import './App.css';

const socket = io.connect("http://localhost:3001");

function App() {
  const [message, setMessage] = useState("");
  const [messageReceived, SetMessageReceived] = useState("");
  const sendmessage = () => {
    socket.emit("send_message", { message });
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      SetMessageReceived(data.message);
    })
  })

  return (
    <div className='App'>
      <form action="">
        <input type="text" placeholder="Message..." onChange={(event) => { setMessage(event.target.value) }} />
        <button onClick={sendmessage}>Send Message</button>
        <h3>Message:</h3>
        <p>{messageReceived}</p>
      </form>
    </div>
  );
}

export default App;
