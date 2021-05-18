import {useState} from 'react';

const Form = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  console.log(username);

  const submitForm = () => {
    alert(`Username: ${username}, Password: ${password}`);
    setUsername('');
    setPassword('');
  }

  return(
    <div>
      <h1>Form</h1>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={() => submitForm()}>Submit</button>
    </div>
  )
}
export default Form