
import React, { useState } from 'react';

function LoginForm({onLogin}) {  //function LoginForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() !== '' && password.trim() !== '') {

    onLogin();

    }
  };

  function myfun2(e){
    setPassword(e.target.value)
  }

  function myfun(e){
    setUsername(e.target.value)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
     Username : <input
        type="text"
        value={username}
        placeholder="Username"
        onChange={myfun}
      /><br/><br/>
      Password : <input
        type="password"
        value={password} 
        placeholder="Password"
        onChange={myfun2}
      /><br/><br/>
      <button type="submit">Login</button>
    </form>
    </>
  );
}

export default LoginForm;