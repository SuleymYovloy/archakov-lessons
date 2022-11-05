import React from 'react';
import axios from 'axios';

function App() {

  const [users, setUsers] = React.useState([]);
  const [uploading, setUploading] = React.useState(false)


  const getUsers = async() => {

    const {data} = await axios.get('https://6363989337f2167d6f7d80a5.mockapi.io/users');
    setUsers(data)
  };

  const createUser = () => {
    const emailElem = document.querySelector('#email');
    const usernameElem = document.querySelector('#username');
    const data = {
      email: emailElem.value,
      name: usernameElem.value
    };

    axios.post('https://6363989337f2167d6f7d80a5.mockapi.io/users', data);
  }

  const uploadFile = async() => {
    const fileElem = document.querySelector('#file');
    const file = fileElem.files[0];

    setUploading(true);

    const formData = new FormData();

    formData.append('file', file);

    await axios.post('http://localhost:9999', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    setUploading(false);
  };

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

      <br />
      <br />
      <hr />

      <div>
        <h4>Загрузка файла</h4>
        <input id="file" type="file" />
        <button disabled={uploading} onClick={uploadFile}>Отправить</button>
        {uploading && ( <p>
          <b>Идет загрузка</b>
        </p>)}
      </div>
    </div>
  );
}

export default App;
