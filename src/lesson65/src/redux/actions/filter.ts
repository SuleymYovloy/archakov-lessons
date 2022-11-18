import { FilterBy } from "../reducers/filter/types";

export const setFilter = (status: FilterBy) => ({
  type: 'SET_FILTER',
  payload: status,
});

