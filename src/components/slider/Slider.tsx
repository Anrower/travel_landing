import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import JapanImg from '../../images/Japan.jpg';
import USAImg from '../../images/USA.jpg';
import SpainImg from '../../images/Spain.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import './slider.scss'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';

export default function Slider() {

  let navigationFlag = false;
  const screenWidth = window.innerWidth;
  if (screenWidth <= 520) {
    navigationFlag = true;
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      navigation={navigationFlag}
      slidesPerView={'auto'}
      centeredSlides={true}
      loop={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <div className='slide'>
          <img className='slider__image' src={JapanImg} alt='Japan' />
          <span className='slider__image-title'>Japan</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='slide'>
          <img className='slider__image' src={USAImg} alt='USA' />
          <span className='slider__image-title'>USA</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='slide'>
          <img className='slider__image' src={SpainImg} alt='Spain' />
          <span className='slider__image-title'>Spain</span>
        </div>
      </SwiperSlide>

    </Swiper>

  );
}

