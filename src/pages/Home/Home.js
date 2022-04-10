import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import Layout from '../../components/Layout';
import Slider from '../../components/Slider';
import Breaking from '../../components/Breaking';
import Entertainment from '../../components/International';
import Newsletter from '../../components/Newsletter';
import Social from '../../components/Social';
import Sports from '../../components/Sports';
import Business from '../../components/Business';
import Politics from '../../components/Politics';
import Gadgets from '../../components/Gadgets';

export default function Home() {
  return (
    <Layout>
      <Container maxWidth="lg">
        <Breaking />
        <Entertainment />
        <Slider />
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              component="h4"
              sx={{ mb: -3, color: '#ed6c02' }}
            >
              Sports
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Sports />
            <Business />
            <Politics />
            <Gadgets />
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              position: { xs: 'static', md: 'sticky' },
              top: 20,
              height: { xs: 'auto', md: '100vh' },
            }}
          >
            <Newsletter />
            <Social />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
