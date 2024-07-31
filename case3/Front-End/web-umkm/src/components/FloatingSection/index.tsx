import React from "react";
import { Heading } from "..";

interface Props {
  className?: string;
  mainHeading?: React.ReactNode;
  subHeading?: React.ReactNode;
}

const FloatingSection: React.FC<Props> = ({
  mainHeading,
  subHeading,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-center gap-1`}
    >
      <Heading size="headingxl" as="h1" className="capitalize !text-white-a700">
        {mainHeading}
      </Heading>
      <Heading size="headings" as="h6" className="!text-white-a700_bf">
        {subHeading}
      </Heading>
    </div>
  );
};

export default FloatingSection;
