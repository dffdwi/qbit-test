import { Heading, Img, Slider } from "../../components";
import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import { EventObject } from "react-alice-carousel";
import AnimateOnView from "../../hooks/AnimateOnView";

const Testimonials: React.FC = () => {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  const testimonialItems = [
    {
      text: "Saya sangat menyukai BaksoKu. Bakso Keju favorit saya, rasanya unik!",
      name: "Sari",
      role: "Pecinta bakso",
      imgSrc: "images/img_rectangle_8.png",
    },
    {
      text: "BaksoKu mengubah cara saya menikmati bakso. Rasanya luar biasa!",
      name: "Budi",
      role: "Pelanggan setia",
      imgSrc: "images/img_rectangle_8.png",
    },
    {
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
      name: "Mr. John Doe",
      role: "Clients",
      imgSrc: "images/img_rectangle_8.png",
    },
    {
      text: "BaksoKu adalah tempat favorit saya untuk menikmati bakso yang lezat!",
      name: "Ayu",
      role: "Penggemar Bakso",
      imgSrc: "images/img_rectangle_8.png",
    },
    {
      text: "Kualitas bakso di BaksoKu selalu konsisten dan rasanya enak.",
      name: "Rina",
      role: "Pelanggan Setia",
      imgSrc: "images/img_rectangle_8.png",
    },
    {
      text: "Saya suka variasi bakso yang ditawarkan oleh BaksoKu!",
      name: "Dewi",
      role: "Food Enthusiast",
      imgSrc: "images/img_rectangle_8.png",
    },
  ];

  const groupedItems = testimonialItems.map((item, index) => (
    <div
      key={index}
      className="flex flex-col bg-black-900_11 my-10 gap-5 rounded-[30px] bg-white p-[34px] shadow-lg md:w-full md:p-5 mx-2"
    >
      <Heading
        size="textmd"
        as="p"
        className="!font-archivo leading-[26px] !text-gray-600"
      >
        {item.text}
      </Heading>
      <div className="flex items-center gap-6">
        <Img
          src={item.imgSrc}
          alt="Image"
          className="h-[64px] w-[64px] rounded-full object-cover"
        />
        <div className="flex flex-1 flex-col items-start justify-center gap-2.5">
          <Heading size="headings" as="h6">
            {item.name}
          </Heading>
          <Heading
            as="p"
            className="uppercase tracking-[0.84px] !text-amber-700"
          >
            {item.role}
          </Heading>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col items-center justify-center gap-11 overflow-auto py-[100px] md:py-5 px-5">
      <div className="container-xs self-center md:p-5">
        <AnimateOnView direction="up" delay={0.1}>
          <div className="flex flex-col items-start justify-center gap-5">
            <Heading
              as="h2"
              className="uppercase tracking-[0.84px] !text-amber-700"
            >
              Testimonials Customer
            </Heading>
            <Heading
              size="headingxl"
              as="h3"
              className="w-[48%] capitalize leading-[59px] md:w-full"
            >
              Kami adalah Pilihan Terbaik untuk Bakso Lezat
            </Heading>
          </div>
        </AnimateOnView>
      </div>

      <div className="mx-auto flex w-full">
        <Slider
          autoPlay
          autoPlayInterval={2000}
          responsive={{
            "0": { items: 1 },
            "551": { items: 1 },
            "1051": { items: 3 },
          }}
          disableDotsControls
          activeIndex={sliderState}
          onSlideChanged={(e: EventObject) => {
            setSliderState(e?.item);
          }}
          ref={sliderRef}
          items={groupedItems}
        />
      </div>
    </div>
  );
};

export default Testimonials;
