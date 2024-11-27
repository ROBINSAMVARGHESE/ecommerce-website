import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check if the user is already logged in
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!username || !password || (isSignup && !email)) {
      setError('Please fill in all fields.');
      return;
    }

    if (isSignup) {
      // Signup Logic
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      const userExists = existingUsers.some((user) => user.username === username);

      if (userExists) {
        setError('Username already exists. Please choose a different username.');
        return;
      }

      const newUser = { username, email, password };
      localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));

      alert('Signup successful!');
      setUsername('');
      setEmail('');
      setPassword('');
      setIsSignup(false);
    } else {
      // Login Logic
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      const validUser = existingUsers.find(
        (user) => user.username === username && user.password === password
      );

      if (validUser) {
        localStorage.setItem('loggedInUser', username); // Save logged in user
        setIsLoggedIn(true);
        navigate('/'); // Redirect to the homepage
      } else {
        setError('Invalid credentials.');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        {isLoggedIn ? (
          <div className="text-center">
            <h2>Welcome, {localStorage.getItem('loggedInUser')}!</h2>
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <>
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
                  <p>
                    Already have an account?{' '}
                    <a href="#!" onClick={() => setIsSignup(false)}>
                      Login
                    </a>
                  </p>
                ) : (
                  <p>
                    Don't have an account?{' '}
                    <a href="#!" onClick={() => setIsSignup(true)}>
                      Sign Up
                    </a>
                  </p>
                )}
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;



 