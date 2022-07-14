import React, { useEffect, useRef, useState } from 'react';
import List from './list';
import StyledButtonDropDown from './styles';
import SettingsIcon from '@mui/icons-material/Settings';
import { Button } from '@mui/material';

interface IDropDownButtonListProps{
  selectedRowCount: number;
}

export default function DropDownButtonList({selectedRowCount}:  IDropDownButtonListProps): JSX.Element {
  const listItems: string[] = ['Bulk Action 1', 'Bulk Action 2','Bulk Action 3'];
  const [ openList, setOpenList ] = useState(false);
  const handleButtonClick = () => setOpenList(!openList);
  const ref = useRef<HTMLDivElement>(null);
 
  //Close dropdown if user clicks away
  useEffect(() => {
    const clickedOutside = (event: any) => {
      if(openList && ref.current && !ref.current.contains(event.target)){
        setOpenList(false);
      }
    }
    document.addEventListener("click", clickedOutside);
    return () => {
      document.removeEventListener("click", clickedOutside);
    }
  }, [openList])
 
  return (
    <>
    <StyledButtonDropDown>
        <div className="dropdown-wrapper" ref={ref}>
          <Button disabled={!(selectedRowCount > 0)} fullWidth={false} variant="contained" onClick={handleButtonClick}><SettingsIcon fontSize='small'></SettingsIcon>{selectedRowCount > 0 ? `${selectedRowCount} selected` : ""}</Button>
          <List state={openList}items={listItems} setOpenList={setOpenList}></List>
      </div>
      </StyledButtonDropDown>
    </>
  )
}
