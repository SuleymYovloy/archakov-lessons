import React from "react";

export const useList = (defaultValue = []) => {
  const [items, setItems] = React.useState(defaultValue);

  const addItem = (name) => {
    const newObj = {
      id: items.length ? items[items.length - 1].id + 1 : 0,
      name
    };
    setItems((prev) => [...prev, newObj]);
  }

  const removeItem = ({id, index}) => {
    setItems((prev) => prev.filter((obj, i) => {
      if (id) {
        return obj.id !== id;
      }
      if (typeof index !== 'undefined') {
        return i !== index;
      }
      return true;
    }));
  };

  const clear = () => {
    setItems([])
  }

  return [
    items,
    addItem,
    removeItem,
    clear
  ];
}