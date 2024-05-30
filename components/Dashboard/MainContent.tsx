'use client';
import { Box, Toolbar, Typography, Grid } from "@mui/material";
import DragDropComponent from "../DragDrop";
import ReactSpreadSheet from "./ExcelSection";

export default function MainContent() {
    return (
        <>
            <Box sx={{ width: '100%', flexGrow: 1 }}>
                <Toolbar />
                <Grid container spacing={4} sx={{ height: 'auto', overflow:'auto', width:'100%' }}>
                    <Grid item xs={12} md={0} lg={4}>
                        <Box sx={{ height: '100%' }}>
                            <DragDropComponent />
                        </Box>
                        
                    </Grid>
                    <Grid item xs={12} md={12} lg={8}>
                        <Box sx={{ backgroundColor: 'white', height: '100%', overflow: 'auto' }}>
                            <ReactSpreadSheet />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
