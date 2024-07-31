import { Text, Heading, Img } from "../../components";
import UserProfile from "../../components/UserProfile";
import { Suspense } from "react";
import AnimateOnView from "../../hooks/AnimateOnView";

const data = [
  {
    userImage: "images/img_checkmark.svg",
    userName: "Berpengalaman",
    userDescription:
      "Memiliki pengalaman lebih dari 10 tahun di dunia kuliner.",
  },
  {
    userImage: "images/img_checkmark.svg",
    userName: "Inovasi dan Tradisi",
    userDescription:
      "Bereksperimen rasa baru sambil menjaga cita rasa otentik bakso.",
  },
  {
    userImage: "images/img_checkmark.svg",
    userName: "Dedikasi pada Kualitas",
    userDescription: "Memastikan setiap mangkuk bakso dibuat dengan sempurna.",
  },
];

const ProfileFounder: React.FC = () => {
  return (
    <div className="bg-[#e0e0e0]">
      <div className="flex justify-center py-[100px] md:py-5">
        <div className="container-xs flex justify-center md:p-5">
          <div className="flex w-full items-center md:flex-col">
            <div className="h-[616px] w-[36%] rounded-[30px] object-contain md:w-full">
              <AnimateOnView direction="left" delay={0.1}>
                <Img
                  src="images/img_left_616x590.png"
                  alt="Left"
                  className=""
                />
              </AnimateOnView>
            </div>
            <div className="relative ml-[-406px] flex flex-1 flex-col items-end gap-[126px] md:ml-0 md:gap-[94px] md:self-stretch sm:gap-[63px]">
              <AnimateOnView direction="right" delay={0.2}>
                <div className="mr-[156px] flex flex-col items-start gap-3 md:mr-0">
                  <Heading
                    as="h2"
                    className="uppercase tracking-[0.84px] !text-amber-700"
                  >
                    Daffa Dwi Haykal
                  </Heading>
                  <Heading size="headingxl" as="h3" className="capitalize">
                    Kenali Pendiri BaksoKu
                  </Heading>
                  <Text as="p">
                    Membawa Semangat dan Tradisi ke Setiap Mangkuk
                  </Text>
                </div>
              </AnimateOnView>
              <AnimateOnView direction="right" delay={0.3}>
                <div className="flex justify-center self-stretch rounded-[30px] bg-gray-50">
                  <div className="my-6 flex w-[94%] gap-[30px] md:flex-col">
                    <Suspense fallback={<div>Loading feed...</div>}>
                      {data.map((d, index) => (
                        <UserProfile
                          {...d}
                          key={"listberpengalam" + index}
                          className="md:w-full"
                        />
                      ))}
                    </Suspense>
                  </div>
                </div>
              </AnimateOnView>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileFounder;
