import React from 'react'
import { StyledList } from './styles'


interface IListProps{
  items: Array<string>;
  state: boolean;
  setOpenList: (state: boolean) => void;
}
export default function List({ items, state, setOpenList }: IListProps) {

  return (
    <StyledList>
        <div className={state ? 'list active' : 'list'}>
          <ul>
            {items.map((item, index) => {
              return <li key={index}>{item}</li>
            })}
          </ul>
        </div>
    </StyledList>
  )
}
