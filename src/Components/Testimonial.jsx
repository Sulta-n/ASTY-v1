import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { testimonialInfo } from "../lib/info";
import StarRating from "./StarRating";

const Testimonial = () => {
  return (
    <section className="bg-background   mx-auto w-full text-white py-3.5">
      <div className="max-w-[85rem]  w-full h-full mx-auto px-7 py-12">
        <h1 className="text-primary text-center md:text-3xl lg:text-4xl font-extrabold tracking-wider">
          {" "}
          VERIFIED TESTIMONIALS
        </h1>

        <div className="w-[35%] h-1 bg-primary mx-auto my-4 rounded-full" />

        {/* Swipper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="max-w-[45rem] mx-auto my-11 [&_.swiper-pagination-bullet-active]:bg-primary"
          aria-label="Client testimonials carousel"
        >
          {testimonialInfo.map((testimonial, i) => (
            <SwiperSlide className="bg-white/10  rounded-lg px-2 py-3 " key={i}>
              <div className="flex flex-col gap-y-4 items-start justify-center px-7 h-full md:h-[20rem] lg:h-[22rem]">
                <div className="flex gap-x-8 items-center  w-full">
                  <img
                    src={testimonial.img}
                    alt={`Photo of ${testimonial.name}`}
                    className="h-16 rounded-full w-16 object-cover object-center"
                  />
                  <div className=" flex flex-col gap-y-1">
                    <h5 className="text-primary text-[1.5rem] font-bold tracking-wide">
                      {testimonial.name}
                    </h5>
                    <div>
                      <p className="text-sm font-semibold tracking-wider">
                        {testimonial.home}
                      </p>
                      <div>
                        <StarRating rating={testimonial.star} />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="w-full text-left text-[1rem] md:text-[1.2rem] lg:text-[1.3rem] tracking-wide">
                  {testimonial.text}
                </p>
                <p className="text-white/40 tracking-tight">
                  {testimonial.date}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
