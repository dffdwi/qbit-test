import { Text, Heading } from "../../components";
import { Parallax } from "react-parallax";
import AnimateOnView from "../../hooks/AnimateOnView";

const Discount: React.FC = () => {
  return (
    <div>
      <Parallax
        bgImage="/images/img_cta.png"
        strength={500}
        className="w-full"
        bgImageStyle={{
          width: "100%",
          height: "100dvh",
          objectFit: "cover",
        }}
        contentClassName="flex items-start justify-center"
      >
        <div
          className="w-full h-[100dvh] py-[100px] md:h-auto md:py-5 relative flex items-start justify-center"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3))",
          }}
        >
          <div className="container-xs mb-[252px] flex md:p-5 relative z-10">
            <AnimateOnView direction="up" delay={0.1}>
              <div className="flex w-[56%] flex-col items-start justify-center rounded-[30px] bg-white-a700 px-[50px] py-[46px] md:w-full md:p-5">
                <Heading size="headinglg" as="h2" className="!text-amber-700">
                  20 % For Student Customer
                </Heading>
                <Heading
                  size="heading2xl"
                  as="h3"
                  className="mt-3.5 w-full capitalize leading-[78px]"
                >
                  Tunjukan Kartu Tanda Pelajarmu!
                </Heading>
                <Text as="p" className="mt-[22px]">
                  Rayakan Masa Sekolahmu dengan Diskon 20% di BaksoKu.
                </Text>
              </div>
            </AnimateOnView>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Discount;
