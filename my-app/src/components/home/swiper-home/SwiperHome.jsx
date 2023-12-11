import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css/bundle';
import '../swiper-home/SwiperHome.scss'
import NewsListSwiper from '../../allNews/newsListSwiper/NewsListSwiper';


function MainSwiper () {
    return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={{ clickable: true }}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='first-swiper'
    >
      <SwiperSlide className='first-swiper-slide'><NewsListSwiper/></SwiperSlide>
      <SwiperSlide className='first-swiper-slide'><NewsListSwiper/></SwiperSlide>
      <SwiperSlide className='first-swiper-slide'><NewsListSwiper/></SwiperSlide>
      <SwiperSlide className='first-swiper-slide'><NewsListSwiper/></SwiperSlide>
    </Swiper>
  );
}

export default MainSwiper;