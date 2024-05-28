'use client';

import * as React from 'react';
import { Avatar, Grid, SxProps, Theme, alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from './Typography';

const item: SxProps<Theme> = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    px: 5,
  };
  
  const number = {
    fontSize: 24,
    fontFamily: 'default',
    color: 'secondary.main',
    fontWeight: 'medium',
  };
  
  const image = {
    height: 75,
    my: 4,
  };
  
export default function HowTo() {
    return (
        <Box
            component="section"
            sx={(theme) => ({
                width: '100%',
                backgroundColor:
                  theme.palette.mode === 'light'
                    ? '#ffffff'
                    : '#02294F',
                backgroundSize: '100% 20%',
                
                backgroundRepeat: 'no-repeat',
            })}
        >
            <Container
                sx={{
                mt: 10,
                mb: 15,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <Typography variant="h4" marked="center" component="h2" sx={{mb:14}}>
                    How it works
                </Typography>
                <div>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <Box sx={number}>1.</Box>
                                <Avatar sx={{mb:3, height:55, width:55, bgcolor:'#e3f2fd'}} alt="ss icon" src="/ss_icon.svg" />
                                <Typography variant="h6" align="center">
                                    Upload your receipt onto Receiptify.
                                </Typography>
                            </Box>
                            
                        </Grid>
                        
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <Box sx={number}>2.</Box>
                                <Avatar sx={{mb:3, height:55, width:55, bgcolor:'#e3f2fd'}} alt="ss icon" src="/scan_icon.svg" />
                                <Typography variant="h6" align="center">
                                    Receiptify&apos;s OCR extracts and organizes relevant data.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <Box sx={number}>3.</Box>
                                <Avatar sx={{mb:3, height:55, width:55, bgcolor:'#e3f2fd'}} alt="ss icon" src="/manage_icon.svg" />
                                    <Typography variant="h6" align="center">
                                        View, manage, and export your budget from your dashboard.
                                    </Typography>                            
                            </Box>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </Box>
    );
}