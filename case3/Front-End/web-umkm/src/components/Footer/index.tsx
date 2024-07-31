import { Heading, Text } from "./..";
import React from "react";

interface Props {
  className?: string;
}

const Footer: React.FC<Props> = ({ ...props }) => {
  return (
    <footer
      {...props}
      className={`${props.className} flex justify-center items-end py-[30px] sm:py-5 bg-gray-900`}
    >
      <div className="container-xs mt-[70px] flex justify-center md:p-5">
        <div className="flex w-full flex-col items-center gap-[60px] sm:gap-[30px]">
          <div className="flex items-start justify-between gap-5 self-stretch md:flex-col">
            <div className="flex w-[62%] items-start justify-center gap-[30px] self-center md:w-full md:flex-col">
              <div className="flex w-[38%] flex-col items-start self-center md:w-full">
                <Heading
                  size="headingxl"
                  as="h1"
                  className="capitalize !text-white-a700"
                >
                  BaksoKu
                </Heading>
                <Text
                  as="p"
                  className="mt-3.5 w-full leading-[26px] !text-white-a700_bf"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Text>
                <div className="mt-6 flex flex-col items-start justify-center gap-5 self-stretch">
                  <div className="flex items-center gap-3.5">
                    <Text as="p" className="!text-white-a700_bf">
                      Hello@baksoku.co.id
                    </Text>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <Text as="p" className="!text-white-a700_bf">
                      +62 123 456 789
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex w-[60%] items-start justify-between gap-5 md:w-full sm:flex-col">
                <div className="flex w-[70%] flex-col items-start gap-5 self-center sm:w-full">
                  <Heading
                    size="headinglg"
                    as="h4"
                    className="!text-white-a700"
                  >
                    Quick Links
                  </Heading>
                  <ul className="flex flex-col items-start gap-5">
                    <li>
                      <a href="#" target="_blank" rel="noreferrer">
                        <Text as="p" className="!text-white-a700_bf">
                          Home
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-white-a700_bf">
                          About Us
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-white-a700_bf">
                          Our Service
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank" rel="noreferrer">
                        <Text as="p" className="!text-white-a700_bf">
                          Testimoni
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col items-center gap-5">
                  <Heading
                    size="headinglg"
                    as="h4"
                    className="!text-white-a700"
                  >
                    Usefull Links
                  </Heading>
                  <ul className="flex flex-col items-start gap-5">
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-white-a700_bf">
                          Privacy Policy
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="Disclaimer" target="_blank" rel="noreferrer">
                        <Text as="p" className="!text-white-a700_bf">
                          Disclaimer
                        </Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p" className="!text-white-a700_bf">
                          Terms & Condition
                        </Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex w-[22%] flex-col items-start gap-[22px] md:w-full">
              <Heading size="headinglg" as="h4" className="!text-white-a700">
                Follow Us
              </Heading>
              <Text
                as="p"
                className="w-full leading-[26px] !text-white-a700_bf"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </div>
          </div>
          <Heading
            as="p"
            className="border-t border-solid border-white-a700_3f px-[34px] pt-[30px] uppercase tracking-[0.84px] !text-white-a700 sm:px-5 sm:pt-5"
          >
            &copy; 2024 All Rights Reserved - BaksoKu
          </Heading>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
