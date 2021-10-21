import React from 'react';
import PropTypes from 'prop-types';
import start from '../../assets/svg/star.svg';
export const Card = ({hotel = {}}) => {
  return (
    <>
      <div className='card'>
        <img src={hotel.photo} alt='hotel' />

        <div className='place-description'>
          <div className='place-header'>
            <p className='host'>{hotel.superHost? 'super host' : 'host'}</p>
            <p>
              <span>{hotel.type}</span>
            </p>
            <div className='rating'>
              <img src={start} alt='' loading='lazy'/>
              <p>5</p>
            </div>
          </div>

          <div className='place-body'>
            <p>
              Hotel name: <span>{hotel.hotelName}</span>
            </p>
            <p>
              City: <span>{hotel.city}</span>
            </p>
            <p>
              Country: <span>{hotel.country}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  hotel: PropTypes.shape({
    id: PropTypes.number,
    city: PropTypes.string.isRequired,
    hotelName: PropTypes.string,
    superHost: PropTypes.bool,
    title: PropTypes.string,
    rating: PropTypes.number,
    maxGuests: PropTypes.number,
    type: PropTypes.string,
    bebs: PropTypes.number,
    coments: PropTypes.array,
  }).isRequired,
};
