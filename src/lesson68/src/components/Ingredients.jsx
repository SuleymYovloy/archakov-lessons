import React from "react";
import { useList } from './../hooks/useList';

export const Ingredients = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [ingredients, addIngredient, removeIngredient] = useList([{ id: 1, name: "Соль"}]);

  const handleClickAdd = () => {
    addIngredient(inputValue);
    setInputValue("");
  };

  return (
    <>
      <h2>Ингредиенты:</h2>
      <ul className="list-group">
        {ingredients.map((obj, index) => (
          <li key={obj.id}>
            {obj.name}
            <button onClick={() => removeIngredient({index} )} className="btn btn-outline-primary">X</button>
          </li>
        ))}
      </ul>
      <br />
      <div className="input-group input-group-lg">
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="form-control" placeholder="Название" />
        <button className="btn btn-primary" onClick={handleClickAdd}>Добавить</button>
      </div>
    </>
  )
}