"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { TBlog } from "@/types/blog.types";
import BlogCard from "../../blog/BlogCard";
import "./slider-paginate.css";
const LatestBlogsSlider = ({ blogs }: { blogs: TBlog[] }) => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        // spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          390: { slidesPerView: 1.2, spaceBetween: 20 },
          // 502: { slidesPerView: 2 },
          750: { slidesPerView: 2, spaceBetween: 20 },
          // 992: { slidesPerView: 2.5 },
          1100: { slidesPerView: 3, spaceBetween: 20 },
          1680: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className=""
      >
        {blogs?.map((item) => (
          <SwiperSlide key={item?._id} className="pb-10">
            <BlogCard blog={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="custom-pagination"></div> */}
    </div>
  );
};

export default LatestBlogsSlider;
