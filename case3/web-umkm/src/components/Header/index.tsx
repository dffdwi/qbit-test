import { useEffect, useState, useRef } from "react";
import { Button, Heading, Img, Text } from "../index";
import {
  FaMapPin,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa6";

interface Props {
  className?: string;
  landingPageHeight: number;
}

export default function Header({ className, landingPageHeight, ...props }: Props) {
  const [isSticky, setSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > landingPageHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [landingPageHeight]);

  return (
    <header ref={headerRef} {...props} className={`${className} transition-all duration-300 ease-in-out`}>
      <div className="flex w-full flex-col items-start gap-5">
        <div className={`flex items-start justify-between gap-5 self-stretch border-b border-dashed border-white-a700_3f sm:flex-col transition-opacity duration-300 ease-in-out ${isSticky ? 'opacity-0' : 'opacity-100'}`}>
          <div className="flex items-center sm:flex-col">
            <div className="flex items-center gap-3.5">
              <FaMapPin className="h-[26px] object-cover text-white-a700" />
              <Text size="textxs" as="p" className="!text-white-a700_bf">
                South Jakarta City, DKI Jakarta
              </Text>
            </div>
            <div className="flex items-center gap-3.5">
              <FaPhone className="ml-[50px] h-[26px] object-cover text-white-a700" />
              <Text size="textxs" as="p" className="!text-white-a700_bf">
                +62 123 456 789
              </Text>
            </div>
          </div>
          <div className="mb-3.5 flex items-start gap-3.5">
            <a href="#">
              <FaFacebookF className="h-[20px] w-[20px] text-white-a700" />
            </a>
            <a href="#">
              <FaInstagram className="h-[20px] w-[20px] text-white-a700" />
            </a>
            <a href="#">
              <FaLinkedin className="h-[20px] w-[20px] text-white-a700" />
            </a>
            <a href="#">
              <FaTiktok className="h-[20px] w-[20px] text-white-a700" />
            </a>
          </div>
        </div>
        <div
          className={`w-full max-w-[1170px] mx-auto flex items-center justify-between gap-5 md:flex-col md:p-5 transition-all duration-300 ease-in-out
            ${
              isSticky
                ? 'fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white bg-opacity-90 shadow-lg py-4 px-8 rounded-full'
                : ''
            }`}
        >
          <Img
            src="images/img_header_logo.png"
            alt="Headerlogo"
            className="h-[58px] w-[162px] object-contain transition-all duration-300 ease-in-out"
          />
          <nav className="transition-all duration-300 ease-in-out">
            <ul className="flex flex-wrap gap-[34px]">
              <li>
                <a href="#">
                  <Heading
                    as="p"
                    className={`uppercase tracking-[0.84px] transition-colors duration-300 ease-in-out ${
                      isSticky ? '!text-gray-900' : '!text-white-a700'
                    }`}
                  >
                    Home
                  </Heading>
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer">
                  <Heading
                    as="p"
                    className={`uppercase tracking-[0.84px] transition-colors duration-300 ease-in-out ${
                      isSticky ? '!text-gray-900_bf hover:!text-gray-900' : '!text-white-a700_bf hover:!text-white-a700'
                    }`}
                  >
                    About Us
                  </Heading>
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer">
                  <Heading
                    as="p"
                    className={`uppercase tracking-[0.84px] transition-colors duration-300 ease-in-out ${
                      isSticky ? '!text-gray-900_bf hover:!text-gray-900' : '!text-white-a700_bf hover:!text-white-a700'
                    }`}
                  >
                    Our Services
                  </Heading>
                </a>
              </li>
              <li>
                <a href="#" className="cursor-pointer">
                  <Heading
                    as="p"
                    className={`uppercase tracking-[0.84px] transition-colors duration-300 ease-in-out ${
                      isSticky ? '!text-gray-900_bf hover:!text-gray-900' : '!text-white-a700_bf hover:!text-white-a700'
                    }`}
                  >
                    Testimoni
                  </Heading>
                </a>
              </li>
            </ul>
          </nav>
          <Button className="flex h-[54px] min-w-[124px] flex-row items-center justify-center rounded-[26px] bg-orange-900 px-[34px] text-center text-[14px] font-semibold uppercase tracking-[0.84px] text-white-a700 sm:px-5 transition-all duration-300 ease-in-out">
            Pricing
          </Button>
        </div>
      </div>
    </header>
  );
}