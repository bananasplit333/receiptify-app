'use client';

import * as React from 'react';
import { Grid, Card, CardContent, Typography, Button, ButtonGroup, Box, Container } from '@mui/material';

const PricingPlans: React.FC = () => {
  const containerStyles = {
    padding: 4,
    margin: 13,
    textAlign: 'center',
    mt: 5,
    mb: 30,
  };

  const buttonGroupStyles = {
    marginTop: 2,
  };

  const cardStyles = {
    padding: 2,
    height: 300,
    textAlign: 'center',
  };

  const priceStyles = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: 2,
  };

  return (
    <Box sx={containerStyles}>
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Pricing Plans
        </Typography>
        <Typography variant="body1" gutterBottom>
          Start building for free, then add a site plan to go live. Account plans unlock additional features.
        </Typography>
        <ButtonGroup sx={buttonGroupStyles}>
          <Button variant="contained" color="primary">
            Monthly billing
          </Button>
          <Button variant="outlined" color="primary">
            Yearly billing
          </Button>
        </ButtonGroup>
        <Grid container spacing={3} paddingTop="20px"justifyContent="center">
          <Grid item xs={12} sm={12} md={4}>
            <Card sx={cardStyles}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Hobby
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Get up to 30 receipt uploads per month! Excel exporting, in-app sheet editing, and more.
                </Typography>
                <Typography sx={priceStyles}>$8/month</Typography>
                <Button variant="contained" color="primary" fullWidth>
                  Subscribe
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Card sx={cardStyles}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Freelancer
                </Typography>
                <Typography variant="body1" gutterBottom>
                  All the basics for keeping track of your bills. Unlimited uploads, stress-free management.
                </Typography>
                <Typography sx={priceStyles}>$13/month</Typography>
                <Button variant="contained" color="primary" fullWidth>
                  Subscribe
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Card sx={cardStyles}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Enterprise
                </Typography>
                <Typography variant="body1" gutterBottom>
                Tailored OCR solutions for your business, including customizable dashboards and additional features.
                </Typography>
                <Typography sx={priceStyles}>contact</Typography>
                <Button variant="contained" color="primary" fullWidth>
                  Contact
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PricingPlans;