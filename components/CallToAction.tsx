'use client';

import * as React from 'react';
import { Avatar, Button, Grid, SxProps, Theme, alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from './Typography';

export default function CallToAction() {
    return (
        <Box
         className="bg-orange-500 "
         sx={{pb:2}}
        >
            <Container
                className="text-white"
                sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pt: { xs: 14, sm: 20 },
                pb: { xs: 8, sm: 12 },
                }}
            >
                <Typography variant="h4" component="h2" sx={{mb:4}}>
                        Start streamlining your expense tracking today!
                </Typography>
                <div>
                    <Button variant="contained" className="bg-lime-950 text-white">Upload Your First Receipt</Button>
                </div>   
            </Container>
        </Box>
    );
}