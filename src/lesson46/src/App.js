import React from 'react';
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import PersonalInfoForm from './forms/PersonalInfoForm';
import { Button } from '@mui/material';

const schema = yup.object({
  firstName: yup.string().min(5, 'Слишком короткое имя').required('Это обязательное поле!'),
  lastName: yup.string().required('Это обязательное поле!'),
  email: yup.string().email('Неверная почта').required('Укажите почту'),
});


function App() {

  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    console.log(values);
  }


  return (
    <div className="App">
      <FormProvider {...methods}>
        <PersonalInfoForm  />
      </FormProvider>
      <Button onClick={methods.handleSubmit(onSubmit)} variant='contained' color='primary'>Очистить</Button>
    </div>
  );
}

export default App;
