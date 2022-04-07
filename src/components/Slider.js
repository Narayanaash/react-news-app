import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box, Link, Paper, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEntertainmentNews } from '../redux/apiCalls';

export default function Slider() {
  const entertainmentNews = useSelector(
    (state) => state.entertainmentNewsSlice.entertainmentNewsList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    fetchEntertainmentNews(dispatch);
  }, []);

  return (
    <Box sx={{ mb: 5 }}>
      <Typography variant="h4" component="h4" sx={{ mb: 2, color: '#ed6c02' }}>
        Entertainment
      </Typography>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        slidesPerView={1}
        navigation
        autoplay
        pagination={{ clickable: true }}
      >
        {entertainmentNews.map((item, index) => (
          <SwiperSlide key={index}>
            <Paper square sx={{ color: '#fff', position: 'relative' }}>
              <img
                width="100%"
                src={item?.urlToImage}
                alt=""
                style={{
                  height: '100%',
                  maxHeight: '450px',
                  objectFit: 'cover',
                }}
              />
              <Link
                href={item?.url}
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
                    <Typography
                      variant="h5"
                      component="h5"
                      sx={{ fontWeight: '500', mb: 2, maxWidth: '65ch' }}
                    >
                      {item?.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      sx={{ maxWidth: '480px', pb: 4 }}
                    >
                      {item?.description}
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Paper>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
