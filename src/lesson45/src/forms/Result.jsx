import React from 'react';

const Result = ({formValues}) => {
  return <>
        <h2>Итоговая информация:</h2>
        <ul>
            <li><b>Имя:</b> {formValues.firsName}</li>
            <li><b>Фамилия:</b> {formValues.lastName}</li>
            <li><b>Email:</b> {formValues.email}</li>
            <li><b>Пароль:</b> {formValues.password}</li>
            <hr/>
            <li><b>Город:</b> {formValues.city}</li>
            <li><b>Улица:</b> {formValues.street}</li>
            <li><b>Номер дома:</b> {formValues.appartment}</li>
        </ul>
  </>
}

export default Result;