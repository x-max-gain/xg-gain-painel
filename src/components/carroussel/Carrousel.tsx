'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Carrousel() {
  const containerStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    padding:"10px"
  };

  const slideStyle: React.CSSProperties = {
    textAlign: 'center',
    fontSize: '18px',
    background: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px', // Altura do slide
    borderRadius: '8px', // Adicionando bordas arredondadas para um design mais clean
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Sombra leve
  };

  return (
    <div style={containerStyle}>
      <Swiper
        slidesPerView={3} // Exibe 3 slides por vez
        spaceBetween={230} // Espaçamento entre os slides
        pagination={{ clickable: true }} // Habilita a paginação clicável
        modules={[Pagination]}
        className="mySwiper"
        freeMode={true}
        mousewheel={{ forceToAxis: true }} // Permite rolar com o mouse

      >
        <SwiperSlide>
          <iframe
            src="https://www.youtube.com/embed/cpRrxCwDBM8"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            src="https://www.youtube.com/embed/cpRrxCwDBM8"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            src="https://www.youtube.com/embed/cpRrxCwDBM8"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            src="https://www.youtube.com/embed/cpRrxCwDBM8"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            src="https://www.youtube.com/embed/cpRrxCwDBM8"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
