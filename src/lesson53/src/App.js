import React from 'react';
import { Paper, Divider, Button, List, Tabs, Tab } from '@mui/material';
import { AddField } from './components/AddField';
import { Item } from './components/Item';

function reducer(state, action) {
  if (action.type === 'ADD_TASK') {
    return [
      ...state,
      {
        id: 3,
        text: 'Задача',
        completed: true
      }
    ];
  }

  if (action.type === 'TEST') {
    return [
      ...state,
      {
        id: 4,
        text: 'Тестовый action',
        completed: false
      }
    ];
  }

  return state;
} 

function App() {

  const [state, dispatch] = React.useReducer(reducer, [
    
    {
      id: 1,
      text: 'Первая задача',
      completed: false,
    },
    {
      id: 2,
      text: 'Проверил как работает отрисовка',
      completed: true
    }
  ]);

  const addTask = () => {
    dispatch({
      type: 'ADD_TASK',
    });
  }
  const testDispatch = () => {
    dispatch({
      type: 'TEST',
    });
  }

  return (
    <div className="App">
      <Button onClick={testDispatch}>dagf</Button>
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField onClickAdd={addTask}/>
        <Divider />
        <Tabs value={0}>
          <Tab label="Все" />
          <Tab label="Активные" />
          <Tab label="Завершённые" />
        </Tabs>
        <Divider />
        <List>
          {
            state.map(obj => (<Item key={obj.id} text={obj.text} completed={obj.completed}/>))
          }
        </List>
        <Divider />
        <div className="check-buttons">
          <Button>Отметить всё</Button>
          <Button>Очистить</Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
