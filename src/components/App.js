
import React, { useState } from 'react';
import LoginForm from './LoginForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
    <h1>Parent Component</h1>
    <div>
      {isLoggedIn ? <p>You are logged in!</p> :  <LoginForm onLogin={handleLogin} />}
    </div>
          </>
  );
}

export default App;
