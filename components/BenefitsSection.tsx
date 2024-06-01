'use client';

import * as React from 'react';
import { Avatar, Grid, SxProps, Theme, alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from './Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import InsightsIcon from '@mui/icons-material/Insights';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

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
                <Typography variant="h4" marked="center" component="h2" sx={{ mb: 12 }}>
                    Streamline Your Expense Tracking
                </Typography>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                bgcolor: 'background.default',
                                boxShadow: 3,
                                borderRadius: 2,
                                p: 4,
                                textAlign: 'center',
                            }}
                        >
                            <AccessTimeIcon sx={{ fontSize: 40, mb: 2, color: 'primary.main' }} />
                            <Typography variant="h6" fontWeight="bold">
                                Save Time
                            </Typography>
                            <Typography>
                                Automate expense tracking and focus on what matters most - growing your business.
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                bgcolor: 'background.default',
                                boxShadow: 3,
                                borderRadius: 2,
                                p: 4,
                                textAlign: 'center',
                            }}
                        >
                            <InsightsIcon sx={{ fontSize: 40, mb: 2, color: 'primary.main' }} />
                            <Typography variant="h6" fontWeight="bold">
                                Gain Insights
                            </Typography>
                            <Typography>
                                Make data-driven decisions with accurate and categorized expense reports.
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                bgcolor: 'background.default',
                                boxShadow: 3,
                                borderRadius: 2,
                                p: 4,
                                textAlign: 'center',
                            }}
                        >
                            <ErrorOutlineIcon sx={{ fontSize: 40, mb: 2, color: 'primary.main' }} />
                            <Typography variant="h6" fontWeight="bold">
                                Reduce Errors
                            </Typography>
                            <Typography>
                                Minimize errors and discrepancies with Receiptify&apos;s accurate transcription and categorization.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
