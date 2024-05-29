import { useContext, useEffect } from 'react';
import ResponsiveDrawer from '@/components/Dashboard/SideBar';
import { Grid } from '@mui/material';
import MainContent from '@/components/Dashboard/MainContent';

const Dashboard = () => {

  return (
    <div className="dashboard">
      <Grid container spacing={2}>
        <Grid item xs={2} md={4} lg={2}>
            <ResponsiveDrawer />
        </Grid>
        <Grid item xs={10} md={8} lg={10}>
            <MainContent />
        </Grid>
      </Grid>
      
      
        
    </div>
  );
};

export default Dashboard;
