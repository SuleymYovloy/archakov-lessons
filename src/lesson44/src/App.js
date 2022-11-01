import React from 'react';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  firstName: yup.string().min(5, 'Слишком короткое имя').required('Это обязательное поле!'),
  lastName: yup.string().required('Это обязательное поле!'),
  email: yup.string().email('Неверная почта').required('Укажите почту'),
  password: yup.string().when('email', {
    is: value => value.includes('@'),
    then: (schema) => schema.min(6, 'Пароль должен быть не менее 6 символов').max(32, "Пароль не должен быть больше 32 символов"),
  }),
}).required();


function App() {

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = values => console.log(values);

  console.log(formState)

  return (
    <div className="App">
      <div className='row'>
        <TextField name="firstName"  label='Имя' {...register('firstName')} helperText={formState.errors.firstName && formState.errors.firstName.message} error={!!formState.errors.firstName} fullWidth variant='standard'/>
        <TextField name="lastName" label='Фамилия' {...register('lastName')} helperText={formState.errors.lastName && formState.errors.lastName.message} error={!!formState.errors.lastName} fullWidth variant='standard'/>
      </div>
      <div className='row'>  
        <TextField name="email" label='Email' {...register('email', )} helperText={formState.errors.email && formState.errors.email.message} error={!!formState.errors.email} fullWidth variant='standard'/>
        <TextField name="password" type='password' label='Password' {...register('password', {required: 'Это обязательное поле'})} helperText={formState.errors.password && formState.errors.password.message} error={!!formState.errors.password} fullWidth variant='standard'/>
      </div>
      <br/>
      <div className='row'>
        <Button onClick={handleSubmit(onSubmit)} variant="contained" color='primary'>Зарегестрироваться</Button>
        <Button variant="contained" color='secondary'>Очистить</Button>
      </div>
    </div>
  );
}

export default App;
