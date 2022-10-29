import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
  const [fields, setFields] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleClickClear = () => {
    setFields({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    })
  }

  const handleClickRegister = () => {

    if (!fields.email.includes('@')) {
      alert('Почта неверная');
      return
    }
    if (fields.firstName.length < 3 || fields.lastName.length < 3) {
      alert('Имя или фамилия указаны неверно');
      return
    }
    
    handleClickClear();
  }

  const handleChangeInput = (event) => {
    const {name, value} = event.target;
    setFields({
      ...fields,
      [name]: value
    });
  }

  const isValid = !!fields.firstName && !!fields.lastName && !!fields.email && !!fields.password;


  return (
    <div className="App">
      <div className='row'>
        <TextField name="firstName" onChange={handleChangeInput} value={fields.firstName} label='Имя' fullWidth variant='standard'/>
        <TextField name="lastName" onChange={handleChangeInput} value={fields.lastName} label='Фамилия' fullWidth variant='standard'/>
      </div>
      <div className='row'>  
        <TextField name="email" onChange={handleChangeInput} value={fields.email} label='Email' fullWidth variant='standard'/>
        <TextField name="password" onChange={handleChangeInput} value={fields.password} type='password' label='Password' fullWidth variant='standard'/>
      </div>
      <br/>
      <div className='row'>
        <Button disabled={!isValid} onClick={handleClickRegister} variant="contained" color='primary'>Зарегестрироваться</Button>
        <Button disabled={!isValid} onClick={handleClickClear} variant="contained" color='secondary'>Очистить</Button>
      </div>
    </div>
  );
}

export default App;
