'use client';

import * as React from 'react';
import { Avatar, Grid, SxProps, Theme, alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from './Typography';

export default function ResponsiveBenefitsSection() {
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
                <Typography variant="h4" marked="center" component="h2" sx={{mb:12}}>
                    Streamline Your Expense Tracking
                </Typography>
                <div>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" align="center">
                                Save Time
                            </Typography>
                            <Typography align="center">
                                Automate expense tracking and focus on what matters most - growing your business.
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" align="center">
                                Gain Insights
                            </Typography>
                            <Typography align="center">
                                Make data-driven decisions with accurate and categorized expense reports.
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" align="center">
                                Reduce Errors
                            </Typography>
                            <Typography align="center">
                                Minimize errors and discrepancies with Receiptify&apos;s accurate transcription and categorization.
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </Box>
    )
}
