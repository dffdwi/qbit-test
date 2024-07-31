import { Img } from "../../components";
import { Suspense } from "react";
import AnimateOnView from "../../hooks/AnimateOnView";

const data = [
  { logoipsum: "images/img_logoipsum_211_1.png" },
  { logoipsum: "images/img_logoipsum_212_1.png" },
  { logoipsum: "images/img_logoipsum_213_1.png" },
  { logoipsum: "images/img_logoipsum_215_1.png" },
];

const PartnerList: React.FC = () => {
  return (
    <div className="flex justify-center bg-gray-900 py-[50px] md:py-5">
      <div className="container-xs flex justify-center px-14 md:p-5 md:px-5">
        <div className="flex w-full gap-[146px] md:flex-col md:h-auto">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <div className="h-[44px] w-[26%] object-contain md:w-full md:mb-10">
                <AnimateOnView
                  key={"listlogoipsum" + index}
                  direction="up"
                  delay={0.1 * (index + 1)}
                >
                  <Img src={d.logoipsum} alt="Logoipsum" />
                </AnimateOnView>
              </div>
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default PartnerList;
