import React, { useState } from 'react';
import './App.css';
import Table from './components/Table/table';
import { FormControlLabel, Switch } from '@mui/material';
import DropDownListButton from './components/Dropdown Button List/dropDownButtonList';

function App() {
  const [ showTerminated, setShowTerminated ] = useState(false)
  const toggleSwitchHandler = () => setShowTerminated(!showTerminated);
  const [ selectedCount, setSelectedCount ] = useState(0);

  return (
    <>
      <div className="App-Container">
        <h1>UI Test</h1>
        <FormControlLabel control={<Switch checked={showTerminated} onChange={toggleSwitchHandler}/>} label="Show Terminated Employees" />
        <Table switchState={showTerminated} setSelectedCount={setSelectedCount}/>  
        <DropDownListButton selectedRowCount={selectedCount}></DropDownListButton>
      </div>
    </>
  );
}

export default App;
