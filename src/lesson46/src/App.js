import React from 'react';



function App() {

  const [users, setUsers] = React.useState([]);



  //Домашнее задание

  // const url = 'https://6363989337f2167d6f7d80a5.mockapi.io/users';

  // async function fetchAsync() {
  //   try {
  //     await delay(2000);
  //     const response = await fetch(url);
  //     const result = await response.json();
  //     setUsers(users, result);
  //   } catch(e) {
  //     console.log(e);
  //   }
  // }




  const getUsers = () => {
    fetch('https://6363989337f2167d6f7d80a5.mockapi.io/users').then((res) => {
      res.json().then((result) => {
        setUsers(result);
      })
    })
  }

  return (
    <div>
        <ul>
          {users?.map((obj) => (
            <li key={obj.id}>{obj.name}</li>
          ))}
        </ul>
      <button onClick={getUsers}>Получить список пользователя</button>
      {/* <button onClick={fetchAsync}>Получить список пользователя</button> Кнопка для ДЗ */}
    </div>
  );
}

export default App;
