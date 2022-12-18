import React from 'react'
import "./testimonials.css"
import ULOGO from "../../Assets/U_Logo.png"
import DLOGO from "../../Assets/Dominion_Logo.png"
import ALOGO from "../../Assets/Amazon_Logo.jpg"

import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: ULOGO,
    name: "University of Utah Learning Assistant",
    review: "Worked as a Learning Assistant for the University of Utah's Math Department, helping undergraduate students learn Calculus."
  },
  {
    avatar: ALOGO,
    name: "Amazon/Your Neighborhood Deliveries",
    review: "Worked as a Delivery Driver for Amazon via a local Delivery Service Partner."
  },
  {
    avatar: DLOGO,
    name: "Dominion Energy/Questar Gas",
    review: "Worked as a Meter Reader, working independently in the field reading and inspecting gas meters."
  },
  {
    avatar: ULOGO,
    name: "University Neuropsychiatric Institute",
    review: "Worked as a Psychiatric Technician providing patient care by collaborating with a team of health providers."
  },
]

const Testimonials = () => {
  return (
    <section id='WorkExperience'>
      <h5>Where I've Worked</h5>
      <h2>Work Experience</h2>

      <Swiper className="work__container" 
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide className='work'>
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
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