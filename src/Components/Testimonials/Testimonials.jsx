import React from 'react'
import "./testimonials.css"
import AVATAR from "../../Assets/P_20200529_133111_BF.jpg"

import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVATAR,
    name: "This Guy",
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis mollitia facere deleniti nobis adipisci ipsum rem pariatur perferendis in exercitationem delectus sapiente illo sint dolorem, voluptate dolorum cupiditate aperiam deserunt!"
  },
  {
    avatar: AVATAR,
    name: "This Guy",
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis mollitia facere deleniti nobis adipisci ipsum rem pariatur perferendis in exercitationem delectus sapiente illo sint dolorem, voluptate dolorum cupiditate aperiam deserunt!"
  },
  {
    avatar: AVATAR,
    name: "This Guy",
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis mollitia facere deleniti nobis adipisci ipsum rem pariatur perferendis in exercitationem delectus sapiente illo sint dolorem, voluptate dolorum cupiditate aperiam deserunt!"
  },
  {
    avatar: AVATAR,
    name: "This Guy",
    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis mollitia facere deleniti nobis adipisci ipsum rem pariatur perferendis in exercitationem delectus sapiente illo sint dolorem, voluptate dolorum cupiditate aperiam deserunt!"
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="testimonials__container" 
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide className='testimonial'>
              <div className="client__avatar">
                <img src={AVATAR} alt="Avatar One" />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'> {review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials