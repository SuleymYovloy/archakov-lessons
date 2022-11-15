/* eslint-disable array-callback-return */
import React from 'react';
import { Paper, Divider, Button, List, Tabs, Tab } from '@mui/material';
import { AddField } from './components/AddField';
import { Item } from './components/Item';
import {useSelector, useDispatch} from 'react-redux'

const filterIndex = {
  'all': 0,
  'active': 1,
  'completed': 2,
}

function App() {
  
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  // const [tasks, setTasks] = React.useState(state.tasks);

  // store.subscribe(() => {
  //   const newState = store.getState();
  //   setTasks(newState.tasks);
  // });

  const addTask = (text, checked) => {
    dispatch({
      type: 'ADD_TASK',
      payload: {
        text,
        checked
      },
    });
  }

  const deleteTask = (id) => {
    if (window.confirm('Удалить задачу?')) {
      dispatch({
        type: 'DELETE_TASK',
        payload: id,
      });
    }
  };

  const toggleComplete = (id) => {
    dispatch({
      type: 'TOGGLE_COMPLETE',
      payload: id,
    });
  }

  const completeAll = () => {
    dispatch({
      type: 'COMPLETE_ALL',
    });
  }
  
  const clearAll = () => {
    if (window.confirm('Очистить все?')) {
      dispatch({
        type: 'CLEAR',
      });
    }
    
  }

  const setFilter = (_, newIndex) => {
    const status = Object.keys(filterIndex)[newIndex];
    dispatch({
      type: 'SET_FILTER',
      payload: status,
    })
  }

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField onAdd={addTask}/>
        <Divider />
        <Tabs onChange={setFilter} value={filterIndex[state.filterBy]}>
          <Tab label="Все" />
          <Tab label="Активные" />
          <Tab label="Завершённые" />
        </Tabs>
        <Divider />
        <List>
          {
            state.tasks.filter(obj => {
              if (state.filterBy === 'all') {
                return true;
              }
              if (state.filterBy === 'completed') {
                return obj.completed
              }
              if (state.filterBy === 'active') {
                return !obj.completed
              }
            }).map(obj => (<Item key={obj.id} id text={obj.text} completed={obj.completed} onClickDelete={() => deleteTask(obj.id)} onClickChecked={() => toggleComplete(obj.id)}/> ))
          }
        </List>
        <Divider />
        <div className="check-buttons">
          <Button disabled={!state.length === 0} onClick={completeAll}>Отметить всё</Button>
          <Button disabled={!state.length === 0} onClick={clearAll}>Очистить</Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
