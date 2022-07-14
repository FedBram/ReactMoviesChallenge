import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { MovieContext } from '../movieContext/movieContext';

const StarFilter = () => {

    const [activeStar, setActiveStar] = useState(-1);
    const totalStars = 5;

    const {filterByRating, getMoviesPopular, filteredMovies} = useContext(MovieContext)

    const handleClick = (index) => {
        if(index === activeStar){
            setActiveStar(-1)
            // filterByRating(-1)
            getMoviesPopular()
        }else{
            if(filteredMovies.length !== 0){
                let param = (index * 2) + 1
                setActiveStar(index);
                filterByRating((index + 1) * 2, param);
                return (
                    <p>No hay peliculas para mostrar</p>
                )
            }else{
                let param = (index * 2) + 1
                setActiveStar(index);
                filterByRating((index + 1) * 2, param);
            }
            let param = (index * 2) + 1
            setActiveStar(index);
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
            <>
            <Box
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
                <StarIcon />                
              </Box>
              <Box>
                <StarBorderIcon />
              </Box>
            </Box>
            </>
          );
        })}
      </Box>
    );
};


export default StarFilter