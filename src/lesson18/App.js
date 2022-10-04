import React from 'react';

function App() {

    const [inputValue, setInputValue] = React.useState('666');

    const onClickSearch = () => {
       setInputValue('');
    }

    const onChangeInput = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <div>
            <input value={inputValue} placeholder='Введите запрос...' onChange={onChangeInput}/>
            <button onClick={onClickSearch}>Найти</button>
        </div>
    );
}

export default App;