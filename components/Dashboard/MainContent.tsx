'use client';
import { Box, Toolbar, Typography, Grid } from "@mui/material"
import DragDropComponent from "../DragDrop"

const drawerWidth = '180'

export default function MainContent(){
    return(<>
        <Box sx={{width: {sm: 'auto'}}}>
            <Toolbar />
            <Grid container spacing={4}>
                <Grid item xs={0} md={3}>
                    <Box sx={{height: 'auto'}}>
                        <DragDropComponent />
                    </Box>
                    
                    <Box sx={{ backgroundColor: 'white', height: '100vh' }}>
                        <Typography paragraph>
                        penis penis penis penis penis, penis penis penis penis penis penis
                        penis penis penis penis penis penis penis penis.
                        penis penis penis penis penis penis penis penis
                        penis penis penis penis. penis penis penis penis
                        penis penis penis penis penis penis penis penis.
                        penis penis penis penis peanis penis penis penis penis penis.
                        penis penis penis penis penis penis penis penis.
                        penis penis penis penis penis penis penis penis penis penis
                        penis penis penis penis penis penis penis penis
                        penis penis. penis penis penis penis penis penis penis penis
                        penis. penis penis penis penis penis penis penis penis
                        penis penis penis. penis penis penis penis penis penis penis penis penis penis.
                        penis penis penis penis penis penis penis penis. penis penis penis penis penis
                        penis penis penis penis penis penis penis. penis penis penis penis penis penis
                        penis penis penis penis penis penis.
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} md={9}>
                    <Box sx={{ backgroundColor: 'white', height: '100vh' }}>
                        <Typography paragraph>
                        penis penis penis penis penis, penis penis penis penis penis penis
                        penis penis penis penis penis penis penis penis.
                        penis penis penis penis penis penis penis penis
                        penis penis penis penis. penis penis penis penis
                        penis penis penis penis penis penis penis penis.
                        penis penis penis penis peanis penis penis penis penis penis.
                        penis penis penis penis penis penis penis penis.
                        penis penis penis penis penis penis penis penis penis penis
                        penis penis penis penis penis penis penis penis
                        penis penis. penis penis penis penis penis penis penis penis
                        penis. penis penis penis penis penis penis penis penis
                        penis penis penis. penis penis penis penis penis penis penis penis penis penis.
                        penis penis penis penis penis penis penis penis. penis penis penis penis penis
                        penis penis penis penis penis penis penis. penis penis penis penis penis penis
                        penis penis penis penis penis penis.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

        </Box>
    </>)
}