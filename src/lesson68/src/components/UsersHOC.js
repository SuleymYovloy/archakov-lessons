import React from "react";
import { withList } from './../hoc/withList';

const Users = ({items, onRemove, onAdd}) => {
  const [inputValue, setInputValue] = React.useState("");

  const handlePressEnter = (e) => {
    if (e.key === "Enter") {
      onAdd(inputValue);
      setInputValue("");
    }
  };
  
  
  return (
    <>
      <ul className="list-group">
        {items.map((obj) => (
          <li key={obj.id} className="list-group-item d-flex justify-content-between align-item-center">
            {obj.name}
            <button onClick={() => onRemove({id: obj.id})} className="btn btn-outline-primary">X</button>
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

export default withList(Users);