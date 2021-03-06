import {
  Avatar,
  CircularProgress,
  Grid,
  Paper,
  Rating,
  Stack,
} from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import reviewImg from '../../../../assets/Images/BannerImg/review.jpg';
import { fetchAllReviews } from '../../../../redux/slices/review/reviewSlice';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Reviews = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const reviews = useSelector((state) => state.reviews.reviews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllReviews());
  }, []);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  if (reviews.length === 0) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography sx={{ display: 'none' }}>loading</Typography>
        <CircularProgress color="secondary" />
      </Box>
    );
  }

  return (
    <Box sx={{ m: 3 }}>
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
        Happy Customer Says
      </Typography>
      <Grid
        container
        sx={{ justifyContent: 'space-evenly', alignItems: 'center', my: 3 }}
      >
        <Grid item xs={12} md={6}>
          <img src={reviewImg} alt="reviews" style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12} md={6} sx={{ mt: { xs: 3, md: 0 } }}>
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {reviews.map((review, index) => (
              <Paper
                key={review._id}
                sx={{ p: { lg: 8, sm: 5 }, border: '1px solid hotpink', m: 1 }}
              >
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box key={review._id}>
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      justifyContent="space-evenly"
                    >
                      <Avatar
                        alt={review.name}
                        src={review.image}
                        sx={{ width: 72, height: 72 }}
                      />
                      <Stack spacing={2} alignItems="center">
                        <Typography variant="h5">{review.name}</Typography>
                        <Rating
                          name="read-only"
                          value={parseInt(review.rating)}
                          readOnly
                        />
                        <Typography
                          variant="subtitle2"
                          sx={{ mb: 3, textAlign: 'center', maxWidth: 400 }}
                        >
                          {review.message}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                ) : null}
              </Paper>
            ))}
          </AutoPlaySwipeableViews>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Reviews;
