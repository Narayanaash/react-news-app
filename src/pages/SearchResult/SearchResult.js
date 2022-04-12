import { Box, Container, Grid, Link, Paper, Typography } from '@mui/material';
import Layout from '../../components/Layout';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSeachedNews } from '../../redux/apiCalls';
import { startLoading } from '../../redux/newsSearchSlice';
import moment from 'moment';
import InnerSkeleton from '../../components/skeleton/InnerSkeleton';

export default function SearchResult() {
  let params = useParams();

  const { searchedNewsList, loading } = useSelector(
    (state) => state.newsSearchSlice
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoading());

    fetchSeachedNews(params.terms, dispatch);
    window.scrollTo({
      top: 0,
    });
  }, [params]);

  return (
    <Layout>
      <Container maxWidth="lg">
        <Box sx={{ mt: 4, mb: 8 }}>
          <Typography
            variant="h4"
            component="h4"
            sx={{ mb: 2, color: '#ed6c02', textTransform: 'capitalize' }}
          >
            Searh results for :&nbsp;{params.terms.split('+').join(' ')}
          </Typography>
          {loading ? (
            <Grid container spacing={3}>
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <InnerSkeleton xscol={12} mdcol={4} key={index} />
              ))}
            </Grid>
          ) : (
            <Grid container spacing={3}>
              {searchedNewsList &&
                searchedNewsList.map((item, index) => (
                  <Grid item xs={12} md={6} lg={4} key={index}>
                    <Link
                      href={item?.url}
                      target="_blank"
                      rel="noreferrer"
                      color="inherit"
                    >
                      <Card sx={{ borderRadius: 0 }}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            image={item.urlToImage}
                            alt=""
                          />
                          <CardContent>
                            <Typography variant="caption" component="p">
                              {moment(item.publishedAt).format('LLLL')}
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="h6"
                              component="h6"
                            >
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
            </Grid>
          )}
        </Box>
      </Container>
    </Layout>
  );
}
