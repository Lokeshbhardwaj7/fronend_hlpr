import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import SearchIcon from '@mui/icons-material/Search';
// import HomeImage from './home.jpg'

const backgroundImage = 'https://care-job.vercel.app/_next/static/media/01.9a03b3fb.jpg';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center'
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography
        color="inherit"
        align="center"
        variant="h2"
        marked="center"
        sx={{ mt: 16, textTransform: 'none', fontFamily: 'cursive' }}
      >
        Search, Find and Apply!
      </Typography>
      <Typography color="inherit" align="center" variant="h5" sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}>
        Welcome to HLPR! <br /> This is your one-stop shop for temporary employment! Click the search button below to see available jobs!
      </Typography>
      <Button color="secondary" variant="contained" size="large" component="a" href="/login" sx={{ minWidth: 200 }}>
        <SearchIcon />
        Search
      </Button>
    </ProductHeroLayout>
  );
}
