import { Img } from "../../components";
import { Suspense } from "react";

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
        <div className="flex w-full gap-[146px] md:flex-col">
          <Suspense fallback={<div>Loading feed...</div>}>
            {data.map((d, index) => (
              <Img
                key={"listlogoipsum" + index}
                src={d.logoipsum}
                alt="Logoipsum"
                className="h-[44px] w-[26%] object-contain md:w-full"
              />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default PartnerList;
