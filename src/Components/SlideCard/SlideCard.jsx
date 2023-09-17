import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlideCard = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: false,
    appendDots: (dots) => {
      return <ul style={{ margin: '0px' }}>{dots}</ul>;
    },
  };

  const imageStyle = {
    objectFit: 'cover',
    width: '370px',  
    height: '300px',  
  };

  return (
    <Slider {...settings}>
      {products.map((product, index) => (
        <div className='slide-head' key={index}>
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} style={imageStyle} />
        </div>
      ))}
    </Slider>
  );
};

export default SlideCard;



// import React from "react"
// import Slider from "react-slick"

// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

// const SlideCard = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     appendDots: (dots) => {
//       return <ul style={{ margin: "0px" }}>{dots}</ul>
//     },
//   }
//   return (
//     <>
//           <Slider {...settings}>
//             <h1>a</h1>
//          <img src="imgE(1).png" alt="" />
//          <img src="" alt="" />
//          <img src="" alt="" />
//           </Slider>

//     </>
//   )
// }

// export default SlideCard
