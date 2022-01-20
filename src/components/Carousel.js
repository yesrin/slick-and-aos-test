import React from "react";
import Slider from "react-slick";
import "./Carousel.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true, // 슬라이드 밑에 점 보이게
    infinite: true, // 무한으로 반복
    speed: 2000, // 넘기는 속도
    autoplay: true, // 자동으로 넘김
    arrows: true, // 옆으로 이동하는 화살표 표시 여부
    autoplaySpeed: 2000, //자동으로 넘어가는 속도
    slidesToShow: 1, // 스크린에 보여지는 슬라이드 개수
    slidesToScroll: 1, // n장씩 뒤로 넘어가게 함
    centerMode: true, // 중앙정렬
    centerPadding: "0px", // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
    draggable: true, //드래그 가능 여부
    responsive: [
      // 반응형 웹 구현 옵션
      {
        breakpoint: 960, //화면 사이즈 960px일 때
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, //화면 사이즈 768px일 때
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* <div className="up2">
        <p>안녕하세요</p>
      </div> */}
      <div className="down1">
        <Slider {...settings}>
          <div className="imageA">
            <p>안녕하세요</p>
          </div>
          <div className="imageB"></div>
          <div className="imageC"></div>
        </Slider>
      </div>
    </>
  );
};
export default Carousel;
