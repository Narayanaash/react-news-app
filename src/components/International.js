import { Box, Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function International() {
  return (
    <Box sx={{ mb: 4 }}>
      <Grid container spacing={5}>
        <Grid item xs={8}>
          <Typography
            variant="h4"
            component="h4"
            sx={{ mb: 2, color: '#ed6c02' }}
          >
            International
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
            <Grid item xs={6} sx={{ mt: -2 }}>
              {[1, 2, 3, 4].map((item) => (
                <Box>
                  <Card sx={{ mt: 2, borderRadius: 0 }}>
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
                          component="subtitle1"
                        >
                          Now Is the Time to Think About
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Box>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h4" component="h4">
            Trending
          </Typography>
          {[1, 2, 3, 4].map((item) => (
            <Card sx={{ mt: 2, borderRadius: 0 }}>
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
                    component="subtitle1"
                  >
                    Now Is the Time to Think About
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
