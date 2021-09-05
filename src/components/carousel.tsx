import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { VerticalCard } from "./vertical-card";
type Props = {
  array: [];
  dir: string;
  endNumber: number;
  children?: React.ReactNode;
};
export const Carousel = (props: Props) => {
  return (
    <Swiper
      className={"l-grid-full"}
      pagination={{ clickable: true }}
      breakpoints={{
        0: {
          spaceBetween: 20,
          slidesPerView: 1.33333,
        },
        576: {
          spaceBetween: 30,
          slidesPerView: 2,
        },
        768: {
          spaceBetween: 40,
          slidesPerView: 3,
        },
        992: {
          spaceBetween: 40,
          slidesPerView: 4,
        },
      }}
    >
      {props.array
        .sort(function (a: any, b: any) {
          if (a.updatedAt < b.updatedAt) {
            return -1;
          } else {
            return 1;
          }
        })
        .slice(0, props.endNumber)
        .map((data: any, index) => (
          <SwiperSlide key={index}>
            <VerticalCard
              title={data.title}
              category={data.category}
              path={`${props.dir}/${data.id}`}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
