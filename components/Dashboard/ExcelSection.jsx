import React, { useEffect, useState } from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const initialRows = [
  { id: 1, item: 'broccoli', category: 'groceries', qty: 3, price: 14 },
  { id: 2, item: 'apple', category: 'groceries', qty: 1, price: 31 },
  { id: 3, item: 'swiffer', category: 'home care', qty: 1, price: 31 },
  { id: 4, item: 'banana', category: 'groceries', qty: 6, price: 12 },
  { id: 5, item: 'milk', category: 'groceries', qty: 2, price: 9 },
  { id: 6, item: 'toilet paper', category: 'home care', qty: 4, price: 20 },
  { id: 7, item: 'shampoo', category: 'personal care', qty: 1, price: 15 },
  { id: 8, item: 'chicken breast', category: 'groceries', qty: 2, price: 25 },
  { id: 9, item: 'detergent', category: 'home care', qty: 1, price: 18 },
  { id: 10, item: 'oranges', category: 'groceries', qty: 3, price: 10 },
  { id: 11, item: 'toothpaste', category: 'personal care', qty: 1, price: 5 },
  { id: 12, item: 'bread', category: 'groceries', qty: 2, price: 8 },
  { id: 13, item: 'dish soap', category: 'home care', qty: 1, price: 7 },
  { id: 14, item: 'lettuce', category: 'groceries', qty: 2, price: 6 },
  { id: 15, item: 'deodorant', category: 'personal care', qty: 1, price: 10 },
];

const ReactSpreadSheet = ({ jsonData }) => {
  const [rows, setRows] = useState(initialRows);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleDelete = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  useEffect(() => {
    if (jsonData) {
      // Transform data into rows for the DataGrid
      const data = JSON.parse(jsonData);
      const newRows = [];
      let idCounter = initialRows.length + 1;

      for (const category in data) {
        if (data.hasOwnProperty(category)) {
          const items = data[category];
          if (Array.isArray(items)) {
            items.forEach((item) => {
              console.log(item.split(","));
              const [itemName, itemPrice] = item.split(",").map((str) => str.trim());;
              newRows.push({
                id: idCounter++,
                item: itemName,
                category: category,
                qty: 1,
                price: parseFloat(itemPrice),
              });
            });
          }
        }
      }

      setRows(newRows);
    }
  }, [jsonData]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'item', headerName: 'Item', width: 150, editable: true },
    { field: 'category', headerName: 'Category', width: 150, editable: true },
    { field: 'qty', headerName: 'Quantity', type: 'number', width: 110, editable: true },
    { field: 'price', headerName: 'Price', width: 110, editable: true },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 100,
      renderCell: (params) => (
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={() => handleDelete(params.id)}
        />
      ),
    },
  ];

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10, 15]}
        checkboxSelection
        disableRowSelectionOnClick
      />
      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success">
          Row deleted successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ReactSpreadSheet;
