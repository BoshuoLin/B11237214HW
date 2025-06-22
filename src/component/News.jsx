import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { fetchNews } from "./api";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute z-10  -right-10  top-1/2  -translate-y-1/2 bg-white/80 hover:bg-cyan-500 text-cyan-700 hover:text-white rounded-full p-4 cursor-pointer shadow transition-all duration-300"
    >
      <FaAngleRight className="w-5 h-5" />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute z-10 -left-10 top-1/2  -translate-y-1/2 bg-white/80 hover:bg-cyan-500 text-cyan-700 hover:text-white rounded-full p-4 cursor-pointer shadow transition-all duration-300"
    >
      <FaAngleLeft className="w-5 h-5" />
    </button>
  );
}

function CustomArrows({ category }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    centerPadding: "16px",
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      try {
        const data = await fetchNews();
        // 根據傳入的 category 過濾
        const filtered = category ? data.filter((item) => item.category === category) : data;
        setNews(filtered);
      } catch (error) {
        console.error("載入圖片資料失敗", error);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [category]); // category 改變時會重新抓資料過濾

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {loading ? (
          <div ></div>
        ) : news.length === 0 ? (
          <div className="p-4 text-center text-gray-500">沒有資料</div>
        ) : (
          news.map((item) => (
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              key={item.id}
              className="w-full bg-white rounded-2xl aspect-square p-7 scale-95 flex flex-col justify-between duration-300"
            >
              <div className="flex justify-between items-start text-sm text-sky-500">
                <span>{new Date(item.date).toLocaleDateString("zh-TW")}</span>
                <span className="bg-sky-100 text-sky-700 px-2 py-0.5 rounded-full text-sm">
                  {item.category === "announcement"
                    ? "公告"
                    : item.category === "race"
                    ? "競賽"
                    : item.category === "event"
                    ? "活動"
                    : item.category}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-stone-600 tracking-tight leading-8 my-5 line-clamp-2 bg-gradient-to-t from-cyan-300/40 to-transparent bg-[length:100%_1.2em] bg-no-repeat bg-bottom box-decoration-clone">
                {item.title}
              </h3>

              <div className="flex flex-col justify-center items-center">
                <p className="text-stone-400 text-sm leading-7 line-clamp-3 my-auto">
                  {item.content.replace(/\n+/g, " ").slice(0, 200)}...
                </p>
              </div>
            </a>
          ))
        )}
      </Slider>
    </div>
  );
}

export default CustomArrows;
