import React from 'react';

const Item = ({name, onRemove, index}) => {
    return (
        <li>
            {name}
            <input placeholder='Введите значаение...' />
            <button onClick={() => onRemove(index)}>x</button>
        </li>
    );
}

export default function App() {
    const [names, setNames] = React.useState(["Ася","Иван","Аркадий", "Хасан", "Муса"]);

    const removeItem = (index) => {
        const newArr = names.filter((_, i) => {
            if (index !== i) {
                return true;
            } else {
                return false;
            }
        });
        setNames(newArr)
    }

    return (
        <div>
            <h3>Список</h3>
            <ul>
                {names.map((name, index) => (
                    <Item key={name} name={name} onRemove={removeItem} index={index}/>
                ))}
            </ul>
        </div>
    )
}