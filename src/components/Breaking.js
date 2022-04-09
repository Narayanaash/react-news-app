import { Box, Link, Paper } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBreakingNews } from '../redux/apiCalls';
import moment from 'moment';
import BreakingSkeleton from './skeleton/BreakingSkeleton';

export default function Breaking() {
  const breakingNews = useSelector(
    (state) => state.breakingNewsSlice.breakingNewsList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    fetchBreakingNews(dispatch);
  }, []);

  return (
    <Box>
      {breakingNews.length === 0 ? (
        <BreakingSkeleton />
      ) : (
        <Grid container spacing={2} sx={{ pt: '10px', mb: 5 }}>
          <Grid item xs={12} md={7}>
            <Paper
              square
              sx={{ color: '#fff', height: '100%', position: 'relative' }}
            >
              <img
                width="100%"
                src={breakingNews[0]?.urlToImage}
                alt=""
                style={{ height: '100%', objectFit: 'cover' }}
              />
              <Link
                href={breakingNews[0]?.url}
                target="_blank"
                rel="noreferrer"
                color="inherit"
              >
                <Box
                  className="overlayText"
                  sx={{
                    p: 3,
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    display: 'flex',
                    alignItems: 'flex-end',
                  }}
                >
                  <Box>
                    <Typography variant="caption" component="p">
                      {moment(breakingNews[0]?.publishedAt).format('LLLL')}
                    </Typography>
                    <Typography
                      variant="h4"
                      component="h4"
                      sx={{ fontWeight: '500', mt: 1 }}
                    >
                      {breakingNews[0]?.title}
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Paper
                  square
                  sx={{ color: '#fff', height: '100%', position: 'relative' }}
                >
                  <img
                    width="100%"
                    src={breakingNews[1]?.urlToImage}
                    alt=""
                    style={{
                      height: '100%',
                      minHeight: '250px',
                      objectFit: 'cover',
                    }}
                  />
                  <Link
                    href={breakingNews[1]?.url}
                    target="_blank"
                    rel="noreferrer"
                    color="inherit"
                  >
                    <Box
                      className="overlayText"
                      sx={{
                        p: 3,
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        display: 'flex',
                        alignItems: 'flex-end',
                      }}
                    >
                      <Box>
                        <Typography variant="caption" component="p">
                          {moment(breakingNews[1]?.publishedAt).format('LL')}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          component="div"
                          sx={{ fontWeight: '500', mt: 1 }}
                        >
                          {breakingNews[1]?.title}
                        </Typography>
                      </Box>
                    </Box>
                  </Link>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper
                  square
                  sx={{ color: '#fff', height: '100%', position: 'relative' }}
                >
                  <img
                    width="100%"
                    src={breakingNews[2]?.urlToImage}
                    alt=""
                    style={{
                      height: '100%',
                      minHeight: '250px',
                      objectFit: 'cover',
                    }}
                  />
                  <Link
                    href={breakingNews[2]?.url}
                    target="_blank"
                    rel="noreferrer"
                    color="inherit"
                  >
                    <Box
                      className="overlayText"
                      sx={{
                        p: 3,
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        display: 'flex',
                        alignItems: 'flex-end',
                      }}
                    >
                      <Box>
                        <Typography variant="caption" component="p">
                          {moment(breakingNews[2]?.publishedAt).format('LL')}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          component="div"
                          sx={{ fontWeight: '500', mt: 1 }}
                        >
                          {breakingNews[2]?.title}
                        </Typography>
                      </Box>
                    </Box>
                  </Link>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper
                  square
                  sx={{ color: '#fff', height: '100%', position: 'relative' }}
                >
                  <img
                    width="100%"
                    src={breakingNews[3]?.urlToImage}
                    alt=""
                    style={{
                      height: '100%',
                      maxHeight: '280px',
                      objectFit: 'cover',
                    }}
                  />
                  <Link
                    href={breakingNews[3]?.url}
                    target="_blank"
                    rel="noreferrer"
                    color="inherit"
                  >
                    <Box
                      className="overlayText"
                      sx={{
                        p: 3,
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        display: 'flex',
                        alignItems: 'flex-end',
                      }}
                    >
                      <Box>
                        <Typography variant="caption" component="p">
                          {moment(breakingNews[3]?.publishedAt).format('LLLL')}
                        </Typography>
                        <Typography
                          variant="h5"
                          component="h5"
                          sx={{ fontWeight: '500', mt: 1 }}
                        >
                          {breakingNews[3]?.title}
                        </Typography>
                      </Box>
                    </Box>
                  </Link>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}
