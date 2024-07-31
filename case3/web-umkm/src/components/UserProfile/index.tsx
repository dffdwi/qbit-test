import { Text, Heading, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  userImage?: string;
  userName?: React.ReactNode;
  userDescription?: React.ReactNode;
}

export default function UserProfile({
  userImage = "images/img_checkmark.svg",
  userName = "Berpengalaman",
  userDescription = "Memiliki pengalaman lebih dari 10 tahun di dunia kuliner.",
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex items-start w-[32%] gap-5`}>
      <Img src={userImage} alt="Berpengalaman" className="h-[48px]" />
      <div className="mt-1.5 flex flex-1 flex-col items-start gap-0.5 self-end">
        <Heading size="headinglg" as="h4">
          {userName}
        </Heading>
        <Text as="p" className="w-full leading-[26px]">
          {userDescription}
        </Text>
      </div>
    </div>
  );
}
