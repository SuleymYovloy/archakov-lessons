import { Tabs, Tab } from '@mui/material';
import { useDispatch } from 'react-redux';
import {setFilter} from '../redux/actions/filter';
import { useAppSelector } from '../redux';
import { FilterBy } from '../redux/reducers/filter/types';

const filterIndex: Record<FilterBy, number> = {
  all: 0,
  active: 1,
  completed: 2,
}

export const Filter = () => { 
  const dispatch = useDispatch();
  const filterBy = useAppSelector(state => state.filter.filterBy); // Достает из стейта только filterBy

  const handleChangeFilter = (_: unknown, newIndex: number) => {
    const status = Object.keys(filterIndex)[newIndex] as FilterBy;
    dispatch(setFilter(status));
  };

  return (
    <Tabs onChange={handleChangeFilter} value={filterIndex[filterBy]}>
      <Tab label="Все" />
      <Tab label="Активные" />
      <Tab label="Завершённые" />
    </Tabs>
  )
}