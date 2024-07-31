import React, { useRef, useEffect, useState } from "react";
import { Button, Text, Heading } from "../../components";
import Header from "../../components/Header";
import { Parallax } from "react-parallax";
import AboutUs from "./about-us";
import FloatingSection from "../../components/FloatingSection";
import ProfileFounder from "./founder-profile";
import PartnerList from "./partner-list";
import Services from "./services";

const data = [
  { mainHeading: "6", subHeading: "Varian Bakso" },
  { mainHeading: "5", subHeading: "Gerai" },
  { mainHeading: "100", subHeading: "Testimoni" },
  { mainHeading: "6", subHeading: "Layanan" },
];

const LandingPage: React.FC = () => {
  const landingPageRef = useRef<HTMLDivElement>(null);
  const [landingPageHeight, setLandingPageHeight] = useState(0);

  useEffect(() => {
    if (landingPageRef.current) {
      setLandingPageHeight(
        landingPageRef.current.getBoundingClientRect().height
      );
    }
  }, []);

  return (
    <div className="w-full h-[10000px]">
      <div
        ref={landingPageRef}
        className="flex flex-col items-center bg-white-a700"
      >
        <Parallax
          bgImage="/images/img_header.png"
          strength={500}
          className="w-full"
          bgImageStyle={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          contentClassName="flex items-center justify-center"
        >
          <div
            className="w-full h-[798px] self-stretch py-5 md:h-auto relative flex items-center justify-center "
            style={{
              background:
                "linear-gradient(90deg, rgba(89, 31, 10, 0.5), rgba(89, 31, 10, 0.1))",
            }}
          >
            <div className="absolute inset-0 z-0"></div>
            <div className="container-xs flex flex-col items-center relative z-10 h-full md:h-[100dvh]">
              <div className="flex flex-col gap-[100px] md:gap-[75px] md:p-5 sm:gap-[50px] w-full ">
                <Header landingPageHeight={landingPageHeight} />
                <div className="flex flex-col items-start gap-[34px] mt-auto">
                  <div className="flex flex-col items-start gap-5 self-stretch">
                    <Heading
                      size="heading2xl"
                      as="h1"
                      className="w-[48%] capitalize leading-[78px] !text-white-a700 md:w-full"
                    >
                      Rasakan Keajaiban Dalam Satu Gigitan
                    </Heading>
                    <Text
                      as="p"
                      className="w-[48%] leading-[26px] !text-white-a700_bf md:w-full"
                    >
                      Dari bakso klasik hingga kreasi unik, Baksoku siap
                      memanjakan lidah Anda. Ayo, coba sekarang dan rasakan
                      bedanya!
                    </Text>
                  </div>
                  <Button className="flex h-[54px] min-w-[128px] flex-row items-center justify-center rounded-[26px] bg-orange-900 px-[34px] text-center text-[14px] font-semibold uppercase tracking-[0.84px] text-white-a700 sm:px-5">
                    Pricing
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
        <div className="container-xs relative mb-[50px] mt-[-80px] md:mt-0 ">
          <div className="flex gap-[222px] rounded-[30px] bg-gray-900 py-[50px] pl-[130px] pr-14 md:flex-row md:p-5 md:gap-10 md:rounded-[0px] sm:flex-col">
            {data.map((d, index) => (
              <FloatingSection
                {...d}
                key={"boxwrapper" + index}
                className="w-[26%] md:gap-1 sm:w-full"
              />
            ))}
          </div>
        </div>
      </div>
      <AboutUs />
      <ProfileFounder />
      <PartnerList />
      <Services />
    </div>
  );
};

export default LandingPage;
