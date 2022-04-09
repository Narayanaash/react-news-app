import { Box, Grid, Link, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchSportsNews } from '../redux/apiCalls';
import moment from 'moment';

export default function Sports() {
  const sportsNews = useSelector(
    (state) => state.sportsNewsSlice.sportsNewsList
  );

  const dispatch = useDispatch();

  useEffect(() => {
    fetchSportsNews(dispatch);
  }, []);

  return (
    <Box sx={{ mb: 5 }}>
      <Grid container spacing={2}>
        {sportsNews &&
          sportsNews.slice(0, 2).map((item, index) => (
            <Grid item xs={12} md={6}>
              <Link
                href={item?.url}
                target="_blank"
                rel="noreferrer"
                color="inherit"
              >
                <Card sx={{ borderRadius: 0 }}>
                  <CardActionArea>
                    <CardMedia component="img" image={item.urlToImage} alt="" />
                    <CardContent>
                      <Typography variant="caption" component="p">
                        {moment(item.publishedAt).format('LLLL')}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="h6">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          ))}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            {sportsNews &&
              sportsNews.slice(2, 6).map((item, index) => (
                <Grid item xs={6} key={index}>
                  <Card sx={{ borderRadius: 0 }}>
                    <CardActionArea
                      sx={{ display: 'flex', alignItems: 'flex-start' }}
                    >
                      <CardMedia
                        component="img"
                        sx={{ height: 108, width: 100 }}
                        image={item.urlToImage}
                        alt="Live from space album cover"
                      />
                      <CardContent sx={{ pt: 1 }}>
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
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
