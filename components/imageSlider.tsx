'use client';

import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import {Navigation, Pagination, Autoplay} from 'swiper'


const ImageSlider = () => {
    const images = [
        "/img/jit-and-scim-provisioning.png",
        "/img/multiple-idp-support.png"
    ]

     return(
        <Swiper 
            modules = {[Navigation, Pagination, Autoplay]}
            navigation
             pagination={{clickable: true}}
            autoplay={{delay: 3000}}
            loop={true}
             style={{width: "100%", height: "400px"}}   
         >
            {images.map((image, index) => (
         <SwiperSlide key={index}>
             <img 
                src={image}
                alt={`Slide ${index+1}`}
                style={{width: "100%", height: "100%", objectFit: "cover"}}
             />
        </SwiperSlide>
        ))}
        </Swiper>
    )
}

export default ImageSlider;