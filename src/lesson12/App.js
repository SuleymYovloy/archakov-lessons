import React from "react";

function App() {
  const [numbers, setNumbers] = React.useState([1,2,3,5,6,7]);

  const randomNumber = () => {
    return Math.round(Math.random() * 10);
  }

  const handleButtonClick = () => {
    const number = randomNumber();
    setNumbers(prev => [...prev, number]);
  }

  return (
    <div className="App">
      <ul>
        {
          numbers.map((n, index) => <li key={index}>{n}</li>)
        }
      </ul>
      <button onClick={handleButtonClick}>Генерировать</button>
    </div>
  );
}

export default App;
