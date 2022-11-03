import React from 'react'
import { FormField } from '../components/FormField';

const PersonalInfoForm = () => {

  return (
    <div>
      <div className='row'>
        <FormField name="firstName" label="Имя" />
        <FormField name="lastName" label="Фамилия" />
        <FormField name="email" label="Почта" />
        
      </div>
    </div>
  );
};

export default PersonalInfoForm;