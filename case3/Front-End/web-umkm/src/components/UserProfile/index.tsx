import { Text, Heading, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  userImage?: string;
  userName?: React.ReactNode;
  userDescription?: React.ReactNode;
}

const UserProfile: React.FC<Props> = ({
  userImage,
  userName,
  userDescription,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`${props.className} flex items-start w-[32%] gap-5`}
    >
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
};

export default UserProfile;
