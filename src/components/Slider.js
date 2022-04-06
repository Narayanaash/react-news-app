import { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box, Paper, Typography } from '@mui/material';

export default function Slider() {
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
        {[1, 2, 3, 4].map((item) => (
          <SwiperSlide>
            <Paper square sx={{ color: '#fff', position: 'relative' }}>
              <img
                width="100%"
                src="https://i.blogs.es/e044d8/apple-studio-display-5k/840_560.jpeg"
                alt=""
                style={{
                  height: '100%',
                  maxHeight: '450px',
                  objectFit: 'cover',
                }}
              />
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
                    sx={{ fontWeight: '500', mb: 2, maxWidth: 'initial' }}
                  >
                    What's the Matter? We Explain the New Smart Home Standard
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{ maxWidth: '480px', pb: 4 }}
                  >
                    Hollywood actress Amanda Seyfried has recalled the time when
                    she became obsessed with ghost stories
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
