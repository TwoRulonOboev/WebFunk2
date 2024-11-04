import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import styles from './ReviewSection.module.css';
import cartinka1 from '../../assets/review__logo.png';

const cardsData = [
  {
    imgs: cartinka1,
    title: 'Blandit placerat eget ultrices gravida',
    description: 'Nisl id blandit pharetra sodales vel diam vitae. Aliquet pulvinar nunc nam faucibus pellentesque etiam et. Ac iaculis velit amet pulvinar iaculis purus sociis in elementum. Eu ut magna tellus ipsum nibh volutpat aliquam at. Tempor sed habitant lectus quam tristique. Condimentum tortor massa est in eu enim. Metus nullam egestas eget libero vel. Amet nulla egestas et ipsum. Amet eu ac amet non aliquam et amet. Quis a auctor ut cras suspendisse in sem elementum nisl. Eu aliquet lobortis.',
    fio: 'Иванов. И. И',
    firms: 'Коммерческий директор'
  },
  {
    imgs: cartinka1,
    title: 'Дистанционное обучение',
    description: 'Enim urna ac nunc consectetur sed donec. Facilisis bibendum suspendisse at pretium varius. Egestas a ultrices odio dignissim varius. Ipsum egestas nisl.',
    fio: 'Иванов. А. А',
    firms: 'Коммерческий директор'
  },
  {
    imgs: cartinka1,
    title: 'Лицензирование компаний',
    description: 'Urna arcu suspendisse nibh volutpat. Felis diam odio vitae sit. Eget purus sed tincidunt tortor vitae at. Vivamus adipiscing vitae laoreet sapien amet sit morbi tincidunt adipiscing. Sagittis eget.',
    fio: 'Иванов. Б. Б',
    firms: 'Коммерческий директор'
  },
  {
    imgs: cartinka1,
    title: 'Лицензирование компаний',
    description: 'Urna arcu suspendisse nibh volutpat. Felis diam odio vitae sit. Eget purus sed tincidunt tortor vitae at. Vivamus adipiscing vitae laoreet sapien amet sit morbi tincidunt adipiscing. Sagittis eget.',
    fio: 'Иванов. В. В',
    firms: 'Коммерческий директор'
  }
];

const ReviewSection = () => {
  return (
    <div className={styles.container}>
      <h1>Отзывы о нашей работе</h1>
      <Swiper 
        effect="coverflow" 
        grabCursor 
        centeredSlides 
        slidesPerView="auto"
        coverflowEffect={{ rotate: 50, depth: 100, slideShadows: true }}
        pagination 
        modules={[EffectCoverflow, Pagination]}
        className={styles.swiper} // Обратите внимание на класс стилей
      >
        {cardsData.map((card, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.slideContent}>
              <img src={card.imgs} alt={card.title} />
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <p className={styles.fio}>{card.fio}</p>
              <p className={styles.firms}>{card.firms}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewSection;
