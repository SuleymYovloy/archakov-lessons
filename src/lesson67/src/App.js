import React from 'react';

// Stateles Component
const ProductList = ({ items = [], onRemove}) => {

  const handleClickRemove = (index) => {
    if (window.confirm('Удалить продукт?')) {
      if (onRemove) {
        onRemove(index);
      }
    }
  }

  return (
    <ul>
      {items.map((item, i) => (
        <li key={item}>
          <b>{item}</b>
          <button onClick={() => handleClickRemove(i)}>X</button>
        </li>
      ))}
    </ul>
  );
};


const CartList = ({ items = [], onRemove}) => {

  const handleClickRemove = (index) => {
    if (window.confirm('Удалить продукт?')) {
      if (onRemove) {
        onRemove(index);
      }
    }
  }

  return (
    <ul style={{border: "1px solid #ccc", padding: 10}}>
      <h2>Корзин:</h2>
      {items.map((item, i) => (
        <li key={item}>
          <b>{item}</b>
          <button onClick={() => handleClickRemove(i)}>X</button>
        </li>
      ))}
    </ul>
  );
};

// Container Component

const ListContainer = ({items = [], Component}) => {
  const [_items, setItems] = React.useState(items);

  const onRemove = (index) => {
    setItems(prev => prev.filter((_, i) => index !== i));
  }

  return <ProductList items={_items} onRemove={onRemove}/>;
}

export default function App() {
  return (
    <div>
      <ListContainer items={["Хлеб", "Вода", "Соль"]} Component={ProductList}/>
      <hr />
      <ListContainer items={["Соль"]} Component={CartList}/>
      <hr />
    </div>
  );
};