import React from 'react';
import {Ingredients} from './components/Ingredients';
// import {Users} from './components/Users';
import UsersHOC from './components/UsersHOC';

export default function App() {
  return (
    <>
      <Ingredients/>
      <hr />
      <UsersHOC/>
    </>
  )
}