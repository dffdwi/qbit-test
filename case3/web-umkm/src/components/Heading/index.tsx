import React from "react";

const sizes = {
  textmd: "text-[20px] font-medium italic",
  headingxs: "text-[14px] font-semibold",
  headings: "text-[18px] font-bold",
  headingmd: "text-[20px] font-bold",
  headinglg: "text-[25px] font-bold md:text-[23px] sm:text-[21px]",
  headingxl: "text-[45px] font-bold md:text-[41px] sm:text-[35px]",
  heading2xl: "text-[60px] font-bold md:text-[52px] sm:text-[46px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className,
  size = "headingxs",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component
      className={`text-blue_gray-900 font-oswald ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
