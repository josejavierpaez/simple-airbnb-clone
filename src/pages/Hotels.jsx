import React from 'react';
import {Wrapper} from '../components/wrapper/Wrapper';
import {Card} from '../components/card/Card';
import {hotels} from '../data/hotels';
export const Hotels = () => {

  return (
    <>
      <Wrapper>
        <div className='title'>
          <p>Stays in Finland</p>
        </div>
        <div className='card-container'>
          {hotels.map((hotel) => (
            <Card hotel={hotel}  key={hotel.id}/>
          ))}
        </div>
      </Wrapper>
    </>
  );
};
