import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import Layout from '../../components/Layout';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function Inner() {
  let params = useParams();

  return (
    <Layout>
      <Container maxWidth="lg">
        <Box sx={{ mt: 4, mb: 8 }}>
          <Typography
            variant="h4"
            component="h4"
            sx={{ mb: 2, color: '#ed6c02', textTransform: 'capitalize' }}
          >
            {params.pagename}
          </Typography>
          <Grid container spacing={3}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <Grid item xs={4}>
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
                        Now Is the Time to Think About Your Small Business
                        Success
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Faucibus lobortis augue condimentum maecenas. Metus at
                        in fames vitae posuere ut vel vulputate....
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
}
