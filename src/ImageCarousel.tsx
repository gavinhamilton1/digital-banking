import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination } from 'swiper/modules';

const ImageCarousel: React.FC = () => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 3000 }}
      effect="fade"
    >
      <SwiperSlide>
        <img src="splash1.png" width="400" height="321" alt="Image 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="splash2.png"  width="400" height="321" alt="Image 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="splash3.png"  width="400" height="321" alt="Image 3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImageCarousel;
