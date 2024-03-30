
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
      {isLoggedIn ? <h2> You are logged in !</h2> :  <LoginForm onLogin={handleLogin} />}
    </div>
          </>
  );
}

export default App;
