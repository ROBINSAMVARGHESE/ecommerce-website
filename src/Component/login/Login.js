import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Ensure this CSS file is updated with the styles below

function Login() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(''); // Define email state
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSignup, setIsSignup] = useState(false); // Manage signup mode
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!username || !password || (isSignup && !email)) {
      setError('Please fill in all fields.');
      return;
    }

    // Normally you would send these credentials to a server
    // For simplicity, let's assume the login is successful
    if (!isSignup && username === 'admin' && password === 'admin') {
      navigate('/'); // Ensure '/' is the correct route
    } else if (isSignup) {
      // Handle signup logic here
      alert('Signup successful!');
      setUsername('');
      setEmail(''); // Corrected capitalization
      setPassword('');
      setIsSignup(false);
    } else {
      setError('Invalid credentials.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        <h2 className="text-center">{isSignup ? 'Sign Up' : 'Login'}</h2>
        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          
          {isSignup && (
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
          <div className="text-center mt-3">
            {isSignup ? (
              <p>Already have an account? <a href="#!" onClick={() => setIsSignup(false)}>Login</a></p>
            ) : (
              <p>Don't have an account? <a href="#!" onClick={() => setIsSignup(true)}>Sign Up</a></p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
 