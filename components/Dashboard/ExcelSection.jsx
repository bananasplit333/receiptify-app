import React, { useEffect, useState } from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

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

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: 'none',
        },
        columnHeaders: {
          backgroundColor: '#e3f2fd', // Light blue background for headers
          fontSize: '16px',
          fontWeight: 'bold',
        },
        row: {
          '&:nth-of-type(odd)': {
            backgroundColor: '#f0f0f0', // Light gray background for odd rows
          },
          '&:nth-of-type(even)': {
            backgroundColor: '#ffffff', // White background for even rows
          },
        },
        cell: {
          '&:focus': {
            outline: 'none',
          },
        },
      },
    },
  },
});

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
      const data = JSON.parse(jsonData);
      const newRows = [];
      let idCounter = initialRows.length + 1;

      for (const category in data) {
        if (data.hasOwnProperty(category)) {
          const items = data[category];
          if (Array.isArray(items)) {
            items.forEach((item) => {
              const [itemName, itemPrice] = item.split(',').map((str) => str.trim());
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
    { field: 'id', headerName: 'ID', width: 90, hide: true},
    { field: 'item', headerName: 'Item', width: 200, editable: true },
    { field: 'category', headerName: 'Category', width: 200, editable: true },
    { field: 'qty', headerName: 'Qty', type: 'number', width: 60, editable: true },
    { field: 'price', headerName: 'Price', width: 100, editable: true },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 80,
      renderCell: (params) => (
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={() => handleDelete(params.id)}
          sx={{ '&:hover': { color: theme.palette.secondary.main } }}
        />
      ),
    },
  ];

  const calculateTotalCost = () => {
    return rows.reduce((total, row) => total + (row.price * row.qty), 0).toFixed(2);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', p: 2, bgcolor: '#f0f0f0', borderRadius: 1 }}>
        <DataGrid
          autoHeight
          rows={rows}
          columns={columns}
          pageSizeOptions={[5, 10, 15]}
          disableRowSelectionOnClick
          sx={{ bgcolor: 'background.paper', borderRadius: 1, boxShadow: 2 }}
          initialState={{
            columns: {
              columnVisibilityModel: {
                id: false,
              },
            },
          }}
        />
        <Box
          sx={{
            p: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            bgcolor: '#e3f2fd',
            borderTop: '1px solid #e0e0e0',
          }}
        >
          <Typography variant="body1" fontWeight="bold">
            Total Cost:
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            ${calculateTotalCost()}
          </Typography>
        </Box>
        <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
            Row deleted successfully!
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
};


export default ReactSpreadSheet;
