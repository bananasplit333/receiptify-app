import Spreadsheet from "react-spreadsheet";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';


const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'item',
      headerName: 'Item',
      width: 150,
      editable: true,
    },
    {
      field: 'category',
      headerName: 'Categories',
      width: 150,
      editable: true,
    },
    {
      field: 'qty',
      headerName: 'Quantity',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      sortable: false,
      width: 160,
      editable:true,
    },
  ];
  
  const rows = [
    { id: 1, item:'broccoli', category: 'groceries', qty: 3, price: 14 },
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
  
const ReactSpreadSheet = () => {
    const columnLabels = [ "Item", "Categories", "qty", "total",];
    const rowLabels = [ "Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10", ];
    const data = [
        [{ "value": "KS PEPPER GR" }, { "value": "Spices" }, { "value": "3" }, { "value": "3.99" }],
        [{ "value": "KS MED SALT" }, { "value": "Spices" }, { "value": "3" }, { "value": "3.49" }],
        [{ "value": "KS VANILLA" }, { "value": "Baking Goods" }, { "value": "9" }, { "value": "9.99" }],
        [{ "value": "MRM ANTIOX TIPS TO" }, { "value": "Supplements" }, { "value": "4" }, { "value": "4.97" }],
        [{ "value": "GREEK YOGURT" }, { "value": "Dairy" }, { "value": "6" }, { "value": "6.32" }],
        [{ "value": "BANANAS EGGS" }, { "value": "Produce" }, { "value": "1" }, { "value": "1.49" }],
        [{ "value": "OMEGA-STRAWBRY WFFL" }, { "value": "Frozen Foods" }, { "value": "10" }, { "value": "10.99" }],
        [{ "value": "STRWBERRY WFFL" }, { "value": "Frozen Foods" }, { "value": "6" }, { "value": "6.79" }],
        [{ "value": "NERI ORG BUTR" }, { "value": "Dairy" }, { "value": "6" }, { "value": "6.29" }],
        [{ "value": "ORGANIC CHEESE" }, { "value": "Dairy" }, { "value": "6" }, { "value": "6.49" }],
        [{ "value": "BLUE CHEESE" }, { "value": "Dairy" }, { "value": "6" }, { "value": "6.15" }],
        [{ "value": "OLIVES" }, { "value": "Condiments" }, { "value": "2" }, { "value": "2.79" }],
        [{ "value": "FIRM TOFU" }, { "value": "Produce" }, { "value": "1" }, { "value": "2.15" }],
        [{ "value": "SM RED POTA" }, { "value": "Produce" }, { "value": "5" }, { "value": "5.79" }],
        [{ "value": "AVOCADOS" }, { "value": "Produce" }, { "value": "7" }, { "value": "7.49" }],
        [{ "value": "MOZZ/OG 2/1#" }, { "value": "Dairy" }, { "value": "6" }, { "value": "6.82" }]
    ];
    return (
        <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    );
};

export default ReactSpreadSheet;