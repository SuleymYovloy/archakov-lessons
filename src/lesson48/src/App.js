import React from 'react';
import axios from 'axios';

function App() {

  const [users, setUsers] = React.useState([]);


  const getUsers = async() => {

    const {data} = await axios.get('https://6363989337f2167d6f7d80a5.mockapi.io/users');
    setUsers(data)
    // axios.get('https://6363989337f2167d6f7d80a5.mockapi.io/users').then(res => {
    //   setUsers(res.data)
    // });
  };

  const createUser = () => {
    const emailElem = document.querySelector('#email');
    const usernameElem = document.querySelector('#username');
    const data = {
      email: emailElem.value,
      name: usernameElem.value
    };
    // fetch('https://6363989337f2167d6f7d80a5.mockapi.io/users', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // });

    axios.post('https://6363989337f2167d6f7d80a5.mockapi.io/users', data);
  }

  return (
    <div>
        <ul>
          {users.map((obj) => (
            <li key={obj.id}>{obj.name}</li>
          ))}
        </ul>
      <button onClick={getUsers}>Получить список пользователя</button>

      <hr />
      <br />
      <hr />
      <br />

      <div>
        <h4>Создать пользователя:</h4>
        <input type="text" id='email' placeholder='Email'/>
        <input type="text" id='username' placeholder='Имя'/>
        <button onClick={createUser}>Отправить</button>
      </div>
    </div>
  );
}

export default App;
