"use client";
// Import Swiper styles
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import "swiper/css";
import "swiper/css/navigation";
// Import modules (if needed, e.g., Pagination, Navigation)
import person from "@/public/images/person-1.png";
import { Review } from "@/types/review_type";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../commonts/sectionTitel";

interface Props {
  reviews: Review[];
}

export default function Testimonial({ reviews }: Props) {
  return (
    <section>
      <div className="py-20 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div className="flex justify-center items-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 max-w-sm sm:max-w-2xl lg:max-w-full mx-auto relative">
            <div className="w-full lg:w-2/5">
              <SectionTitle title="Testimonial" className="text-start" />
              <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-8">
                36k+ Customers gave their{" "}
                <span className=" text-transparent bg-clip-text bg-gradient-to-tr from-orange-600 to-orange-500">
                  Feedback
                </span>
              </h2>
            </div>

            <div className="w-full lg:w-3/5 flex gap-2 relative ">
              <Swiper
                // Install modules
                modules={[Navigation]}
                navigation={{
                  nextEl: ".swiper-button-prev",
                  prevEl: ".swiper-button-next",
                }}
                slidesPerView={2}
                spaceBetween={30}
                loop={true}
                pagination={false}
                className="reviewsSwiper"
              >
                {reviews.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className=" group bg-white border border-solid border-gray-300 rounded-2xl max-sm:max-w-sm max-sm:mx-auto p-6 transition-all duration-500 hover:border-orange-400">
                      <div className="flex justify-between">
                        <div className="flex min-w-12 min-h-12   items-center gap-5 mb-3 sm:mb-3">
                          <div>
                            <Image
                              className="review-avatar rounded-full  object-cover "
                              src={person}
                              alt="avatar"
                              width={48}
                              height={48}
                            />
                          </div>
                          <div className="grid gap-1">
                            <h5 className="text-gray-900 font-medium transition-all duration-500  ">
                              {item.user_name}
                            </h5>
                            <span className="text-sm leading-6 text-gray-500">
                              {item.founders}
                            </span>
                          </div>
                        </div>
                        <div className="flex  h-7 px-2 py-2  items-center  gap-2 text-amber-500 transition-all duration-500  bg-slate-300  text-left rounded-md">
                          <FaStar />
                          <span className="text-blue-800 font-semibold  ">
                            {item.comment.review_star}
                          </span>
                        </div>
                      </div>
                      <p className="text-base text-gray-500 leading-6 transition-all duration-500 min-h-24  group-hover:text-gray-800">
                        {item.comment.comment_details}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
                <button className="swiper-button-prev ">
                  <SlArrowLeft />
                </button>
                <button className="swiper-button-next ">
                  <SlArrowRight />
                </button>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
