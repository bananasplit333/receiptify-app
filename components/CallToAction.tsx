'use client';

import * as React from 'react';
import { Avatar, Button, Grid, SxProps, Theme, alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from './Typography';

export default function CallToAction() {
    return (
        <Box
            className="bg-blue-600"
            sx={{
                pb: 2,
                pt: { xs: 14, sm: 20 },
                textAlign: 'center',
                color: 'white'
            }}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pb: { xs: 8, sm: 12 },
                }}
            >
                <Typography variant="h4" component="h2" sx={{ mb: 4 }}>
                    Start streamlining your expense tracking today!
                </Typography>
                <Button variant="contained" className="bg-white text-blue-500" sx={{ mt: 3, px: 4, py: 2, fontWeight: 'bold' }}>
                    Upload Your First Receipt
                </Button>
            </Container>
        </Box>
    );
}
