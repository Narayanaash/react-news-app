import { Box, Button, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Social() {
  return (
    <Box sx={{ mt: 3 }}>
      <Box>
        <Typography variant="subtitle1" component="div">
          Stay Connected
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Button
          variant="contained"
          startIcon={<FacebookIcon />}
          sx={{
            mt: 2,
            borderRadius: 0,
            justifyContent: 'flex-start',
            textTransform: 'none',
          }}
        >
          Facebook
        </Button>
        <Button
          variant="contained"
          startIcon={<InstagramIcon />}
          color="error"
          sx={{
            mt: 2,
            borderRadius: 0,
            justifyContent: 'flex-start',
            textTransform: 'none',
          }}
        >
          Instagram
        </Button>
        <Button
          variant="contained"
          startIcon={<TwitterIcon />}
          color="info"
          sx={{
            mt: 2,
            borderRadius: 0,
            justifyContent: 'flex-start',
            textTransform: 'none',
          }}
        >
          Twitter
        </Button>
      </Box>
    </Box>
  );
}
