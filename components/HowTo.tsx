'use client';

import * as React from 'react';
import { Avatar, Grid, SxProps, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from './Typography';

const item: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 4,
    py: 5,
    bgcolor: 'background.paper',
    boxShadow: 1,
    borderRadius: 2,
    textAlign: 'center',
    height: '100%', // Ensure all boxes are of equal height
};

const badge: SxProps<Theme> = {
    fontSize: 12,
    fontWeight: 'bold',
    py: 1,
    px: 2,
    borderRadius: 1,
    mb: 2,
};

const title = {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'text.primary',
};

const description = {
    fontSize: 14,
    color: 'text.secondary',
};

export default function HowTo() {
    return (
        <Box
            component="section"
            sx={(theme) => ({
                width: '100%',
                backgroundColor: theme.palette.background.default,
                py: 10,
            })}
        >
            <Container
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h4" marked="center" component="h2" sx={{ mb: 10 }}>
                    How it works
                </Typography>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <Box sx={{ ...badge, bgcolor: 'primary.light'}}>Upload</Box>
                            <Typography className="pb-4" sx={title}>Upload Seamlessly</Typography>
                            <Typography variant="body1" sx={description}>
                                Receiptify allows you to seamlessly upload your receipts, and saves you time so you can focus on the bigger tasks. 
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <Box sx={{ ...badge, bgcolor: 'secondary.light' }}>Extraction</Box>
                            <Typography className="pb-4" sx={title}>Organize faster</Typography>
                            <Typography sx={description}>
                                Utilizing OCR processing and AI, Receiptify handles the uploading, organizing, and categorizing of your expenses into a handy excel-style sheet.
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <Box sx={{ ...badge, bgcolor: 'warning.light' }}>Visual Editor</Box>
                            <Typography className="pb-4" sx={title}>Click, edit, publish</Typography>
                            <Typography sx={description}>
                                Edit your sheets on the web, and publish it to the world. Receiptify allows for you to export and share your sheets with ease.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
