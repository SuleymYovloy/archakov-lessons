export type FilterBy = 'all' | 'active' | 'completed'; 

interface SetFilterAction {
  type: 'SET_FILTER';
  payload: FilterBy;
}

export interface FilterState {
  filterBy: FilterBy;
}

export type Actions = SetFilterAction;