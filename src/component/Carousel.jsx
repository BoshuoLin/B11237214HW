import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { fetchAnnouncements } from "./api"; // 注意路徑是否正確

function Fade() {
  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomed, setZoomed] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const data = await fetchAnnouncements();
        setImages(data); 
      } catch (error) {
        console.error("載入圖片資料失敗", error);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  const settings = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5500,
    cssEase: "linear",
    fade: true,
    infinite: true,
    waitForAnimate: true,
    beforeChange: () => setZoomed(false),
    afterChange: (current) => {
      setActiveIndex(current);
      setTimeout(() => setZoomed(true), 50);
    },
  };

  return (
    <div className="slider-container">
      {loading ? (
        <div className="text-center text-gray-500 p-10">圖片載入中...</div>
      ) : (
        <Slider {...settings}>
          {images.map((img, index) => {
            const isActive = index === activeIndex;
            return (
              <div key={img.id}>
                <div
                  className="h-screen w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${img.imageUrl}')`,
                    transition: "transform 5.5s ease-in-out",
                    transform: isActive && zoomed ? "scale(1.15)" : "scale(1)",
                  }}
                />
              </div>
            );
          })}
        </Slider>
      )}
    </div>
  );
}

export default Fade;
