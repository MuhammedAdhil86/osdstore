import React from "react";
import Slider from "react-slick";

// Import images for desktop screens only
import imageDesktop1 from "../../img/slider_img/sk.jpg";
import imageDesktop2 from "../../img/slider_img/sr.jpg";
import imageDesktop3 from "../../img/slider_img/ss.jpg";
import imageMobile1  from "../../img/slider_img/skmb.jpg";
import imageMobile2  from "../../img/slider_img/srmb.jpg";
import imageMobile3  from "../../img/slider_img/ssmb.jpg";


function Bigcard() {
  const BigcardData = [
    {
      id: 1,
      desktopImage: imageDesktop1, // Your actual imported image

      mobileImage: imageMobile1, // Placeholder for mobile
      title: "Sample Slide 1",
    },
    {
      id: 2,
      desktopImage: imageDesktop2,
  
      mobileImage: imageMobile2,
      title: "Sample Slide 2",
    },
    {
      id: 3,
      desktopImage: imageDesktop3,

      mobileImage: imageMobile3,
      title: "Sample Slide 3",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    arrows: false,
  };

  return (
    <div className=" w-screen 
                      mt-14  
                    overflow-hidden lg:h-[546px] md:h-[541px]">
      <Slider {...settings} className="w-full sm:h-[500px]">
        {BigcardData.map((data) => (
          <div key={data.id} className=" w-full   ">
            <picture className="">
              {/* Mobile Image (up to 768px) */}
              <source media="(max-width: 768px)" srcSet={data.mobileImage} />
  
              {/* Tablet Image (769px - 1024px) */}
              <source media="(max-width: 1024px)" srcSet={data.tabletImage} />
  
              {/* Desktop Image (default) */}
              <img
                src={data.desktopImage} 
                className="w-full h-[480px] md:h-[543px] lg:h-[541px] "
                alt={data.title}
              />
            </picture>
          </div>
        ))}
      </Slider>
    </div>
  );
  
}

export default Bigcard;
