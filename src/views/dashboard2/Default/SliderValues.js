import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Typography, IconButton } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const CarouselWithArrowsAndTypography = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1
    }
  };

  const carouselItems = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' }
    // Add more items as needed
  ];

  return (
    <Carousel
      responsive={responsive}
      arrows={true}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <IconButton
            onClick={onClickHandler}
            aria-label={label}
            style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}
          >
            <KeyboardArrowLeft />
          </IconButton>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <IconButton
            onClick={onClickHandler}
            aria-label={label}
            style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}
          >
            <KeyboardArrowRight />
          </IconButton>
        )
      }
    >
      {carouselItems.map((item) => (
        <div key={item.id}>
          <Typography variant="h6">{item.title}</Typography>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselWithArrowsAndTypography;
