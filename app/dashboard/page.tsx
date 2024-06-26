'use client';

import { Grid } from '@mui/material';
import ResponsiveDrawer from '@/components/Dashboard/SideBar';
import MainContent from '@/components/Dashboard/MainContent';
import { RedirectToSignIn } from '@clerk/clerk-react';
import { useUser } from '@clerk/nextjs';

const Dashboard = () => {
  const {isSignedIn} = useUser();

  if (!isSignedIn){
    return <RedirectToSignIn />
  }
  return (
    <div className="bg-white">
      <Grid container spacing={0}>
        <Grid item xs={12} lg={2}>
          <ResponsiveDrawer />
        </Grid>
        <Grid item xs={12} lg={10}>
          <MainContent />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard; 

