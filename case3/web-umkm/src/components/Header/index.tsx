import { useEffect, useState, useRef } from "react";
import { Button, Heading, Img, Text } from "../index";
import {
  FaMapPin,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaBars,
} from "react-icons/fa6";

interface Props {
  className?: string;
  landingPageHeight: number;
}

const Header: React.FC<Props> = ({
  className,
  landingPageHeight,
  ...props
}) => {
  const [isSticky, setSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      ref={headerRef}
      {...props}
      className={`${className} transition-all duration-300 ease-in-out`}
    >
      <div className="flex w-full flex-col items-start gap-5">
        <div
          className={`w-full flex flex-wrap items-center justify-between gap-4 border-b border-dashed border-white-a700_3f px-4 py-2 transition-opacity duration-300 ease-in-out ${
            isSticky ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <FaMapPin className="h-4 w-4 text-white-a700" />
              <Text size="textxs" as="p" className="!text-white-a700_bf">
                South Jakarta City, DKI Jakarta
              </Text>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="h-4 w-4 text-white-a700" />
              <Text size="textxs" as="p" className="!text-white-a700_bf">
                +62 123 456 789
              </Text>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {[FaFacebookF, FaInstagram, FaLinkedin, FaTiktok].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-white-a700 hover:text-amber-700 transition-colors duration-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            )}
          </div>
        </div>
        <div
          className={`w-full max-w-[1170px] mx-auto flex items-center justify-between gap-4 px-4 py-2 transition-all duration-300 ease-in-out
            ${
              isSticky
                ? "fixed top-2 left-1/2 transform -translate-x-1/2 z-50 bg-orange-900 shadow-lg rounded-full md:top-0 md:left-0 md:transform-none md:rounded-none md:w-full"
                : ""
            }`}
        >
          <Img
            src="images/img_header_logo.png"
            alt="Headerlogo"
            className={`object-contain transition-all duration-300 ease-in-out ${
              isSticky
                ? "h-[40px] w-[112px] md:h-8 md:w-24"
                : "h-[58px] w-[162px] md:h-10 md:w-28"
            }`}
          />
          <nav className="transition-all duration-300 ease-in-out md:hidden">
            <ul
              className={`flex flex-wrap gap-[34px] ${
                isSticky ? "gap-[20px]" : ""
              }`}
            >
              {["Home", "About Us", "Our Services", "Testimoni"].map(
                (item, index) => (
                  <li key={item}>
                    <a href="#" className="cursor-pointer">
                      <Heading
                        as="p"
                        className={`uppercase tracking-[0.84px] transition-all duration-300 ease-in-out ${
                          isSticky
                            ? `${
                                index === 0
                                  ? "!text-amber-700 font-bold"
                                  : "!text-white-a700 hover:!text-amber-700"
                              } text-sm`
                            : `${
                                index === 0
                                  ? "!text-white-a700"
                                  : "!text-white-a700_bf hover:!text-white-a700"
                              } text-base`
                        }`}
                      >
                        {item}
                      </Heading>
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              className={`flex-row items-center justify-center rounded-[26px] text-center font-semibold uppercase tracking-[0.84px] transition-all duration-300 ease-in-out md:hidden ${
                isSticky
                  ? "h-[40px] min-w-[100px] px-[24px] py-2 text-xs bg-amber-700 text-white-a700 hover:bg-white hover:text-orange-900"
                  : "h-[54px] min-w-[124px] px-[34px] py-3 text-sm bg-orange-900 text-white-a700 hover:bg-amber-700"
              }`}
            >
              Pricing
            </Button>
            <button
              onClick={toggleMobileMenu}
              className="md:flex hidden items-center justify-center p-2 rounded-full bg-orange-900 text-white-a700 hover:bg-amber-700 transition-colors duration-200"
            >
              <FaBars className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div
          className={`md:flex hidden flex-col w-full bg-orange-900 transition-all duration-300 ease-in-out overflow-hidden
            ${isSticky ? "fixed top-[50px] left-0 right-0 z-50" : ""}
            ${
              isMobileMenuOpen
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <nav className="my-0 px-4 py-2">
            <ul className="flex flex-col gap-2">
              {["Home", "About Us", "Our Services", "Testimoni"].map(
                (item, index) => (
                  <li key={item}>
                    <a href="#" className="block py-2">
                      <Heading
                        as="p"
                        className={`uppercase tracking-[0.84px] transition-colors duration-200 text-center ${
                          index === 0
                            ? "!text-amber-700 font-bold"
                            : "!text-white-a700 hover:!text-amber-700"
                        } text-sm`}
                      >
                        {item}
                      </Heading>
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
          <div className="px-4 py-2">
            <Button
              className="w-full flex items-center justify-center rounded-full text-center font-semibold uppercase tracking-wider transition-all duration-300 ease-in-out
              h-10 px-4 py-2 text-sm bg-amber-700 text-white-a700 hover:bg-white hover:text-orange-900"
            >
              Pricing
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
