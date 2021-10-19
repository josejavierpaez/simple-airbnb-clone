import React from 'react';
import hotel from '../../assets/img/hotel.png';
import start from '../../assets/svg/star.svg';
export const Card = () => {
  return (
    <>
      <div className='card'>
        <img src={hotel} alt='hotel' />

        <div className='place-description'>
          <div className='place-header'>
            <p className='host'>super host</p>
            <p>
              <span>Entire House</span>
            </p>
            <div className='rating'>
              <img src={start} alt='' />
              <p>5</p>
            </div>
          </div>

          <div className='place-body'>
            <p>
              Hotel name: <span>Hotel Salinas</span>
            </p>
            <p>
              City: <spand>Bani</spand>
            </p>
            <p>
              Country: <span>Republica Dominicana</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
