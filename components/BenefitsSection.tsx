'use client';
import * as React from 'react';
import { Avatar, Grid, SxProps, Theme, alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from './Typography';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import DiscFullIcon from '@mui/icons-material/DiscFull';
import Image from 'next/image';

export default function ResponsiveBenefitsSection() {
    return (
        <Box sx={{ bgcolor: 'background.paper', pb: 5 }}>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 14, sm: 20 },
                    pb: { xs: 8, sm: 12 },
                }}
            >
                <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
                    Save Time
                </Typography>

                <Typography variant="h6" sx={{ mb: 4, textAlign: 'center' }}>
                    Automate expense tracking and focus on what matters most - growing your business.
                </Typography>

                <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                bgcolor: 'background.default',
                                textAlign: 'left',
                                pl: 10,
                                pb: 5,
                            }}
                        >
                            <AutoModeIcon fontSize="large" color="info" />
                            <Typography variant="h5" fontWeight="bold" paddingTop={'20px'}>
                                Enhance Productivity
                            </Typography>
                            <Typography variant="h6" paddingTop={'13px'}>
                                Automate your expense tracking to eliminate tedious tasks, allowing you to focus on what truly matters:
                                growing your business, maximizing productivity, and enjoying streamlined financial processes.
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                bgcolor: 'background.default',
                                textAlign: 'left',
                                pl: 10,
                                pb: 5,
                            }}
                        >
                            <AutoGraphIcon fontSize="large"  color="info"/>
                            <Typography variant="h5" fontWeight="bold" paddingTop={'20px'}>
                                Gain Insights
                            </Typography>
                            <Typography variant="h6" paddingTop={'13px'}>
                                Make data-driven decisions with accurate, categorized expense reports that help streamline your financial management.
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                bgcolor: 'background.default',
                                textAlign: 'left',
                                pl: 10,
                            }}
                        >
                            <DiscFullIcon fontSize="large"  color="info"/>
                            <Typography variant="h5" fontWeight="bold" paddingTop={'20px'}>
                                Reduce Errors
                            </Typography>
                            <Typography variant="h6" paddingTop={'13px'}>
                                Minimize errors and discrepancies with Receiptify&apos;s accurate transcription and categorization, ensuring
                                seamless financial management and providing peace of mind for your business operations.
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6} container justifyContent="center" alignItems="center">
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                            }}
                        >
                            <Image
                                className="maxWidth:100%, height: 'auto'"
                                src="/receipt_vector.jpg"
                                alt="Benefit Image"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
