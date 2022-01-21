import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [dec, setDec] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const changeDecHandler = () => {
    setDec(listItems.sort((a, b) => b - a));
  };

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);



  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} dec={dec}/>
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changeDecHandler}>Change to Decending Order</Button>
    </div>
  );
}

export default App;
