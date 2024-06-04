'use client';

import * as React from 'react';
import { Avatar, Button, Grid, SxProps, Theme, alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from './Typography';
import { SignIn, useClerk } from '@clerk/nextjs';
import Link from 'next/link';

export default function CallToAction() {
    const openSignIn = () => {
       <SignIn/>
    }
    
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
                <Link href="/dashboard" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white rounded-full shadow-md group" onClick={() => openSignIn()}>
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Upload Your First Receipt</span>
                    <span className="relative invisible">Upload Your First Receipt</span>
                </Link>
            </Container>
        </Box>
    );
}

/**
<a href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
<span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Button Text</span>
<span class="relative invisible">Button Text</span>
</a>

 */
