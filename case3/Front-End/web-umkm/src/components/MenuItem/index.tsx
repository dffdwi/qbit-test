import { Button, Img, Text, Heading } from "./..";
import React from "react";

interface Props {
  className?: string;
  userImage?: string;
  titleText?: React.ReactNode;
  descriptionText?: React.ReactNode;
  buttonText?: string;
}

const MenuItem: React.FC<Props> = ({
  userImage,
  titleText,
  descriptionText,
  buttonText,
  ...props
}) => {
  return (
    <div {...props} className={`${props.className} flex flex-col w-full`}>
      <div className="self-stretch">
        <Img
          src={userImage}
          alt="Image"
          className="h-[274px] w-full rounded-[30px] object-cover"
        />
        <div className="relative mx-[34px] mt-[-108px] flex flex-col items-start gap-5 rounded-[30px] bg-white-a700 p-[34px] shadow-xs sm:p-5">
          <div className="flex self-stretch border-b border-dashed border-gray-300">
            <Heading size="headinglg" as="h4" className="mb-3">
              {titleText}
            </Heading>
          </div>
          <Text as="p" className="w-full leading-[26px]">
            {descriptionText}
          </Text>
          <Button className="flex h-[54px] min-w-[180px] flex-row items-center justify-center gap-2.5 rounded-[26px] bg-orange-900 px-[34px] text-center text-[14px] font-semibold uppercase tracking-[0.84px] text-white-a700 sm:px-5">
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
