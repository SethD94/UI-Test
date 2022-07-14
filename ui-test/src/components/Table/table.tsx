import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridColumnHeaderParams} from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import StyledActive, {StyledTerminated, StyledTable} from './styles'
import axios from 'axios';

interface ITableProps{
  switchState: boolean;
  setSelectedCount: (count: number) => void
}

type TTableData = {
  id: number;
  name: string;
  department: string;
  status: string;
}

const columns: GridColDef[] = [
  {
    field: 'name',
    width: 190,
    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => (
      <strong>
        {'Name'}
      </strong>
    )
  },
  {
    field: 'department',
    headerName: 'Department',
    width: 225,
    flex: 1,
    renderHeader: (params: GridColumnHeaderParams) => (
      <strong>
        {'Department'}
      </strong>
    )
  },
  {
    field: 'status',
    renderCell: (cellValues) => {
      if(cellValues.row.status === "Active"){
         return <StyledActive>{cellValues.row.status}</StyledActive>
      }
      else{
        return <StyledTerminated>{cellValues.row.status}</StyledTerminated>
      }
    },
    renderHeader: (params: GridColumnHeaderParams) => (
      <strong>
        {'Name'}
      </strong>
    ),
    type: 'number',
    width: 150,
    flex: 1
  },
];

export default function DataGridDemo({switchState, setSelectedCount}: ITableProps): JSX.Element {

  const [ tableData, setTableData ] = useState<Array<TTableData>>()
  
  useEffect(() => {
    switchState ?  
    axios.get('http://localhost:7000/employees').then((response) => { setTableData(response.data); }) : 
    axios.get('http://localhost:7000/employees?status=Active').then((response) => { setTableData(response.data); });
  }, [switchState]);

  return (
    <> 
      {tableData && 
        <StyledTable>
          <Box sx={{ width: '100%'}}>
            <DataGrid
              sx={{
                border: 0,
              }}
              autoHeight={true}
              rows={tableData}
              onSelectionModelChange={(ids) => {
                const selectedIDs = new Set(ids);
                const selectedRowData = tableData.filter((data) =>
                  selectedIDs.has(data.id)
                );
                setSelectedCount(selectedRowData.length);
              }}
              columns={columns}
              rowsPerPageOptions={[tableData.length]}
              checkboxSelection
              hideFooter={true}
              disableColumnFilter={true}
              disableColumnMenu={true}
            />
          </Box>
        </StyledTable>
      }
    </>
  );
}
