'use client';
import { Box, Toolbar, Typography, Grid } from "@mui/material"
import DragDropComponent from "../DragDrop"
import ReactSpreadSheet from "./ExcelSection";
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
                    
                    <Box sx={{ backgroundColor: 'white', height: '100vh', overflow: 'auto' }}>
                        <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Vivamus nec massa risus. Donec sit amet nisi vel ligula iaculis facilisis. Sed tincidunt interdum orci at dignissim. Phasellus et nunc velit. Suspendisse potenti.

Integer malesuada, erat a convallis vehicula, risus libero efficitur lacus, nec vehicula urna justo at ipsum. Aliquam erat volutpat. Curabitur id mi vel eros scelerisque sollicitudin. Donec in felis ac est scelerisque fermentum. Aenean euismod felis ut nisi vestibulum, quis varius mi tincidunt. Quisque nec orci neque.

Fusce ut metus pharetra, dignissim augue vel, molestie magna. Ut nec varius augue, at convallis magna. Nam pharetra erat quis orci pretium, non fermentum justo vestibulum. Morbi vitae nibh vitae turpis cursus consectetur. Suspendisse potenti. Curabitur egestas est ut felis dapibus, sed egestas lorem sollicitudin. Mauris malesuada nulla nec erat cursus, non vestibulum mauris dictum.

Aliquam erat volutpat. Proin nec vestibulum ligula, a consectetur purus. In bibendum massa ut orci laoreet, nec cursus justo porttitor. Fusce dictum nunc a nisl euismod, eget volutpat libero tincidunt. Duis vestibulum ligula at metus dignissim, ac facilisis eros malesuada. Nam convallis quam ac urna dapibus efficitur. Suspendisse potenti.
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} md={9}>
                    
                    <Box sx={{ backgroundColor: 'white', height: '100vh', overflow: 'auto' }}>
                        <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Vivamus nec massa risus. Donec sit amet nisi vel ligula iaculis facilisis. Sed tincidunt interdum orci at dignissim. Phasellus et nunc velit. Suspendisse potenti.

Integer malesuada, erat a convallis vehicula, risus libero efficitur lacus, nec vehicula urna justo at ipsum. Aliquam erat volutpat. Curabitur id mi vel eros scelerisque sollicitudin. Donec in felis ac est scelerisque fermentum. Aenean euismod felis ut nisi vestibulum, quis varius mi tincidunt. Quisque nec orci neque.

Fusce ut metus pharetra, dignissim augue vel, molestie magna. Ut nec varius augue, at convallis magna. Nam pharetra erat quis orci pretium, non fermentum justo vestibulum. Morbi vitae nibh vitae turpis cursus consectetur. Suspendisse potenti. Curabitur egestas est ut felis dapibus, sed egestas lorem sollicitudin. Mauris malesuada nulla nec erat cursus, non vestibulum mauris dictum.

Aliquam erat volutpat. Proin nec vestibulum ligula, a consectetur purus. In bibendum massa ut orci laoreet, nec cursus justo porttitor. Fusce dictum nunc a nisl euismod, eget volutpat libero tincidunt. Duis vestibulum ligula at metus dignissim, ac facilisis eros malesuada. Nam convallis quam ac urna dapibus efficitur. Suspendisse potenti.
                        </Typography>
                        <ReactSpreadSheet />
                    </Box>
                </Grid>
            </Grid>

        </Box>
    </>)
}