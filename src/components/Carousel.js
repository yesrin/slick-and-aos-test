import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true, // 슬라이드 밑에 점 보이게
    infinite: true, // 무한으로 반복
    speed: 500, // 넘기는 속도
    autoplay: false, // 자동으로 넘김
    autoplaySpeed: 2000, //자동으로 넘어가는 속도
    slidesToShow: 1, // 스크린에 보여지는 슬라이드 개수
    slidesToScroll: 1, // n장씩 뒤로 넘어가게 함
    centerMode: true, // 중앙정렬
    centerPadding: "0px", // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
  };

  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
    </Slider>
  );
};
export default Carousel;
