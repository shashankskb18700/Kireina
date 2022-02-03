import React from "react";
import AliceCarousel from "react-alice-carousel";

import "react-alice-carousel/lib/alice-carousel.css";
import "./Header.css";

const Header = (imgArray) => {
  const imgArr = [];

  Object.values(imgArray).map((tt) => (
    <div>
      {tt.map((st) => imgArr.push(<img key={st.value} src={`${st.value}`} />))}
    </div>
  ));

  return (
    <div>
      i am a header
      <div className="alice">
        <AliceCarousel
          disableButtonsControls={true}
          infinite={true}
          autoPlay={true}
          autoPlayInterval="3000"
          autoPlayStrategy={false}
          // autoPlayDirection="rtl"
          fadeOutAnimation={true}
          mouseTrackingEnabled={false}
          disableAutoPlayOnAction={false}
          disableDotsControls={true}
          items={imgArr}
        ></AliceCarousel>
      </div>
    </div>
  );
};

export default Header;
