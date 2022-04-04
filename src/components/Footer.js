import { Box, Divider, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ mt: 4, textAlign: 'center' }}>
      <Divider />
      <Typography variant="caption" component="p" sx={{ py: 2 }}>
        © 2022 All rights reserved. News.
      </Typography>
    </Box>
  );
}
