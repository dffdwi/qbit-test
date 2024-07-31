import { Text, Heading, Img } from "..";
import React from "react";

interface Props {
  className?: string;
  diningRoomImage?: string;
  headingText?: React.ReactNode;
  descriptionText?: React.ReactNode;
}

const ServiceItem: React.FC<Props> = ({
  diningRoomImage,
  headingText,
  descriptionText,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-full gap-6 p-[50px] md:p-5 bg-white-a700 rounded-[30px]`}
    >
      <Img
        src={diningRoomImage}
        alt="Dinein"
        className="h-[44px] w-[44px] object-cover"
      />
      <div className="mb-[26px] flex flex-col items-start justify-center self-stretch">
        <Heading size="headingmd" as="h5">
          {headingText}
        </Heading>
        <Text as="p" className="w-full leading-[26px]">
          {descriptionText}
        </Text>
      </div>
    </div>
  );
};

export default ServiceItem;
