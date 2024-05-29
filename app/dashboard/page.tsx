import { Grid } from '@mui/material';
import ResponsiveDrawer from '@/components/Dashboard/SideBar';
import MainContent from '@/components/Dashboard/MainContent';
import ReactSpreadSheet from '@/components/Dashboard/ExcelSection';

const Dashboard = () => {
  return (
    <div className="bg-white mx-4">
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={4} lg={2}>
          <ResponsiveDrawer />
        </Grid>
        <Grid item xs={12} md={8} lg={10}>
          <MainContent />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
