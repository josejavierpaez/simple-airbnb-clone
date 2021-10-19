import React from 'react';
import {Wrapper} from '../components/wrapper/Wrapper';
import {Card} from '../components/card/Card';
import {NavBar} from '../components/navbar/NavBar';
export const Hotels = () => {
  return (
    <>
      <Wrapper>
        <NavBar />
        <div className='title'>
          <p>Stays in Finland</p>
        </div>
        <div className='card-container'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
            <Card />
          ))}
        </div>
      </Wrapper>
    </>
  );
};
