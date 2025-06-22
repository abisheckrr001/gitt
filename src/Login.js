import React, { useState } from 'react';
import Header from './Header';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = () => {
    // Hardcoded credentials
    const validUsername = 'abisheck';
    const validPassword = '1234';

    if (!username || !password) {
      setMessage(" Please fill in all fields.");
    } else if (username === validUsername && password === validPassword) {
      setMessage(` Welcome, ${username}! You are logged in.`);
    } else {
      setMessage(" Invalid username or password.");
    }
  };

  return (
    <div className="app-container">
      <Header />

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br />

      <button onClick={handleLogin}>Login</button>
        
      <p>{message}</p>

      <br></br>
        <Button />

    </div>
  );
}

export default Login;
