import { Box, Button, Typography } from '@mui/material';

export default function Newsletter() {
  return (
    <Box
      sx={{ p: '35px 25px', textAlign: 'center', backgroundColor: '#DEDADA' }}
    >
      <Typography variant="h6" component="h6">
        Get Latest Updates
      </Typography>
      <Box sx={{ m: '25px 0 15px' }}>
        <input
          style={{ textAlign: 'center', height: 40, border: 0, width: '100%' }}
          type="text"
          placeholder="Your email address"
        />
      </Box>
      <Button
        variant="contained"
        color="warning"
        sx={{ borderRadius: 0, width: '100%' }}
      >
        Subscribe
      </Button>
    </Box>
  );
}
