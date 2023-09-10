import Slider from "react-slick";
import Image from "next/image";

interface ImageSliderProps {
  rtl?: boolean;
  images: string[];
}

export default function ImageSlider({ rtl = false, images }: ImageSliderProps) {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    rtl: rtl,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div className="w-full mt-0 p-0">
      <Slider {...settings}>
        {images.map((img: any, idx: any) => (
          <Image
            key={idx}
            src={img}
            alt={`Logo ${idx + 1}`}
            width={150}
            height={150}
          />
        ))}
      </Slider>
    </div>
  );
}
