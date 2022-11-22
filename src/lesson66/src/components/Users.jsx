import React from "react";
import { useList } from './../hooks/useList';

export const Users = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [users, addUser, removeUser] = useList([{ id: 1, name: "Вася"}]);

  const handlePressEnter = (e) => {
    if (e.key === "Enter") {
      
      addUser(inputValue);
      setInputValue("");
    }
  };
  
  return (
    <>
      <ul className="list-group">
        {users.map((obj) => (
          <li key={obj.id} className="list-group-item d-flex justify-content-between align-item-center">
            {obj.name}
            <button onClick={() => removeUser({id: obj.id})} className="btn btn-outline-primary">X</button>
          </li>
        ))}
      </ul>
      <br />
      <div className="input-group input-group-lg">
        <input type="text" value={inputValue} onKeyUp={handlePressEnter} onChange={(e) => setInputValue(e.target.value)} className="form-control" placeholder="Новый пользователь" />
      </div>
    </>
  )
}
