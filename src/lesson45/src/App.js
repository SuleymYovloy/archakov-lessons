import React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom'

import PersonalInfoForm from './forms/PersonalInfoForm';
import AddressForm from './forms/AddressForm';
import Result from './forms/Result'

function App() {
  const [formValues, setFormValues] = React.useState({});
  const navigate = useNavigate();

  const nextStep = (name) => {
    navigate(name);
  }

  console.log('Главная форма', formValues)

  return (
    <div className="App">
      <button onClick={() => nextStep('address')} >555</button>
        <Routes>
          <Route path="/*" element={<PersonalInfoForm nextStep={nextStep} setFormValues={setFormValues}/>} exact />
          <Route path="/address/*" element={<AddressForm nextStep={nextStep} setFormValues={setFormValues}/>} />
          <Route path="/result/*" element={<Result formValues={formValues}/>} />
        </Routes>
    </div>
  );
}

export default App;
