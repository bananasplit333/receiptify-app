'use client';

import * as React from 'react';
import { Avatar, Grid, SxProps, Theme, alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from './Typography';

export default function BenefitsSection() {
    return (
        <Box
         sx={{ bgcolor: 'background.paper', pb: 5 }}

        >
            <Container
                sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pt: { xs: 14, sm: 20 },
                pb: { xs: 8, sm: 12 },
                }}
            >

            </Container>
        </Box>
    )
}