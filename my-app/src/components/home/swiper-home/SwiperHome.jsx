import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, A11y} from 'swiper/modules';
import 'swiper/css/bundle';
import '../swiper-home/SwiperHome.scss'

function MainSwiper(props) {
  const news = props.news;
  const error = props.error;

  if (news) {
    const items = news.map((newsItem, index) =>
        <SwiperSlide className='first-swiper-slide'>
          <div key={index} className="newsItem" data-newsid={index} >
            <div className="link">
              <div className="img-wrapper">
                <img src={newsItem.urlToImage} alt="NewsImage"/>
              </div>
              <h2>{newsItem.title}</h2>
            </div>
          </div>
        </SwiperSlide>
    )

    return (
        <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{clickable: true}}
            pagination={{clickable: true}}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            className='first-swiper'
        >
          {items}
        </Swiper>
    );
  }
  else if (error) {
    return (
        <h2>{error}</h2>
    )
  }
}

export default MainSwiper;