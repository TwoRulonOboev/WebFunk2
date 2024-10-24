import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import cartinka1 from '../assets/review__logo.png';

interface CardData {
  imgs: string;
  title: string;
  description: string;
  fio: string;
  firms: string;
}

const cardsData: CardData[] = [
  {
    imgs: cartinka1,
    title: 'Blandit placerat eget ultrices gravida',
    description: 'Nisl id blandit pharetra sodales vel diam vitae. Aliquet pulvinar nunc nam faucibus pellentesque etiam et. Ac iaculis velit amet pulvinar iaculis purus sociis in elementum. Eu ut magna tellus ipsum nibh volutpat aliquam at. Tempor sed habitant lectus quam tristique. Condimentum tortor massa est in eu enim. Metus nullam egestas eget libero vel. Amet nulla egestas et ipsum. Amet eu ac amet non aliquam et amet. Quis a auctor ut cras suspendisse in sem elementum nisl. Eu aliquet lobortis.',
    fio:'Иванов. И. И',
    firms:'Коммерческий директор'
  },
  {
    imgs: cartinka1,
    title: 'Дистанционное обучение',
    description: 'Enim urna ac nunc consectetur sed donec. Facilisis bibendum suspendisse at pretium varius. Egestas a ultrices odio dignissim varius. Ipsum egestas nisl.',
    fio:'Иванов. А. А',
     firms:'Коммерческий директор'
  },
  {
    imgs: cartinka1,
    title: 'Лицензирование компаний',
    description: 'Urna arcu suspendisse nibh volutpat. Felis diam odio vitae sit. Eget purus sed tincidunt tortor vitae at. Vivamus adipiscing vitae laoreet sapien amet sit morbi tincidunt adipiscing. Sagittis eget.',
    fio:'Иванов. Б. Б',
    firms:'Коммерческий директор'
  },
  {
    imgs: cartinka1,
    title: 'Лицензирование компаний',
    description: 'Urna arcu suspendisse nibh volutpat. Felis diam odio vitae sit. Eget purus sed tincidunt tortor vitae at. Vivamus adipiscing vitae laoreet sapien amet sit morbi tincidunt adipiscing. Sagittis eget.',
    fio:'Иванов. В. В',
     firms:'Коммерческий директор'
  },
];

export default function FerdBlok() {
  return (
    <>
      <h1>Отзывы о нашей работе</h1>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {cardsData.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img src={card.imgs} alt={card.title} />
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <p>{card.fio}</p>
              <p>{card.firms}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
