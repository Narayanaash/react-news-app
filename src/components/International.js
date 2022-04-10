import { Box, Grid, Link, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchInternationalNews } from '../redux/apiCalls';
import moment from 'moment';

export default function International() {
  const internationalNews = useSelector(
    (state) => state.internationalNewsSlice.internationalNewsList
  );

  const dispatch = useDispatch();

  useEffect(() => {
    fetchInternationalNews(dispatch);
  }, []);

  return (
    <Box sx={{ mb: 4 }}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={8}>
          <Typography
            variant="h4"
            component="h4"
            sx={{ mb: 2, color: '#ed6c02' }}
          >
            International
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Link
                href={internationalNews && internationalNews[1]?.url}
                target="_blank"
                rel="noreferrer"
                color="inherit"
              >
                <Card sx={{ borderRadius: 0 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={
                        internationalNews && internationalNews[1]?.urlToImage
                      }
                      alt=""
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src =
                          'https://via.placeholder.com/400x300?text=Image+Not+Available';
                      }}
                    />
                    <CardContent>
                      <Typography variant="caption" component="p">
                        {internationalNews &&
                          moment(internationalNews[1]?.publishedAt).format(
                            'LLLL'
                          )}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="h6">
                        {internationalNews && internationalNews[1]?.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {internationalNews && internationalNews[1]?.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
            <Grid item xs={12} md={6} sx={{ mt: -2 }}>
              {internationalNews &&
                internationalNews.slice(2, 6).map((item, index) => (
                  <Box key={index}>
                    <Link
                      href={item?.url}
                      target="_blank"
                      rel="noreferrer"
                      color="inherit"
                    >
                      <Card sx={{ mt: 2, borderRadius: 0 }}>
                        <CardActionArea
                          sx={{ display: 'flex', alignItems: 'flex-start' }}
                        >
                          <CardMedia
                            component="img"
                            sx={{ height: 90, width: 108 }}
                            image={item.urlToImage}
                            alt=""
                            onError={({ currentTarget }) => {
                              currentTarget.onerror = null;
                              currentTarget.src =
                                'https://via.placeholder.com/100x108?text=Image+Not+Available';
                            }}
                          />
                          <CardContent sx={{ py: 1 }}>
                            <Typography variant="caption" component="p">
                              {moment(item.publishedAt).format('LL')}
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="subtitle1"
                              component="div"
                            >
                              {item.title}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </Link>
                  </Box>
                ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h4" component="h4">
            Trending
          </Typography>
          {internationalNews &&
            internationalNews.slice(6, 10).map((item, index) => (
              <Link
                href={item?.url}
                target="_blank"
                rel="noreferrer"
                color="inherit"
              >
                <Card sx={{ mt: 2, borderRadius: 0 }} key={index}>
                  <CardActionArea
                    sx={{ display: 'flex', alignItems: 'flex-start' }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ height: 90, width: 108 }}
                      image={item.urlToImage}
                      alt="Live from space album cover"
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src =
                          'https://via.placeholder.com/100x108?text=Image+Not+Available';
                      }}
                    />
                    <CardContent sx={{ py: 1 }}>
                      <Typography variant="caption" component="p">
                        {moment(item.publishedAt).format('LL')}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        {item.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            ))}
        </Grid>
      </Grid>
    </Box>
  );
}
