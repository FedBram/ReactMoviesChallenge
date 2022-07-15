import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { MovieContext } from '../movieContext/movieContext';

const StarFilter = () => {

    const [activeStar, setActiveStar] = useState(-1);
    const totalStars = 5;

    const {filterByRating, setActiveFilter} = useContext(MovieContext)

    const handleClick = (index) => {
        if(index === activeStar){
            setActiveStar(-1)
            filterByRating(-1)
            setActiveFilter(false)
        }else{
            let param = (index * 2) + 1
            setActiveStar(index);
            setActiveFilter(true)
            filterByRating((index + 1) * 2, param);
        };
    };

    return (
      <Box
        sx={{
          display: 'inline-flex',
          position: 'relative',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        {[...new Array(totalStars)].map((arr, index) => {
          return (
            <Box
              key = {index}
              position="relative"
              sx={{
                cursor: 'pointer',
              }}
              onClick={() => handleClick(index)}
            >
              <Box
                sx={{
                  width: index <= activeStar ? '100%' : '0%',
                  overflow: 'hidden',
                  position: 'absolute',
                }}
              >
                <StarIcon/>                
              </Box>
              <Box>
                <StarBorderIcon/>
              </Box>
            </Box>
          );
        })}
      </Box>
    );
};


export default StarFilter