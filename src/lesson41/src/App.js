import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleClickClear = () => {
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
  }

  const handleClickRegister = () => {
    const form = {
      firstName,
      lastName,
      email,
      password
    }
    handleClickClear();
  }

  return (
    <div className="App">
      <div className='row'>
        <TextField onChange={(event) => setFirstName(event.target.value)} value={firstName} label='Имя' fullWidth variant='standard'/>
        <TextField onChange={(event) => setLastName(event.target.value)} value={lastName} label='Фамилия' fullWidth variant='standard'/>
      </div>
      <div className='row'>  
        <TextField onChange={(event) => setEmail(event.target.value)} value={email} label='Email' fullWidth variant='standard'/>
        <TextField onChange={(event) => setPassword(event.target.value)} value={password} type='password' label='Password' fullWidth variant='standard'/>
      </div>
      <br/>
      <div className='row'>
        <Button onClick={handleClickRegister} variant="contained" color='primary'>Зарегестрироваться</Button>
        <Button onClick={handleClickClear} variant="contained" color='secondary'>Очистить</Button>
      </div>
    </div>
  );
}

export default App;
