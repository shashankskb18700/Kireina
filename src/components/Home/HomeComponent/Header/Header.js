import React from "react";
import AliceCarousel from "react-alice-carousel";

import "react-alice-carousel/lib/alice-carousel.css";
import "./Header.css";

const Header = ({ imgArray }) => {
  console.log(imgArray);
  const imgArr = [];
  // if (Object.values(imgArray)[0] !== undefined)
  //   Object.values(imgArray).map((tt) => (
  //     <div>
  //       {tt.map((st) =>
  //         imgArr.push(<img key={st.value} src={`${st.value}`} />)
  //       )}
  //     </div>
  //   ));
  if (imgArray) {
    imgArray.map((st) => (
      <div>
        {imgArr.push(
          <img className="headerImg" key={st.value} src={`${st.value}`} />
        )}
      </div>
    ));
  }

  // console.log(imgArr);
  return (
    <div className="head">
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
