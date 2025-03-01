"use client";
import React from "react";
import Slogan from "@/components/common/Slogan";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const page = () => {
  const images = [
    { id: 0, item: "/Photos/banner1.png", type: "image" },
    { id: 1, item: "/Photos/banner2.png", type: "image" },
    { id: 2, item: "/Photos/banner3.png", type: "image" },
    { id: 3, item: "/Photos/banner4.mp4", type: "video" },
  ];

  return (
    <div className="p-2 flex flex-col justify-center items-center gap-10">
      <div className="bg-black w-full flex justify-center p-3 rounded-lg">
        <Slogan />
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
        className="w-full max-w-4xl h-[500px]"
      >
        {images.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex justify-center items-center w-full h-full">
              {item.type === "image" ? (
                <Image
                  src={item.item}
                  width={1280}
                  height={500}
                  alt="banner photo"
                  className="rounded-lg object-cover w-full h-full"
                />
              ) : (
                <video
                  src={item.item}
                  controls
                  className="rounded-lg object-cover w-full h-full"
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default page;
