"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { HERO_SLIDE } from "../../constants/main_bd";
import Button from "../commonts/Button";
import SectionTitle from "../commonts/sectionTitel";
import DateSelect from "../datepicker/DatePicker";
import SelectBox from "../select/select_input";

export default function HeroSlider() {
  return (
    <section className="w-full h-76vh relative  ">
      <div className=" absolute w-full h-full">
        <Swiper
          modules={[EffectFade, Autoplay, Navigation, Pagination, Scrollbar]}
          navigation={false}
          spaceBetween={30}
          effect={"fade"}
          autoplay={true}
          scrollbar={{
            hide: true,
          }}
          loop
          className="w-full h-full hero_slider"
        >
          {HERO_SLIDE.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="relative w-full h-full "
                style={{ backgroundImage: `url(${slide.src})` }}
              >
                <Image
                  alt={slide.alt}
                  src={slide.src}
                  placeholder="blur"
                  quality={100}
                  fill
                  priority
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
                <div className=" absolute inset-0 bg-slate-700/80 flex items-center justify-center "></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container mx-auto pt-32 pb-32 relative z-10">
        <div className=" text-white text-center pb-16">
          <SectionTitle
            title="Love where you're going"
            className=" text-white text-center pb-3 font-bold text-5xl uppercase"
          />
          <p className="text-lg capitalize">
            {" "}
            Book incredible things to do around the world.
          </p>
        </div>

        <div className=" bg-white drop-shadow-md rounded-md p-6 ">
          <div className="flex justify-between items-center gap-3">
            <SelectBox variant={"grow-[2] shrink"} />
            <DateSelect variant={"grow-[2] shrink"} />
            <DateSelect variant={"grow-[2] shrink"} />
            <Button
              title="Search"
              type="button"
              variant=" h-12  text-black  z-10 flex-0 rounded-lg pl-6 pr-6 "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
