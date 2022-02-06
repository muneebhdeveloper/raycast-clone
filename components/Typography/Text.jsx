import React from "react";

const classesForVariants = {
  h1: "text-[44px] lg:text-[80px] mt-[48px] mb-[24px] font-semibold bg-clip-text text-white",
  h2: "text-[32px] lg:text-[40px] font-medium text-center mb-4 text-white",
  h3: "text-[20px] font-medium mb-[8px]",
  p: "text-4 lg:text-[20px] text-white/40 leading-[20px] lg:leading-[28px] mb-[48px]",
  span: "",
};

export default function Heading({
  variant,
  children,
  className,
  ...restProps
}) {
  const Variant = variant || "span";
  let classes = classesForVariants[variant];

  if (className) {
    let defaultClasses = classes.split(" ");
    let classNamesFromProp = className.split(" ");
    classes = [...defaultClasses, ...classNamesFromProp].join(" ");
  }

  return (
    <Variant {...restProps} className={classes}>
      {children}
    </Variant>
  );
}
