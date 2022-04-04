import { Box, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Breaking() {
  return (
    <Grid container spacing={2} sx={{ pt: '10px', mb: 5 }}>
      <Grid item xs={7}>
        <Paper
          square
          sx={{ color: '#fff', height: '100%', position: 'relative' }}
        >
          <img
            width="100%"
            src="https://i.blogs.es/e044d8/apple-studio-display-5k/840_560.jpeg"
            alt=""
            style={{ height: '100%', objectFit: 'cover' }}
          />
          <Box
            className="overlayText"
            sx={{
              p: 3,
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              display: 'flex',
              alignItems: 'flex-end',
            }}
          >
            <Box>
              <Typography variant="caption" component="p">
                Craig Bator - 27 Dec 2020
              </Typography>
              <Typography
                variant="h4"
                component="h4"
                sx={{ fontWeight: '500', mt: 1 }}
              >
                What's the Matter? We Explain the New Smart Home Standard
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={5}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper
              square
              sx={{ color: '#fff', height: '100%', position: 'relative' }}
            >
              <img
                width="100%"
                src="https://i.blogs.es/e044d8/apple-studio-display-5k/840_560.jpeg"
                alt=""
                style={{
                  height: '100%',
                  minHeight: '250px',
                  objectFit: 'cover',
                }}
              />
              <Box
                className="overlayText"
                sx={{
                  p: 3,
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  display: 'flex',
                  alignItems: 'flex-end',
                }}
              >
                <Box>
                  <Typography variant="caption" component="p">
                    Craig Bator - 27 Dec 2020
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ fontWeight: '500', mt: 1 }}
                  >
                    What's the Matter? We Explain the New Smart Home Standard
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper
              square
              sx={{ color: '#fff', height: '100%', position: 'relative' }}
            >
              <img
                width="100%"
                src="https://i.blogs.es/e044d8/apple-studio-display-5k/840_560.jpeg"
                alt=""
                style={{
                  height: '100%',
                  minHeight: '250px',
                  objectFit: 'cover',
                }}
              />
              <Box
                className="overlayText"
                sx={{
                  p: 3,
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  display: 'flex',
                  alignItems: 'flex-end',
                }}
              >
                <Box>
                  <Typography variant="caption" component="p">
                    Craig Bator - 27 Dec 2020
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    sx={{ fontWeight: '500', mt: 1 }}
                  >
                    What's the Matter? We Explain the New Smart Home Standard
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper
              square
              sx={{ color: '#fff', height: '100%', position: 'relative' }}
            >
              <img
                width="100%"
                src="https://i.blogs.es/e044d8/apple-studio-display-5k/840_560.jpeg"
                alt=""
                style={{
                  height: '100%',
                  minHeight: '250px',
                  objectFit: 'cover',
                }}
              />
              <Box
                className="overlayText"
                sx={{
                  p: 3,
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  display: 'flex',
                  alignItems: 'flex-end',
                }}
              >
                <Box>
                  <Typography variant="caption" component="p">
                    Craig Bator - 27 Dec 2020
                  </Typography>
                  <Typography
                    variant="h5"
                    component="h5"
                    sx={{ fontWeight: '500', mt: 1 }}
                  >
                    What's the Matter? We Explain the New Smart Home Standard
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
