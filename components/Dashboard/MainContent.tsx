'use client';
import { Box, Toolbar, Typography, Grid } from "@mui/material";
import DragDropComponent from "../DragDrop";
import ReactSpreadSheet from "./ExcelSection";
import React, { useState } from 'react';

export default function MainContent() {
    const [jsonData, setJsonData] = useState(null);

    const handleJsonData = (data: any ) => {
        setJsonData(data);
    };

    return (
        <>
            <Box sx={{ width: '100%', flexGrow: 1, bgcolor: '#f7f7f7', p: 3 }}>
                <Toolbar />
                <Grid container spacing={4} sx={{ height: 'auto', overflow: 'auto', width: '100%' }}>
                    <Grid item xs={12} md={4} lg={4}>
                        <Box
                            sx={{
                                height: '100%',
                                p: 2,
                                bgcolor: '#ffffff',
                                borderRadius: 2,
                                boxShadow: 3,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                            }}
                        >
                            <Box sx={{ width: '100%', mt: 2 }}>
                                <DragDropComponent onJsonDataReceived={handleJsonData} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8} lg={8}>
                        <Box
                            sx={{
                                backgroundColor: 'white',
                                height: '100%',
                                p: 2,
                                borderRadius: 2,
                                boxShadow: 3,
                            }}
                        >
                            <Typography variant="h6" sx={{ mb: 2 }}>
                                Data Grid
                            </Typography>
                            <ReactSpreadSheet jsonData={jsonData} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
