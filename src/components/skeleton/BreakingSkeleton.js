import { Box, Grid, Skeleton } from '@mui/material';

export default function BreakingSkeleton() {
  return (
    <>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        <Grid container spacing={2} sx={{ pt: '10px', mb: 5 }}>
          <Grid item xs={7}>
            <Skeleton variant="rectangular" width={'100%'} height={'38vw'} />
          </Grid>
          <Grid item xs={5}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Skeleton
                  variant="rectangular"
                  width={'100%'}
                  height={'20vw'}
                />
              </Grid>
              <Grid item xs={6}>
                <Skeleton
                  variant="rectangular"
                  width={'100%'}
                  height={'20vw'}
                />
              </Grid>
              <Grid item xs={12}>
                <Skeleton
                  variant="rectangular"
                  width={'100%'}
                  height={'16.78vw'}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Skeleton />
      </Box>
    </>
  );
}
