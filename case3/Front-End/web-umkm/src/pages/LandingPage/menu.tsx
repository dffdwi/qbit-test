import { Heading } from "../../components";
import React, { Suspense } from "react";
import MenuItem from "../../components/MenuItem";
import AnimateOnView from "../../hooks/AnimateOnView"; 

const data = [
  {
    userImage: "images/img_rectangle_6.png",
    titleText: "Bakso Original",
    descriptionText:
      "Bakso klasik dengan cita rasa autentik selalu menjadi favorit.",
    buttonText: "Learn More",
  },
  {
    userImage: "images/img_rectangle_6.png",
    titleText: "Bakso Keju",
    descriptionText: "Keju meleleh di dalamnya, memberikan rasa yang unik.",
    buttonText: "Learn More",
  },
  {
    userImage: "images/img_rectangle_6.png",
    titleText: "Bakso Urat",
    descriptionText:
      "Bakso dengan tekstur urat yang kenyal dan rasa yang gurih.",
    buttonText: "Learn More",
  },
  {
    userImage: "images/img_rectangle_6.png",
    titleText: "Bakso Telur",
    descriptionText: "Diisi telur puyuh, menambah kelezatan setiap gigitan.",
    buttonText: "Learn More",
  },
  {
    userImage: "images/img_rectangle_6.png",
    titleText: "Bakso Ikan",
    descriptionText:
      "Bakso dengan bahan dasar ikan yang lembut dan kaya protein.",
    buttonText: "Learn More",
  },
  {
    userImage: "images/img_rectangle_6.png",
    titleText: "Bakso Pedas",
    descriptionText: "Bakso dengan tingkat kepedasan yang bisa disesuaikan.",
    buttonText: "Learn More",
  },
];

const Menu: React.FC = () => {
  return (
    <div className="bg-[#e0e0e0]">
      <div className="flex flex-col items-center justify-center py-[100px] md:py-5">
        <div className="container-xs flex flex-col gap-11 md:p-5">
          <div className="mx-[260px] flex flex-col items-center justify-center gap-3.5 px-14 md:mx-0 md:px-5">
            <AnimateOnView direction="up" delay={0.1}>
              <Heading
                as="h2"
                className="uppercase tracking-[0.84px] !text-amber-700"
              >
                Our product
              </Heading>
            </AnimateOnView>
            <AnimateOnView direction="up" delay={0.2}>
              <Heading size="headingxl" as="h3" className="capitalize">
                Varian BaksoKu
              </Heading>
            </AnimateOnView>
          </div>
          <div className="grid grid-cols-3 justify-center gap-[34px] md:grid-cols-2 sm:grid-cols-1">
            <Suspense fallback={<div>Loading feed...</div>}>
              {data.map((d, index) => (
                <AnimateOnView key={"wrapper" + index} direction="up" delay={0.1 * (index + 1)}>
                  <MenuItem {...d} />
                </AnimateOnView>
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
