import { Button, Img, Text, Heading } from "../../components";

export default function AboutUs() {
  return (
    <div>
      <div className="flex justify-center bg-white-a700 py-[50px] md:py-5">
        <div className="container-xs mb-[50px] flex justify-between gap-5 md:flex-col md:p-5">
          <Img
            src="/images/img_left.png"
            alt="Left"
            className="h-[620px] w-[48%] rounded-[30px] object-contain md:w-full"
          />
          <div className="flex w-[48%] flex-col items-start gap-[34px] py-[60px] md:w-full md:py-5">
            <div className="flex flex-col items-start justify-center gap-3 self-stretch">
              <Heading
                as="h2"
                className="uppercase tracking-[0.84px] !text-amber-700"
              >
                About Us
              </Heading>
              <Heading size="headingxl" as="h3" className="capitalize">
                BaksoKu
              </Heading>
              <Text as="p" className="w-full leading-[26px]">
                Di BaksoKu, kami bangga menyajikan bakso terbaik dan paling
                lezat, yang dibuat dengan cinta dan bahan berkualitas.
                Perjalanan kami dimulai dengan hasrat sederhana untuk cita rasa
                otentik Indonesia, dan hari ini, kami membawa Anda pengalaman
                unik yang menggabungkan tradisi dan inovasi.
              </Text>
            </div>
            <div className="flex flex-col gap-3 self-stretch">
              <div className="flex items-center gap-[15px]">
                <Img
                  src="images/img_checkmark.svg"
                  alt="Checkmark"
                  className="h-[28px] self-center"
                />
                <Text as="p">Sudah berdiri sejak 2022</Text>
              </div>
              <div className="flex items-center gap-[15px]">
                <Img
                  src="/images/img_checkmark.svg"
                  alt="Checkmark"
                  className="h-[28px] self-center"
                />
                <Text as="p">Dikelola oleh keluarga</Text>
              </div>
              <div className="flex items-center gap-[15px]">
                <Img
                  src="/images/img_checkmark.svg"
                  alt="Checkmark"
                  className="h-[28px] self-center"
                />
                <Text as="p">Variasi inovatif</Text>
              </div>
              <div className="flex items-center gap-[15px]">
                <Img
                  src="/images/img_checkmark.svg"
                  alt="Checkmark"
                  className="h-[28px] self-center"
                />
                <Text as="p">Kualitas yang bisa anda percaya</Text>
              </div>
            </div>
            <Button
              rightIcon={
                <Img
                  src="images/img_profile.svg"
                  alt="Profile"
                  className="h-[18px] w-[16px]"
                />
              }
              className="flex h-[54px] min-w-[180px] flex-row items-center justify-center gap-2.5 rounded-[26px] bg-orange-900 px-[34px] text-center text-[14px] font-semibold uppercase tracking-[0.84px] text-white-a700 sm:px-5"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}