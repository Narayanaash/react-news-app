import { Grid, Skeleton } from '@mui/material';

export default function BreakingSkeleton({ xscol = 12, mdcol = 4 }) {
  return (
    <Grid item xs={xscol} md={mdcol}>
      <Skeleton variant="rectangular" width={'100%'} height={'250px'} />
      <Skeleton width="60%" sx={{ mt: 1 }} />
      <Skeleton />
      <Skeleton />
    </Grid>
  );
}
