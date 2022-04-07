import { Box, Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function Politics() {
  return (
    <Box sx={{ mb: 5 }}>
      <Typography variant="h4" component="h4" sx={{ mb: 2, color: '#ed6c02' }}>
        Politics
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card sx={{ borderRadius: 0 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://i.blogs.es/e044d8/apple-studio-display-5k/840_560.jpeg"
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="caption" component="p">
                  Craig Bator - 27 Dec 2020
                </Typography>
                <Typography gutterBottom variant="h6" component="h6">
                  Now Is the Time to Think About Your Small Business Success
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus lobortis augue condimentum maecenas. Metus at in
                  fames vitae posuere ut vel vulputate....
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ borderRadius: 0 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image="https://i.blogs.es/e044d8/apple-studio-display-5k/840_560.jpeg"
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="caption" component="p">
                  Craig Bator - 27 Dec 2020
                </Typography>
                <Typography gutterBottom variant="h6" component="h6">
                  Now Is the Time to Think About Your Small Business Success
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Faucibus lobortis augue condimentum maecenas. Metus at in
                  fames vitae posuere ut vel vulputate....
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {[1, 2, 3, 4].map((item, index) => (
              <Grid item xs={6} key={index}>
                <Card sx={{ borderRadius: 0 }}>
                  <CardActionArea
                    sx={{ display: 'flex', alignItems: 'flex-start' }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ height: 100, width: 100 }}
                      image="https://i.blogs.es/e044d8/apple-studio-display-5k/840_560.jpeg"
                      alt="Live from space album cover"
                    />
                    <CardContent sx={{ flex: '1 0 auto', pt: 1 }}>
                      <Typography variant="caption" component="p">
                        27 Dec 2020
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        Now Is the Time to Think About
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
