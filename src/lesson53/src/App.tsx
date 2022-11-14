import React from 'react'

type User = {
  id: number;
  fullName: string;
}

type State = User[];

type AddUserAction = {
  type: "ADD_USER";
  playload: string;
};

function reducer(state: State, action: AddUserAction) {
  switch(action.type) {
    case 'ADD_USER':
      return [
        ...state,
        {
          id: 0,
          fullName: action.playload
        }
      ]

    default:
      return state;
  }

  return [];
}


function App() {
  const [state, dispatch] = React.useReducer(reducer, []);
  
  return (
    <div className='App'>
      <input placeholder='ВВедите имя юзера' />
      <button>Добавить</button>
      <hr />
      <ul>
        {state.map((obj) => (
          <li>
            Вася Пупкин<button>X</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;