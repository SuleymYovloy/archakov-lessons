/* eslint-disable array-callback-return */
import React from 'react';
import { Paper, Divider, Button, List} from '@mui/material';
import { AddField } from './components/AddField';
import { Item } from './components/Item';
import {useSelector, useDispatch} from 'react-redux';
import {Filter} from './components/Filter';
import {addTask, removeTask, toggleComplete, completeAll, clearAll, fetchTasks} from './redux/actions/tasks';
import { RootState } from './redux';

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);

  React.useEffect(() => {
    dispatch(fetchTasks());
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickAdd = (text: string, checked: boolean) => {
    dispatch(addTask(text, checked));
  }

  const handleDeleteTask = (id: number) => {
    if (window.confirm('Удалить задачу?')) {
      dispatch(removeTask(id));
    }
  };

  const handleToggleComplete = (id: number) => {
    dispatch(toggleComplete(id));
  }

  const handleCompleteAll = () => {
    dispatch(completeAll());
  }
  
  const handleClearAll = () => {
    if (window.confirm('Очистить все?')) {
      dispatch(clearAll());
    }
    
  }

  return (
    <div className="App">
      <Paper className="wrapper">
        <Paper className="header" elevation={0}>
          <h4>Список задач</h4>
        </Paper>
        <AddField onAdd={handleClickAdd}/>
        <Divider />
        <Filter/> {/*Компонент */}
        <Divider />
        <List>
          {
            state.tasks.filter(obj => {
              if (state.filter.filterBy === 'all') {
                return true;
              }
              if (state.filter.filterBy === 'completed') {
                return obj.completed
              }
              if (state.filter.filterBy === 'active') {
                return !obj.completed
              }
            }).map(obj => (<Item key={obj.id} text={obj.text} completed={obj.completed} onClickDelete={() => handleDeleteTask(obj.id)} onClickChecked={() => handleToggleComplete(obj.id)}/> ))
          }
        </List>
        <Divider />
        <div className="check-buttons">
          <Button disabled={!state.tasks.length} onClick={handleCompleteAll}>Отметить всё</Button>
          <Button disabled={!state.tasks.length} onClick={handleClearAll}>Очистить</Button>
        </div>
      </Paper>
    </div>
  );
}

export default App;
