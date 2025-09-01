"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import modules (if needed, e.g., Pagination, Navigation)
import { reviewDynamicCount } from "@/helps/help";
import { CategoryType } from "@/types/category_type";
import { Review } from "@/types/review_type";
import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { HiOutlineClock } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { Navigation, Pagination } from "swiper/modules";

interface Props {
  categories: CategoryType[];
  reviews: Review[];
}
function CardSider({ categories, reviews }: Props) {
  const { totalReviews, averageRating } = reviewDynamicCount(reviews);
  return (
    <Swiper
      // Install modules
      modules={[Pagination, Navigation]}
      slidesPerView={3} // Display 3 slides per view
      spaceBetween={30} // Space between slides
      loop={true} // Enable infinite loop
      pagination={{ clickable: true }} // Add clickable pagination
      navigation={true} // Add navigation arrows
      className="cardSwiper " // Optional: for custom styling
    >
      {categories.map((item) => (
        <SwiperSlide key={item.id}>
          <div
            className="bg-white rounded-lg shadow-md overflow-hidden  w-full mx-3 mb-4"
            key={item.id}
          >
            <div className="relative ">
              <Image
                src={`${item.thumbnail}`}
                alt="Product image"
                className="w-full h-64 "
                width={400}
                height={300}
              />
              <span className="absolute top-2 left-2 bg-green-500 text-white text-base font-bold px-2 py-1 rounded">
                40%
              </span>
              <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200">
                <IoMdHeartEmpty />
              </button>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div className="card">
                  <div className="w-64 flex text-start">
                    <p className="flex items-center gap-1 text-sm text-slate-700  bg-gray-200  rounded-md px-3 mb-2 py-1">
                      <CiLocationOn /> {item.city}
                    </p>
                  </div>
                  <Link href={"#"}>
                    <h2 className="  text-lg font-semibold text-gray-800 mb-2 hover:text-orange-500 line-clamp-2 mr-2">
                      {item.title}
                    </h2>
                  </Link>
                </div>
              </div>

              <div className="flex items-center mb-2">
                <div className="text-black text-sm  flex items-center ">
                  <div className="flex text-orange-400 mr-2">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <span className="text-base">({averageRating}/5)</span>
                  <span className="text-base text-gray-400 ml-2">
                    ({totalReviews} reviews)
                  </span>
                </div>
              </div>
              <div className="py-2 flex items-center justify-between">
                <p className="text-gray-600 flex items-center gap-1">
                  {" "}
                  <HiOutlineClock /> 1 Nights / 2 Days
                </p>

                <p className="text-base font-bold text-gray-600">
                  From: ${item.price.amount}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CardSider;
