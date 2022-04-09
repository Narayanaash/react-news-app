import { Box, Container, Grid, Link, Paper, Typography } from '@mui/material';
import Layout from '../../components/Layout';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInnerNews } from '../../redux/apiCalls';
import moment from 'moment';

export default function Inner() {
  let params = useParams();

  const innerNews = useSelector((state) => state.innerNewsSlice.innerNewsList);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchInnerNews(params.pagename, dispatch);
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
            {params.pagename}
          </Typography>
          <Grid container spacing={3}>
            {innerNews &&
              innerNews.map((item, index) => (
                <Grid item xs={4} key={index}>
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
          </Grid>
        </Box>
      </Container>
    </Layout>
  );
}
