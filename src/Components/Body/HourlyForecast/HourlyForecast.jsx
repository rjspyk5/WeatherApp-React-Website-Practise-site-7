import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Loading } from '../Loading/Loading';
import { dataCovertor } from '../../assetsAndFunction/DataConvertor';

export const HourlyForecast = ({
  weatherType,
  WeatherDetails,
  Celcius,
  Time,
}) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className='text-white my-10'>
      <h6>{weatherType} FORECAST</h6>
      <hr />
      <div>
        {WeatherDetails ? (
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition='all .5'
            transitionDuration={500}
            containerClass='carousel-container'
            removeArrowOnDeviceType={['tablet', 'mobile']}
            dotListClass='custom-dot-list-style'
            itemClass='carousel-item-padding-40-px'
          >
            {WeatherDetails.map((el, index) => {
              const converted_data = dataCovertor(el.main, Celcius);

              return (
                <div key={index}>
                  <p className='pl-[16px]'>{el.dt_txt.slice(0, 10)}</p>
                  {Time && <p className='pl-[16px]'>{Time[index]}</p>}

                  <img
                    src={`https://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`}
                    alt=''
                  />
                  <p className='pl-[35px]'>{converted_data[0].temp}</p>
                </div>
              );
            })}
          </Carousel>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};
