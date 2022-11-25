import React from "react";

export const withList = (Component) => {
  return class extends React.Component {
    state = {
      items: []
    }

    addItem = (name) => {
      const {items} = this.state;
      const newObj = {
        id: items.length ? items[items.length - 1].id + 1 : 0,
        name
      };
      this.setState({
        items: [...items, newObj]
      });
    };
  
    removeItem = ({id, index}) => {
      this.setState({
        items: this.state.items.filter((obj, i) => {
          if (id) {
            return obj.id !== id;
          }
          if (typeof index !== 'undefined') {
            return i !== index;
          }
          return true;
        })
      });
    }
  
    clear = () => {
      this.setState({
        items: []
      });
    };

    render() {
      return <Component items={this.state.items} onRemove={this.state.removeItem} onAdd={this.addItem} onClear={this.clear}/>
    }
  };
};